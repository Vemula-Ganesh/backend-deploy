const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = require('./config/db');
connectDB();

// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'API is running' });
});

// app.get('/', (req, res) => {
//     res.send('API is running...');
// });


// Serve frontend
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
