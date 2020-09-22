import React from "react";
import "./style.css";


export default function Car(){
    throw new Error("TEST ERROR")
    return(
        <div className="container">
            <h1 className="header">Car component</h1>
        </div>
    )
}