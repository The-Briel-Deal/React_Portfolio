import React from 'react';

let HomeBody = (props) => {
    return <section className="section2">
        <div className="container has-text-centered">
            <h1 className="subtitle" id="technologies">Technologies</h1>
            <div className="columns">
                <div className="column"><i className="fab fa-python"></i>
                    <p>I've worked with the following python Libraries I have built things with include:</p>
                    <br />
                    <ul>
                        <li>Django</li>
                        <li>Pandas</li>
                        <li>Matplotlib</li>
                        <li>Beautiful Soup</li>
                        <li>Selenium</li>

                    </ul>
                </div>
                <div className="column"><i className="fab fa-react"></i>
                    <p>I know multiple front end libraries and have experience building projects with:</p>
                    <br />
                    <ul>
                        <li>Bootstrap</li>
                        <li>Bulma</li>
                        <li>JQuery</li>
                        <li>Sass</li>
                        <li>React</li>

                    </ul>
                </div>
                <div className="column"><i className="fas fa-server"></i>
                    <p>My knowledge with API's is extensive I have built Rest API's and have used the following API's and Backend libraries:</p>
                    <br />
                    <ul>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>Express.JS, Flask, and Django</li>
                        <li>Twilio API</li>
                        <li>Kiwi API</li>
                    </ul>
                </div>
                <div className="column"><i className="fab fa-bitcoin"></i>
                    <p>I am a Blockchain Technology Fanatic and I believe it will be a huge part of our future, I have dealt with engineering in the following sectors of blockchain:</p>
                    <br />
                    <ul>
                        <li>ERC-20 Tokens</li>
                        <li>Minting NFT's</li>
                        <li>Solidity Smart Contracts</li>
                        <li>Polygon</li>
                        <li>Avalanche</li>
                    </ul>
                </div>
                <div className="column"><i className="fas fa-clock"></i>
                    <p>I'm currently well on my journey to becoming a Data Structure and Algorithm Expert, I already understand the following deeply:</p>
                    <br />
                    <ul>
                        <li>Time Complexity</li>
                        <li>Big O Notation</li>
                        <li>Creating Data Structures</li>
                        <li>Traversing Data Structures</li>
                        <li>Algorithms To Solve Real Problems</li>
                    </ul>
                </div>
            </div>

        </div>

    </section>
}
export default HomeBody