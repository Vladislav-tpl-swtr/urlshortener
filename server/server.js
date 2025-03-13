const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();
const router = require('./routes/urlRouter')

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Подключение роутера
app.use('/', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
