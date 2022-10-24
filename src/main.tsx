import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { dev } from 'utils/environment';

import { App } from './App';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {dev && <ReactQueryDevtools />}
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
