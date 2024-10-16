import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './context/themeContext.tsx';
import { ModalProvider } from './context/ModalContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ThemeProvider>
  </StrictMode>,
);
