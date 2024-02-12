import { createContext, PropsWithChildren, useContext } from 'react';

import { SendEventNames } from '../../utils/constants/eventNames';
import socketService from './socketService';

export interface SocketContextProps {
  socket: ReturnType<typeof socketService.startConnection> | null;
}

export const SocketContext = createContext<SocketContextProps>({ socket: null });

export const SocketProvider = ({ children }: PropsWithChildren | any) => {
  const startHandler = () => {
    socketService.invoke(SendEventNames.Launch);
  };

  const socket = socketService.startConnection((message: string) => {
    console.log('Received message:', message);
  }, startHandler);

  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};

export const useSocket = (): SocketContextProps => {
  const context = useContext(SocketContext);

  if (context === undefined) {
    throw new Error('useSocket must be used within a SocketProvider');
  }

  return context;
};

