require('dotenv/config');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const booksRouter = require('./routes/books');
const authRouter = require('./routes/users');
const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(cookieParser());
app.use(express.json());
// all routes should be registered after the global middlewares cors and express.json()
app.use('/api/books', booksRouter);
app.use('/auth', authRouter);
<<<<<<< HEAD
app.use('/admin', adminRouter);
io.on('connection', socket => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('createBook', async payload => {
    try {
      const newBook = await Book.create({ ...payload });
      console.log('PAYLOADDD', payload);
      io.emit('bookCreated', newBook);
    } catch (error) {
      console.log('ERRORRRRR', error);
      io.emit('bookCreationError', error);
    }
  });
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
});
=======
>>>>>>> parent of f068214 (socket added)
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
