import React from 'react';
import { useParams } from 'react-router-dom';

export function TestClass(){
    let params = useParams();
    console.log(params)
    return(
        <div>
        </div>
    )

}