import React from "react";
import ReactDom from "react-dom";
import Headers from "./components/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer/Footer";

const HelloWorld = () =>{
    return(
        <>
        <Headers/>
        <Main/>
        <Footer/>
         
        </>
        
        
    )
}

ReactDom.render(
    <HelloWorld/>,
    document.getElementById("root")
    );