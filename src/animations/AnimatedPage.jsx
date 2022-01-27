import { motion } from "framer-motion";

const animations = {
    initial: { opacity: 1, y:0, scale: 1.5},
    animate: { opacity: 1, y:0, scale: 1 },
    exit: { opacity: 1, y: 0, scale: 1.5},
};

const AnimatedPage = ({ children }) => {
    return (
        <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{duration: 1}}
        
        >
            {children}
        </motion.div>
    );
};
export default AnimatedPage;