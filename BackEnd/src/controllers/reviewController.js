const { Groq } = require("groq-sdk");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const reviewCode = async (req, res) => {
  try {
    const { code, language } = req.body;

    // Validate input
    if (!code || code.trim() === '') {
      return res.status(400).json({ error: 'Code is required' });
    }

    // Initialize the model
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are an expert code reviewer with 10+ years of experience.
When given code, you must analyze and return feedback in this exact structure:

1. **Summary** - Brief overview of what the code does
2. **Issues Found** - List all bugs, errors, or problems
3. **Security Concerns** - Any security vulnerabilities
4. **Performance Tips** - Optimization suggestions
5. **Best Practices** - Coding standards and improvements
6. **Improved Code** - Rewrite the code with all fixes applied

Be specific, clear, and helpful. Language: ${language || "auto-detect"}.`,
        },
        {
          role: "user",
          content: `Please review the following code:\n\n\`\`\`${language || ""}\n${code}\n\`\`\``
        }
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.3,
      max_tokens: 2048,
    });

    const review = chatCompletion.choices[0].message.content;

    // Send the review back
    res.json({
      success: true,
      language: language || "auto-detected",
      review,
    });
  } catch (error) {
    console.error('Error reviewing code:', error);
    res.status(500).json({
      error: 'Failed to review code',
      details: error.message
    });
  }
};

module.exports = {
  reviewCode
};
