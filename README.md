# 🔍 Validator Agent Web Platform

A web-based platform for testing the Validator Agent that evaluates whether questions or polls qualify for a betting platform using OpenAI's GPT-5.

## 🚀 Features

- **Web Interface**: Clean, modern UI for easy testing
- **OpenAI Integration**: Uses GPT-5 for intelligent question validation
- **Real-time Validation**: Instant feedback on question eligibility
- **72-Hour Rule Enforcement**: Automatically checks time window compliance
- **Public Observability Test**: Validates if events can be publicly verified
- **Follow-up Questions**: Provides guidance for improving rejected questions

## 🛠️ Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **AI**: OpenAI GPT-5 API
- **Styling**: Modern CSS with gradients and animations

## 📋 Prerequisites

- Node.js (v16 or higher)
- OpenAI API key
- npm or yarn package manager

## 🚀 Quick Start

### 1. Clone and Install

```bash
# Navigate to the project directory
cd Validator

# Install dependencies
npm install
```

### 2. Environment Setup

```bash
# Copy the environment template
cp env.example .env

# Edit .env and add your OpenAI API key
OPENAI_API_KEY=your_actual_openai_api_key_here
```

### 3. Start the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3000`

## 🎯 Usage

### Web Interface

1. Open your browser and go to `http://localhost:3000`
2. Enter your question in the text area
3. Set the end date (must be within 72 hours)
4. Click "Validate Question"
5. View the validation result and any follow-up questions

### API Endpoint

You can also use the API directly:

```bash
curl -X POST http://localhost:3000/api/validate \
  -H "Content-Type: application/json" \
  -d '{
    "question_content": "Will Apple announce a new iPhone before Friday?",
    "end_date": "2025-01-17T20:00:00Z"
  }'
```

## 📝 Validation Rules

The agent validates questions based on these criteria:

1. **72-Hour Window**: End date must be within 72 hours
2. **Public Observability**: Event must be publicly verifiable
3. **Objective Criteria**: Question must have clear, measurable outcomes
4. **Trusted Sources**: Only relies on reputable news outlets and official sources

## 🔍 Example Questions

### ✅ Valid Questions
- "Will Donald Trump and Elon Musk meet in person within the next 72 hours?"
- "Will Apple announce a new iPhone model before Friday?"
- "Will the Lakers win their next game against the Warriors?"

### ❌ Invalid Questions
- "Will I feel more motivated by Friday?" (subjective)
- "Will Taylor Swift post about her album before September 30?" (too far in future)
- "Will my friend call me tomorrow?" (private event)

## 🏗️ Project Structure

```
Validator/
├── server.js              # Main Express server
├── package.json           # Node.js dependencies
├── env.example            # Environment variables template
├── validator_prompt.md    # OpenAI system prompt
├── public/
│   └── index.html        # Web interface
└── README.md             # This file
```

## 🔧 Configuration

### Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key (required)
- `PORT`: Server port (default: 3000)

### OpenAI Model

The system is configured to use GPT-5. If you need to use a different model, modify the `model` parameter in `server.js`:

```javascript
model: "gpt-4" // or "gpt-3.5-turbo"
```

## 🚨 Troubleshooting

### Common Issues

1. **"Failed to parse OpenAI response as JSON"**
   - This usually means the AI response format changed
   - Check the console for the raw response

2. **"OpenAI API key not found"**
   - Ensure your `.env` file exists and contains the API key
   - Restart the server after adding the key

3. **Port already in use**
   - Change the PORT in your `.env` file
   - Or kill the process using the current port

### Debug Mode

Enable debug logging by setting:

```bash
DEBUG=* npm run dev
```

## 🔒 Security Notes

- Never commit your `.env` file to version control
- The OpenAI API key should be kept secure
- Consider rate limiting for production use

## 📈 Future Enhancements

- [ ] User authentication
- [ ] Question history and analytics
- [ ] Batch validation
- [ ] Custom validation rules
- [ ] API rate limiting
- [ ] Database integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

For issues or questions:
1. Check the troubleshooting section
2. Review the OpenAI API documentation
3. Open an issue in the repository

---

**Happy Validating! 🎯** 