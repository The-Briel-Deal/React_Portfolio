import React from "react";

let Nav = () => {
    const [activeBool, setActiveBool] = React.useState(true)
    const [active, setActive] = React.useState("");
    return (<nav className="navbar is-dark is-transparent is-active" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="/">
                <img src="./LogoNoText.png" alt="" />
            </a>

            <button role="button" className={'navbar-burger ' + active} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={
                () => {


                    if (activeBool) {
                        setActive("is-active")
                    }
                    if (!activeBool) {
                        setActive("")
                    }
                    setActiveBool(!activeBool);
                }
            } >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>
        </div>

        <div id="navbarBasicExample" className={'navbar-menu ' + active}>
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
}

export default Nav
