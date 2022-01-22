import React from "react";
import "./index.css";
let DrawMain = (props)=>{
    return <section className="section1">
    <div className="container has-text-centered">
        <h1 className="title">
            {props.titleText}
        </h1>
        <p className="subtitle">
            {props.subtitleText}
        </p>
        {props.logoAndMore}
    </div>
</section>
}
export {DrawMain}