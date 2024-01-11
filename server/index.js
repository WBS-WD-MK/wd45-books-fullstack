require('dotenv/config');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const booksRouter = require('./routes/books');
const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());
// all routes should be registered after the global middlewares cors and express.json()
app.use('/api/books', booksRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is up on port ${PORT}`);
  });
});
