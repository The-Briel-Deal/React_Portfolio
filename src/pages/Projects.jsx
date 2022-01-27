import React from "react";

const Projects = ()=>{
return <div><section className="section1">
        <div className="container has-text-centered">
            <h1 className="title">
                Projects.
            </h1>
            <p className="subtitle">
                Here are some of my <strong>favorite</strong> personal projects.
            </p>
            <i className="fas fa-code-branch"></i>
        </div>
        <section className="section2">
            <div className="container has-text-centered">
                <h1 className="title dg">Here's an appetizer.</h1>
                <div className="columns" style="margin-bottom: 0%;">
                    <div className="column">
                        <div id="weather_button" className="button is-primary">Click Here For Tampas Current Weather (:</div>
                        <p id="weather_text"></p>
                    </div>
                </div>
                <h1 className="title dg">Here's an appetizer.</h1>
                <div className="columns" style="margin-bottom: 0%;">
                    <div className="column">
                        <div id="kanye_button" className="button is-primary">Click Here For a Kanye Quote (:</div>
                        <p id="kanye_text"></p>
                    </div>  
                    <div className="column">
                        <div id="weather_button" className="button is-primary">Click Here For Tampas Current Weather (:</div>
                        <p id="weather_text"></p>
                    </div>
                </div>
            </div>
        </section>
    </section>
    </div>
}
