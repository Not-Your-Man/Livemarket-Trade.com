import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'; // Use createRoot for React 18
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { persistor } from './Redux/store';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './index.css'; // Import your CSS file
import App from './App';

// Initialize AOS (if needed)
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);