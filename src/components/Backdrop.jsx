
import { addPropertyControls, ControlType } from "framer";
import { motion, useMotionValue } from "framer-motion";

// {children, onclick}
const Backdrop = () => {
    const style = {
        display: "inline-block",
        backgroundColor: "orange",
        padding: 8,
        margin: 10,
        borderRadius: "25px",
        border: 0
    }
    return <motion.button whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} style={style}>Hello</motion.button>
}
Backdrop.defaultProps = {
    text: "My Title",
}

addPropertyControls(Backdrop, {
    text: {
        title: "Text",
        type: ControlType.String,
    },
})
export default Backdrop;