import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import { ConfigProvider } from '@/context/config-context';
import { TicketProvider } from '@/context/ticket-context';

import AppLayout from '@/components/app-layout';
import NoMatch from '@/pages/no-match';
import SignUp from '@/pages/sign-up';
import Ticket from '@/pages/ticket';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <TicketProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<SignUp />} />
              <Route path="ticket" element={<Ticket />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TicketProvider>
    </ConfigProvider>
  </React.StrictMode>,
);
