import React from "react";
import { motion, useMotionValue } from "framer-motion";
let Nav = () => {
    const [activeBool, setActiveBool] = React.useState(true)
    const [active, setActive] = React.useState("");
    const buttonStyle = {
        backgroundColor: "transparent",
    }
    return (<nav className="navbar is-dark is-transparent is-active" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <motion.a
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                className="navbar-item"
                style={buttonStyle}
                href="/">

                <img src={require('../assets/LogoNoText.png')} alt="FordLTC Logo" />
            </motion.a>

            <motion.button
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                role="button"
                style={buttonStyle}
                className={'navbar-burger ' + active}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={() => {
                    if (activeBool) {
                        setActive("is-active")
                    }
                    if (!activeBool) {
                        setActive("")
                    }
                    setActiveBool(!activeBool);
                }}>
                <span aria-hidden="false"></span>
                <span aria-hidden="false"></span>
                <span aria-hidden="false"></span>
            </motion.button>
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
