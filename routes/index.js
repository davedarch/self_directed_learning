// Basic route setup for dynamic content
const express = require('express');
const router = express.Router();

// Example route that returns some lesson data (you can extend this as needed)
router.get('/lessons', (req, res) => {
    const lessons = [
        { id: 1, title: 'Lesson 1: Getting Started', steps: ['Step 1...', 'Step 2...'] },
        { id: 2, title: 'Lesson 2: Next Steps', steps: ['Step 1...', 'Step 2...'] },
    ];
    res.json(lessons);
});

module.exports = router;
