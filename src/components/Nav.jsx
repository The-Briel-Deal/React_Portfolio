import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
let Nav = () => {
    const [activeBool, setActiveBool] = React.useState(true)
    const [active, setActive] = React.useState("");
    const buttonStyle = {
        backgroundColor: "transparent",
    }
    return (<nav className="navbar is-dark is-transparent is-active" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link to="/" style={{ display: "flex", justifyContent: "center" }}>
                <motion.div
                    whileHover={{ scale: 1.4, rotate: 15 }}
                    whileTap={{ scale: 0.9, rotate: 5 }}
                    className="navbar-item"
                    style={buttonStyle}
                    href="/">


                    <img src={require('../assets/LogoNoText.png')} alt="FordLTC Logo" />
                </motion.div>
            </Link>

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
                <Link className="navbar-item" to="/credentials">
                    Credentials
                </Link>
                <Link className="navbar-item" to="/experience">
                    Work Experience
                </Link>
                <Link className="navbar-item" to="/projects">
                    Projects
                </Link>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <Link to="/contact" className="button is-primary">
                            Contact Me!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>)
}

export default Nav
