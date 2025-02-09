'use client'

import { useAtom } from 'jotai';
import { createContext, ReactNode, useContext, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { playerAtom } from '../state/atoms';
import { Player } from '../types';

type SocketContextType = {
  socket: Socket | null,
  updatePlayer: (playerData: Player) => void,
  connectSocket: (token: string) => void,
  disconnectSocket: () => void
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
    disconnectSocket()

    const ws = io('ws://localhost:3334', { query: { token } });

    setSocket(ws);

    ws.on('connect', () => {
      console.log('Connected to WebSocket with id:', ws.id);

      ws.emit('init')

      ws.on('disconnect', () => {
        setPlayer(null)
      })

      ws.on('success', (data: Player) => {
        console.log('Saving player:', data)
        setPlayer(data as Player)
      })

      ws.on('error', (data) => {
        alert(data.error)
      })
    });
  };

  const updatePlayer = async (data: Player): Promise<void> => {
    if (!socket) return

    console.log('Update requested:', data)
    socket.emit('update', data)
  }

  const disconnectSocket = () => {
    socket?.disconnect()
    setSocket(null)
  }

  return (
    <SocketContext.Provider value={{ socket, updatePlayer, disconnectSocket, connectSocket }}>
      {children}
    </SocketContext.Provider>
  );
};
