const express = require('express');
const errorHandler = require('./middleware/errorMiddleware');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Task routes
app.use('/api/tasks', taskRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
