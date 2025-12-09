// import React from "react";
// import ReactDom from "react-dom/client";
// import App from "./App.js"

 

// ReactDom.render()

// ReactDom.render(<Hello/>,document.getElementById("root"));
// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<Hello/>)


// const same = ReactDOM.createRoot(document.getElementById("same"));
//  same.render(<App/>)


 import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("same"));
root.render(<App />);
