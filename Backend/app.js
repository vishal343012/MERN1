const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/example', require('./routes/ExampleRoutes'));

module.exports = app;
