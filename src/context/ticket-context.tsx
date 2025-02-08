import { createContext, useContext, ReactNode, useState } from 'react';
import { Ticket } from '../types/types';

interface TicketContextType {
  ticket: Ticket | null;
  setTicket: (ticket: Ticket | null) => void;
}

const TicketContext = createContext<TicketContextType | undefined>(undefined);

export const TicketProvider = ({ children }: { children: ReactNode }) => {
  const [ticket, setTicket] = useState<Ticket | null>(null);

  return <TicketContext.Provider value={{ ticket, setTicket }}>{children}</TicketContext.Provider>;
};

export const useTicket = (): TicketContextType => {
  const context = useContext(TicketContext);
  if (context === undefined) {
    throw new Error('useTicket must be used within a TicketProvider');
  }
  return context;
};
