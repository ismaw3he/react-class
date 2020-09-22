import React from "react";
import "./style.css";


export default function Car(){
    const checkCar = () =>{
        throw new Error("testing new error")
    }

    return(
        <div className="container">
            <h1 className="header">Car component</h1>
            <button onClick={()=>{checkCar()}}>Test the car</button>
        </div>
    )
}