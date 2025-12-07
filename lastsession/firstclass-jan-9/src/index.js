import React from "react";
import ReactDom from "react-dom/client";
import "./style.css";  

const Hello = () => {
    let a = 10;
    let style = {textAlign:"center" ,border: "2px solid green"};
    return (
        <div className="hello">
            <h1 style={style}> hello world , {a}</h1>
            <p>{2+3+4+4}</p>
            <p>this is paragraph</p>
        </div>

    )
}

// ReactDom.render(<Hello/>,document.getElementById("root"));
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Hello />)