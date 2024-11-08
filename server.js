const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs');

// Middleware to serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// New route to get image filenames
app.get('/api/images', (req, res) => {
    const slidesDir = path.join(__dirname, 'public', 'images', 'slides');
    fs.readdir(slidesDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read slides directory' });
        }
        // Filter to include only image files if necessary
        const images = files.filter(file => file.endsWith('.png'));
        // Sort the images using a natural sort
        images.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
        res.json(images);
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
