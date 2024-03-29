import axios from '../axiosInstance';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
const socket = io(import.meta.env.VITE_SERVER_BASE_URL, { transports: ['websocket'] });
import { useContext } from 'react';
import { AuthContext } from '../context/Auth';

const NewBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState(0);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    // axios
    //   .post(`/api/books`, { title, author, year })
    //   .then(res => navigate('/'))
    //   .catch(e => console.error(e));
    socket.emit('createBook', { title, author, year, createdBy: user._id });
    navigate('/');
  };
  useEffect(() => {
    return () => {
      //disconnect
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={title}
            placeholder="enter book title"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Author</label>
          <input
            type="text"
            value={author}
            placeholder="enter book author"
            onChange={e => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Year</label>
          <input
            type="number"
            value={year}
            placeholder="enter book year"
            onChange={e => setYear(e.target.value)}
          />
        </div>
        <button>Add Book</button>
      </form>
    </div>
  );
};

export default NewBook;
