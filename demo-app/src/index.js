//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import App from './routerexample1'; // routerexample1.js 또는 routerexample2.js를 import
//import { BrowserRouter } from 'react-router-dom';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  //<React.StrictMode>
    //<BrowserRouter>
      //<App />
    //</BrowserRouter>
  //</React.StrictMode>
//);

// 기존 코드
// import App from './routerexample1';
import App from './routerexample2';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);