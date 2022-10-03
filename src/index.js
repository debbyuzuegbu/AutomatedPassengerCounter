import React from "react"
import ReactDOM from "react-dom"
import './index.css';
import Header from './header';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />                                                                                                                                                                                                                                                                                       
    <App />
  </React.StrictMode>
);
