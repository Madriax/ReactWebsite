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
            <h1>El pagos del contactos</h1>

            <input type="text" placeholder="First name" onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
            <textarea onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Send</button>

        </PageWrapper>
    );
}

export default Contact;
