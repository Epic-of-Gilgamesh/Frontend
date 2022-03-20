import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import { App } from '../App';
import { LoginPage } from "../views/LoginPage/Login";
import {TestClass} from "../views/Test";

export function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}> </Route>
                <Route path="/login" element={<LoginPage />}> </Route>
                <Route path="/test/:queryParam" element={<TestClass/>}> </Route>
            </Routes>
        </BrowserRouter>
    );
}