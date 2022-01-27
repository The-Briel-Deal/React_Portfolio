import React, { useState } from "react";

const ContactForm = () => {
    const [form, setForm] = useState({
        subject: "",
        name: "",
        message: "",
    })
    const onFormSubmit = () => {
        console.log({ form })
    }

    const formChanged = (event) => {
        console.log(event.target.value)
        setForm((prev) => {
            if (event.target.id === "Subject") {
                prev.subject = event.target.value;
            }
            if (event.target.id === "Name") {
                prev.name = event.target.value;
            }
            if (event.target.id === "Message") {
                prev.message = event.target.value;
            }
            return { subject: prev.subject, message: prev.message, name: prev.name }
        })

    }

    return <div className="container has-text-centered">
        <br />
        <h1>{form.name && <span>Thanks for reaching out {form.name}!</span>}</h1>
        <div className="columns">
            <div className="column is-one-sixth" />
            <div className="column is-one-third">
                <label className="label">Subject:</label>
                <input
                    style={{ width: "80%" }}
                    id="Subject"
                    value={form.subject}
                    onChange={formChanged}
                    placeholder="Subject"
                    className="input" />
            </div>
            <div className="column is-one-third">
                <label className="label">Name:</label>
                <input
                    style={{ width: "80%" }}
                    id="Name"
                    placeholder="Name"
                    className="input"
                    value={form.name}
                    onChange={formChanged} />
            </div>
            <div className="column is-one-sixth" />
        </div>
        <div className="columns">
            <div className="column is-one-sixth" />
            <div className="column is-two-thirds">
                <label className="label">Message:</label>
                <textarea
                    style={{ width: "90%", height: "10rem" }}
                    id="Message"
                    placeholder="Message"
                    className="input"
                    value={form.message}
                    onChange={formChanged} />
            </div>
            <div className="column is-one-sixth" />
        </div>
        <div className="columns">
            <div className="column is-one-sixth" />
            <div className="column is-two-thirds">
                <button
                    onClick={onFormSubmit}
                    className="button is-success">Send</button>
            </div>
            <div className="column is-one-sixth" />
        </div>
    </div>
}
export default ContactForm