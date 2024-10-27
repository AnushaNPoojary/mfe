import React from "react";
import ReactDOM from "react-dom"
import App from "./App";


const mount = (ev)=>{
ReactDOM.render(
    <App />, ev
)
}


if(process.env.NODE_ENV === "development"){
    const devRoot= document.querySelector('#_marketting-dev-root')
    if(devRoot){
        mount(devRoot)
    }
}

export {mount}

