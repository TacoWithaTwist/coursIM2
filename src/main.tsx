import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import Router from './Router';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Router />
  </StrictMode>
);
