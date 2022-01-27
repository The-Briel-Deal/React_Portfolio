import React from "react";
import { motion, AnimatePresence} from "framer-motion";
let Head = (props) => {
    return <section className="section1">
        <div className="container has-text-centered">
            <h1 className="title">
                {props.titleText}
            </h1>
            <p className="subtitle">
                {props.subtitleText}
            </p>
            <div><AnimatePresence>
                <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                exit={{opacity: 0}}
                transition={{duration: 2}}>
                    {props.avatar}
                </motion.div>
            </AnimatePresence>
                <div className="columns has-text-centered">
                    {props.socialBlock}
                </div>
            </div>
        </div>
    </section>
}

export default Head