import React from "react"
import Form from '../../components/Form'
import "./Contact.css";
import { Button } from 'react-bootstrap';


const Contact = () => (
    <>
    <div className="contact-page">
        <h2> Contact us</h2>
        <p>
            If you have an enquire regarding your order or want to contact us for a partnership, send us a message and we'll get back to you as soon as we can.
        </p>
    <Form />
    <p></p>
    <p></p>
    <div className="latest">
    <p>Checkout the latest products</p>
     <Button className="btn-products" variant="dark" href="/products">Go to Products</Button>
     </div>
    </div>
    </>
)
export default Contact;