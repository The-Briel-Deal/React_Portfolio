import React from "react";
import ReactDom from "react-dom";
import './styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import App from "./App";

// const Credentials = () => {
//     return <div>
//         <DrawMain
//             titleText={"This is the credential page"}
//             subtitleText={"This is the credential page"}
//             socialBlock={socialBlock}
//             avatar={avatar}
//         />
//         <SectionTwo />
//         <Footer />
//     </div>
// }
ReactDom.render(
    <App />,
    document.getElementById("root")
)
