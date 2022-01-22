import React from "react";
import ReactDom from "react-dom";
import nav from "./nav";
import { DrawMain } from "./components";
import FA from 'react-fontawesome'

ReactDom.render(
    <div>
        {nav}
        <DrawMain 
        titleText={<span>My name is Gabriel.</span>}
        subtitleText= {<span>I'm a <strong>software engineer</strong> that loves building things to make life better.</span>} 
        logoAndMore= {
        <div><img id="avatar_of_me" src={require('./avatar.png')} alt="Avatar of me" />
            <div className="columns has-text-centered">
                <div className="column">
                    <a href="https://github.com/The-Briel-Deal" className="social_icon"><FA name="fab fa-github-square" /></a>
                    <a href="https://www.linkedin.com/in/gabrielford/" className="social_icon"><FA name="fab fa-linkedin-square" /></a>
                </div>
            </div>
        </div>
        }
        />

    </div>,
    document.getElementById("root")
)