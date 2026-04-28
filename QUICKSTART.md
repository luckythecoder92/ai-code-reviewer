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

Create `Frontend/.env` from `Frontend/.env.example` with:

```bash
VITE_API_BASE_URL=http://localhost:3000
```

Then in a new terminal run:

```bash
cd Frontend
npm install
npm run dev
```

## 3️⃣ Open in Browser

Visit the local URL printed by Vite, usually **http://localhost:5173**

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
- Check `.env` has both `GROQ_API_KEY` and the correct `FRONTEND_URL`

**Frontend shows errors?**
- Make sure backend is running on port 3000
- Make sure `Frontend/.env` points `VITE_API_BASE_URL` at the correct backend
- Check browser console (F12) for more details
- Try a different port if Vite's default port is in use

**Reviews not working?**
- Verify your Groq API key in `.env`
- Check internet connection
- Try with shorter code first

---

## 🔑 API Key

Set your Groq API key in `.env`. Never share it publicly.

---

Happy reviewing! 🎉
