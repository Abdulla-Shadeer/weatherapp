import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  clientId="THR5zMgKbWvqjY9ilfEV0UpOlMvujylu"
  domain="dev-eld7e3jlxjo7mftb.us.auth0.com"
  redirectUri="http://localhost:3000"
  >
  <App />
  </Auth0Provider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
