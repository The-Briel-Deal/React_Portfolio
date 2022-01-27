import React from "react";

const WorkBody = () => {
    return <section className="section2">
        <div className="container has-text-centered">
            <h1 className="subtitle" id="technologies">Experience</h1>
            <div className="columns">
                <div className="column"><i className="fas fa-cloud"></i>
                    <h2 className="subtitle dg">TechOps Engineer</h2>
                    <p>Engineer on the Hybrid Cloud Operations Team at GreenPages Technology Solutions</p>
                    <br />
                    <ul>
                        <li>Automated multiple slow and inefficient processes, saving countless hours of work with python, bash, and
                            powershell scripting</li>
                        <br />
                        <li>Resolved issues with VMWare hosts, servers, network devices and general system operations for over 20
                            clients including Trip Advisor, New Balance, and Caterpillar Construction.</li>
                        <br />
                        <li>Liaised between clients and the NOC where problems need to be promptly communicated and addressed</li>
                    </ul>
                </div>
                <div className="column"><i className="fas fa-code"></i>
                    <h2 className="subtitle dg">Software Programming Instructor</h2>
                    <p>Software Programming Instructor at The Coder School</p>
                    <br />
                    <ul>
                        <li>Teaching kids programming concepts and guiding them through any projects they want to build.</li>
                        <br />
                        <li>Dynamic projects based on what each kid wants to learn with projects ranging from introducing kids to
                            machine learning to web development to game development.</li>
                        <br />
                        <li>Primarily dealing with Python, Lua, and JavaScript in a variety of use cases.</li>

                    </ul>
                </div>
                <div className="column"><i className="fas fa-server"></i>
                    <h2 className="subtitle dg">Server Technician</h2>
                    <p>Server Technician at Pute.US</p>
                    <br />
                    <ul>
                        <li>Performed server installation and setup at our client’s facilities in a quick and professionally.</li>
                        <br />
                        <li>Troubleshooted and resolved issues on Servers, Workstations, Routers, and Printers for our clients.</li>
                        <br />
                        <li>Imaged and installed all software used by our clients on Workstations, Laptops, and Servers.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section >
}

export default WorkBody