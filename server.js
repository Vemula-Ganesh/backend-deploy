const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
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

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
