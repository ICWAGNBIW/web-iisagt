import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import UserStore from './storage/User';

export const Context  = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider value={{
        user: new UserStore()
      }}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
