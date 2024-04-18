import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CardProvider } from '@Context/CardContext' // adjust the path to where your context is

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CardProvider> {/* Wrap your App with CardProvider */}
      <App />
    </CardProvider>
  </React.StrictMode>,
);
