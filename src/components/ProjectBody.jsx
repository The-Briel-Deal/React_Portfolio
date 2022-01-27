import React from "react";


const ProjectBody = () => {
    return <section className="section2">
        <div className="container has-text-centered">
            <div className="columns">
                <div className="column">
                    <div className="container has-text-centered">

                        <h1 className="title" id="tetris_title">Games</h1>
                        <h2 className="subtitle" style={{ color: "#29333d" }}>Pong - Python</h2>
                        <p style={{ color: "#29333d" }}>
                            Rebuilt the classic game Pong in python using only the turtle module. Built with OOP design.
                        </p>
                        <br />
                        <div className="button"><a href="https://github.com/The-Briel-Deal/Snake_Game">Check it out here</a></div>
                        <br />
                        <br />
                        <h2 className="subtitle" style={{ color: "#29333d" }}>Snake - Python</h2>
                        <p style={{ color: "#29333d" }}>
                            Rebuilt the classic game snake in python using only the turtle module. Built with OOP design.
                        </p>
                        <br />
                        <div className="button"><a href="https://github.com/The-Briel-Deal/Snake_Game">Check it out here</a></div>
                        <br />
                        <br />
                        <h2 className="subtitle" style={{ color: "#29333d" }}>Tetris - Vanilla JS</h2>
                        <p style={{ color: "#29333d" }}>
                            Built using Beautiful Soup and the Spotify Public API. Just input a date and this program
                            will
                            scrape the billboard hot 100 from that day in history and create you a spotify playlist of
                            the
                            billboard top 100 at that time!
                        </p>
                        <br />
                        <div className="button"><a href="https://github.com/The-Briel-Deal/Musical_Time_Machine">Check it
                            out
                            here</a></div>


                    </div>
                </div>
                <div className="column">
                    <h1 className="title API_title">API Projects</h1>
                    <h2 className="subtitle" style={{ color: "#29333d" }}>Make My Room Talk</h2>
                    <p style={{ color: "#29333d" }}>For a bit I consistently had problem of getting sucked into my work and
                        missing important calls and messages from friends and family. Because of this I made an
                        immediate way for messages to get to me.<br /><br />
                        I built out a static page that sends post requests via XMLHttpRequest that hits my flask server
                        hosted on my raspberry pi and uses google cloud's text to speech API to generate speech which it
                        verbally says it out loud in my room.
                        <br /><br />
                        Feel free to send me a message through this!
                    </p>
                    <br />
                    <div className="button"><a href="https://637god.win/">Check it out here</a></div>
                    <br />
                    <br />
                    <h2 className="subtitle" style={{ color: "#29333d" }} > Musical Time Machine</h2>
                    <p style={{ color: "#29333d" }}>
                        Built using Beautiful Soup and the Spotify Public API. Just input a date and this program will
                        scrape the billboard hot 100 from that day in history and create you a spotify playlist of the
                        billboard top 100 at that time!
                    </p>
                    <br />
                    <div className="button"><a href="https://github.com/The-Briel-Deal/Musical_Time_Machine">Check it out
                        here</a></div>
                </div>
            </div>
        </div>
    </section >
}

export default ProjectBody