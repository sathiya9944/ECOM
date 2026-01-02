import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';   // ✅ You must import App before using 
import 'bootstrap/dist/css/bootstrap.css';
import ShopContextProvider from './Context/ShopContext.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
    <App />
    </ShopContextProvider>
  </React.StrictMode>
);
