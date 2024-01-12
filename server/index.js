require('dotenv/config');
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const booksRouter = require('./routes/books');
const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(express.json());
// all routes should be registered after the global middlewares cors and express.json()
app.use('/api/books', booksRouter);

// THE FOLLOWING BLOCK NEED TO BE AFTER ALL THE BACKEND ROUTES!!!!!!!!!!
if (process.env.NODE_ENV === 'production') {
  //*Set static folder up in production
  const buildPath = path.join(__dirname, '../client/dist');
  app.use(express.static(buildPath));

  app.get('*', (req, res) => res.sendFile(path.join(buildPath, 'index.html')));
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is up on port ${PORT}`);
  });
});
