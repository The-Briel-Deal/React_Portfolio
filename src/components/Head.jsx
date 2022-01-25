import React from "react";

let Head = (props) => {
    return <section className="section1">
        <div className="container has-text-centered">
            <h1 className="title">
                {props.titleText}
            </h1>
            <p className="subtitle">
                {props.subtitleText}
            </p>
            <div>{props.avatar}
                <div className="columns has-text-centered">
                    {props.socialBlock}
                </div>
            </div>
        </div>
    </section>
}

export default Head