import React from "react"
import Form from '../../components/Form'
import "./Contact.css";
import  lastrecipe1 from '../../assets/lastrecipe1.jpg'
import  lastrecipe2 from '../../assets/lastrecipe2.jpg'
import  lastrecipe3 from '../../assets/lastrecipe3.jpg'
import {Container} from 'react-bootstrap';
import history from '../../components/History'
import { Button } from 'react-bootstrap';


const Contact = () => (
    <>
    <div className="contact-page">
        <h2> Contact us</h2>
        <p>
            If you have an enquire regarding your order or want to contact us for a partnership, send us a message and we'll get back to you as soon as we can.
        </p>

    </div>
    <Form />
    <p className="latest">Checkout the latest products</p>
    <div className="images">
    <Container>
            <img src={lastrecipe1} alt="latest recipes"/>
            <img src={lastrecipe2} alt="latest recipes"/>
            <img src={lastrecipe3} alt="latest recipes"/>  
     </Container>
     </div>
     <Button className="btn-products" onClick={() => history.push('/products')}>Go to Products</Button>
    <div>

    </div>
        
    </>
)

export default Contact;