require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db')
const urlRouter = require('./routes/urlRouter')

// Подключаем CORS
app.use(cors({
    origin: 'http://localhost:3000', // Разрешаем фронту доступ
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type'
  }));
  
  // Подключение к MongoDB
  connectDB();
  
  // Middleware
  app.use(express.json()); 
  app.use(express.static('../client'));

  // Роуты
  app.use('/api/url', urlRouter);
  
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  
