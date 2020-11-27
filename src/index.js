import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
axios.interceptors.request.use((config) => {
  if (localStorage.token) {
      config.headers.authorization = localStorage.token;
  }
  return config;
}
);
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

