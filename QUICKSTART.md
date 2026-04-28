# 🚀 Quick Start Guide - AI Code Reviewer

## 1️⃣ Start the Backend Server

Open a terminal in the `BackEnd` folder and run:

```bash
node server.js
```

You should see:
```
🚀 Server is running on http://localhost:3000
```

## 2️⃣ Start the Frontend

In a new terminal, run from the project root:

```bash
npx http-server Frontend -p 5000
```

Or if you have Python installed:
```bash
cd Frontend
python -m http.server 5000
```

## 3️⃣ Open in Browser

Visit: **http://localhost:5000**

## 4️⃣ Start Reviewing Code!

1. Paste your code into the text area
2. Optionally select the programming language
3. Click "Review Code"
4. Get AI-powered feedback in seconds!

---

## 📋 What You Can Review

The AI reviewer analyzes:
- ✅ Code quality and readability
- 🐛 Potential bugs and issues
- 🔒 Security vulnerabilities
- ⚡ Performance opportunities
- 🎯 Best practices
- 💡 Code improvement suggestions

---

## 🆘 Troubleshooting

**Backend won't start?**
- Make sure Node.js is installed: `node --version`
- Ensure port 3000 is not in use
- Check .env file has the API key

**Frontend shows errors?**
- Make sure backend is running on port 3000
- Check browser console (F12) for more details
- Try a different port if 5000 is in use

**Reviews not working?**
- Verify Google Gemini API key in `.env`
- Check internet connection
- Try with shorter code first

---

## 🔑 API Key

Your API key is already configured in `.env`. Never share it publicly!

---

Happy reviewing! 🎉
