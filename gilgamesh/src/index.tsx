import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from "./views/Login";
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<App />}> </Route>
                <Route path="/login" element={<LoginPage name="id"/>}> </Route>
            </Routes>
        </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
