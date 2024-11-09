'use client'

import { useAtom } from 'jotai';
import { createContext, ReactNode, useContext, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { dummyPlayer } from './dummies';
import { playerAtom } from './state/atoms';
import { Player } from './types';

type SocketContextType = {
  socket: Socket | null,
  // setSocket: React.Dispatch<React.SetStateAction<Socket | null>>,
  connectSocket: (token: string) => void
}

const SocketContext = createContext<SocketContextType | null>(null);

export const useSocket = () => {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }

  return context;
};

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [, setPlayer] = useAtom<Player | null>(playerAtom)

  const connectSocket = (token: string) => {
    const ws = io('http://localhost:3334', { query: { token } });

    setSocket(ws);

    ws.on('connect', () => {
      console.log('Connected to WebSocket with id:', ws.id);
      // Test func
      setPlayer(dummyPlayer)

      ws.on('receiveUpdate', (data: Player) => {
        setPlayer(data)
      })
    });

  };

  return (
    <SocketContext.Provider value={{ socket, connectSocket }}>
      {children}
    </SocketContext.Provider>
  );
};
