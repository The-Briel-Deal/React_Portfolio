import React from "react";
import "./index.css";

let nav = (<nav className="navbar is-dark is-transparent is-active" role="navigation" aria-label="main navigation">
<div className="navbar-brand">
    <a className="navbar-item" href="/">
        <img src="./LogoNoText.png" alt=""/>
    </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
    </a>
</div>

<div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
        <a className="navbar-item" href="credentials">
        Credentials
    </a>
        <a className="navbar-item" href="work_experience">
        Work Experience
    </a>
        <a className="navbar-item" href="projects">
        Projects
    </a>
    </div>

    <div className="navbar-end">
        <div className="navbar-item">
            <div className="buttons">
                <a href="/contact" className="button is-primary">
          Contact Me!
        </a>
            </div>
        </div>
    </div>
</div>
</nav>)

export default nav
