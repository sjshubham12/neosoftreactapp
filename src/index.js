import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/js/bootstrap.bundle.min"
import "jquery/dist/jquery.slim.min"
import "bootstrap/dist/css/bootstrap.min.css"
import "./ReduxStore/store"
import { Provider } from 'react-redux';
import Reliance from "./ReduxStore/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Reliance}>
      <App ></App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();