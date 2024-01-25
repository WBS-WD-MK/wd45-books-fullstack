import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(import.meta.env.VITE_SERVER_BASE_URL || '', { transports: ['websocket'] });
    setSocket(newSocket);

    // return () => {
    //   newSocket.disconnect();
    // };
  }, []);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};
export default SocketProvider;
export const useSocket = () => {
  return useContext(SocketContext);
};
