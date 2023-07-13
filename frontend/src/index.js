import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
        <App />
     </BrowserRouter>
  </React.StrictMode>
);






















// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import { BrowserRouter as Router } from 'react-router-dom';
// // import './bootstrap.min.css';
// // import { Provider } from 'react-redux'
// // import store from './store';


// root.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   (document.getElementById("root"))
// );

// serviceWorker.unregister();
