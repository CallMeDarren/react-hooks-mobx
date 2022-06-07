import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import appStore from './store/appStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App appStore={appStore}/>
  </React.StrictMode>
);

