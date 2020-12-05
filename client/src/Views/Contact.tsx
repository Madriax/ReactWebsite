import React, {useState} from "react";
import PageWrapper from "../Components/PageWrapper";

function Contact() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    /**
     * Post message
     */
    function sendMessage() {
        fetch(window.location.protocol + window.location.hostname + ":8080/contact", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                subject,
                message
            })
        })
            .catch(console.error)
    }

    return (
        <PageWrapper>
            <div className="container">
                <h1>Contact me !</h1>
                <form action="" className="contact-form" onSubmit={sendMessage}>
                    <input type="text" placeholder="First name" onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
                    <textarea rows={10} placeholder="Your message here..." onChange={(e) => setMessage(e.target.value)} />
                    <button type="submit">Send</button>
                </form>
            </div>
        </PageWrapper>
    );
}

export default Contact;
