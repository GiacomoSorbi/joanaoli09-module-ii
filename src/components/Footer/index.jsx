import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Footer.css"



const Footer = () => (
    <footer className="footer mt-5">
        <Container fluid={true}>
            <Row className="border-top justify-content-between p-3">
                <Col className="brand p-0 d-flex justify-content-start">
                ©Incredibowls
                </Col>
               
                <Col className="copyright p-0 d-flex justify-content-end" md={3}>
                This site was made by Joana Oliveira.
                </Col>
            </Row>
        </Container>

    </footer>
)

export default Footer;