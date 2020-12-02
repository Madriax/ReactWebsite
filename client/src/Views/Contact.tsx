import React, {useState} from "react";
import Navbar from "../Components/Navbar";
import PageWrapper from "../Components/PageWrapper";

function Contact() {

    const [firstName, setFirstName] = useState("");

    return (
        <PageWrapper>
            <h1>El pagos del contactos</h1>

            <input type="text" onChange={(e) => setFirstName(e.target.value)} />
            <p>{firstName}</p>
        </PageWrapper>
    );
}

export default Contact;
