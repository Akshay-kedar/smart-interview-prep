const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


router.get('/roles', (req, res) => {
    res.json(['Frontend Developer', 'Backend Developer', 'Data Engineer']);
  });

  router.post('/questions', async (req, res) => {
    
    const { role } = req.body;
    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: `Generate 5 interview questions for a ${role}.` }],
        model: "gpt-3.5-turbo",
      });
      res.json({ questions: completion.choices[0].message.content.split('\n').filter(q => q.trim()) });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });



  router.post('/submit-answer', async (req, res) => {
    const { question, answer } = req.body;
    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: `Evaluate this answer: "${answer}" to the question: "${question}". Provide feedback.` }],
        model: "gpt-3.5-turbo",
      });
      res.json({ feedback: completion.choices[0].message.content });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;