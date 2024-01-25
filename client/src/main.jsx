import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/Auth.jsx';
import SocketProvider from './context/Socket.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
  // <React.StrictMode>
  <BrowserRouter>
    <SocketProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </SocketProvider>
  </BrowserRouter>,
  // </React.StrictMode>,
=======
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
>>>>>>> parent of f068214 (socket added)
);
