import React from "react";
import ReactDom from "react-dom";
import Nav from "./nav";
import { DrawMain, SectionTwo, Footer, } from "./components";
import FA from 'react-fontawesome'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
// CONTENT
const titleText = <span>My name is Gabriel.</span>
const subtitleText = <span>I'm a <strong>software engineer</strong> that loves building things to make life better.</span>
const ghLink = <a href="https://github.com/The-Briel-Deal" className="social_icon"><FA name="fab fa-github-square" /></a>
const liLink = <a href="https://www.linkedin.com/in/gabrielford/" className="social_icon"><FA name="fab fa-linkedin-square" /></a>
const socialBlock = <div className="column">{ghLink}{liLink}</div>
const avatar = <img id="avatar_of_me" src={require('./avatar.png')} alt="Avatar of me" />

const Home = () => {
    return <div>
        <DrawMain
            titleText={titleText}
            subtitleText={subtitleText}
            socialBlock={socialBlock}
            avatar={avatar}
        />
        <SectionTwo />
        <Footer />
    </div>
}
ReactDom.render(
    <div>
        <Nav />
        <BrowserRouter>
            <div>
                <Routes>
                    {/* <Route exact path="/" component={Home} /> */}
                    <Route path="/" element={<Home />} />
                    <Route path="/credentials" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    </div>,
    document.getElementById("root")
)
