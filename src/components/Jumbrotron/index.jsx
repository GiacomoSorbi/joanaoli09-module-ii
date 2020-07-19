import React from "react";
import { Jumbotron as Jumbo, Container} from 'react-bootstrap';
import "./Jumbotron.css";

const Jumbotron = () => (
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
            <h1>Are you hungry?</h1>
            <h3>We save you time, money and stress</h3>
            
        </Container>
    </Jumbo>
)

export default Jumbotron;

