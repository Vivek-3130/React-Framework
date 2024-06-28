import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Here we have just imported the App function from App folder
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Here we have just rendered to that particular app function
    <App /> //this a jsx method of rendering a function
    //  we can just return as:- As it is just a function
    // App()
);
