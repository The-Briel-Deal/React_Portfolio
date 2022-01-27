import React from "react";

const ContactForm = () => {
    return <div className="container has-text-centered">
        <br />
        <div className="columns">
            <div className="column is-one-sixth" />
            <div className="column is-one-third">
                <input style={{ width: "80%" }} id="Message" placeholder="Subject" className="input" />
            </div>
            <div className="column is-one-third">
                <input style={{ width: "80%" }} id="Message" placeholder="Name" className="input" />
            </div>
            <div className="column is-one-sixth" />
        </div>
        <div className="columns">
            <div className="column is-one-sixth" />
            <div className="column is-two-thirds">
                <textarea style={{ width: "90%", height: "10rem" }} id="Message" placeholder="Message" className="input" />
            </div>
            <div className="column is-one-sixth" />
        </div>
        <div className="columns">
            <div className="column is-one-sixth" />
            <div className="column is-two-thirds">
                <button class="button is-success">Send</button>
            </div>
            <div className="column is-one-sixth" />
        </div>
    </div>
}
export default ContactForm