const express = require('express');
const OpenAI = require('openai');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Production environment setup
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
      next();
    }
  });
}

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(require('cors')());

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Load the validator prompt
let VALIDATOR_PROMPT = '';
async function loadValidatorPrompt() {
  try {
    VALIDATOR_PROMPT = await fs.readFile('validator_prompt.md', 'utf8');
  } catch (error) {
    console.error('Error loading validator prompt:', error);
    VALIDATOR_PROMPT = 'Error loading prompt';
  }
}

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/validate', async (req, res) => {
  try {
    const { question_content, end_date } = req.body;
    
    if (!question_content || !end_date) {
      return res.status(400).json({
        error: 'Missing question_content or end_date'
      });
    }

            // Call OpenAI GPT-5 to validate the question
        const completion = await openai.chat.completions.create({
            model: "gpt-5", // Use GPT-5 when available, fallback to gpt-4
            messages: [
                {
                    role: "system",
                    content: VALIDATOR_PROMPT
                },
                {
                    role: "user",
                    content: JSON.stringify({
                        question_content,
                        end_date
                    })
                }
            ]
            // Removed temperature parameter as it's not supported by this model
        });

    const responseContent = completion.choices[0].message.content;
    
    // Try to parse the JSON response
    try {
      let jsonStr = responseContent.trim();
      
      // Clean up the response to extract JSON
      if (jsonStr.includes('```json')) {
        const jsonStart = jsonStr.indexOf('```json') + 7;
        const jsonEnd = jsonStr.indexOf('```', jsonStart);
        jsonStr = jsonStr.substring(jsonStart, jsonEnd).trim();
      } else if (jsonStr.startsWith('{') && jsonStr.endsWith('}')) {
        // Already looks like JSON
      } else {
        // Try to find JSON in the response
        const start = jsonStr.indexOf('{');
        const end = jsonStr.lastIndexOf('}') + 1;
        if (start !== -1 && end !== 0) {
          jsonStr = jsonStr.substring(start, end);
        }
      }
      
      const result = JSON.parse(jsonStr);
      res.json(result);
      
    } catch (jsonError) {
      // If JSON parsing fails, return the raw response
      res.json({
        verdict: 'error',
        reasoning: 'Failed to parse OpenAI response as JSON',
        raw_response: responseContent,
        followup_questions: []
      });
    }
    
  } catch (error) {
    console.error('Validation error:', error);
    res.status(500).json({
      error: error.message || 'Internal server error'
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Start server
async function startServer() {
  await loadValidatorPrompt();
  
  app.listen(PORT, () => {
    console.log(`🚀 Validator Agent server running on http://localhost:${PORT}`);
    console.log(`📝 Loaded validator prompt: ${VALIDATOR_PROMPT.length} characters`);
  });
}

startServer().catch(console.error); 