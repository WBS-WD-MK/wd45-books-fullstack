import axios from '../axiosInstance';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSocket } from '../context/Socket';

const Books = () => {
  const [books, setBooks] = useState([]);
  const socket = useSocket();
  useEffect(() => {
    axios
      .get(`/api/books`)
      .then(res => setBooks(res.data))
      .catch(e => console.error(e));

    socket.on('bookCreated', newBook => {
      setBooks(books => [newBook, ...books]);
    });
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            <Link to={`/books/${book._id}`}>
              {book.title} by {book.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
