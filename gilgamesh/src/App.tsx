import React, {useEffect} from 'react';
import 'antd/dist/antd.css'
import { useNavigate } from "react-router-dom";

import './App.css';
import store from "./store";


export function App(){
    let navigate = useNavigate();
    let userInfo = store.getState().userInfo;

    useEffect(() => {
        if (userInfo.id === ''){
            return navigate("/login");
        }
    });
    return (
        <div className="App">

        </div>
    );
}
