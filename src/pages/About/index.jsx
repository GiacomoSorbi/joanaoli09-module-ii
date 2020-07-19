import React from "react"
import aboutus from '../../assets/aboutus.jpg'
import "./About.css";
import {Button} from 'react-bootstrap';

const About = () => (
    <>
    <div className="about-page">
        <h2>About us</h2>

        <div className="about-us-section">
        <div className="about-image">
        <img src={aboutus} alt="breakfast bowl"/>
        </div>
        <div className="about-text">
        <p> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec ullamcorper sit amet risus nullam eget. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Quis vel eros donec ac odio tempor orci dapibus ultrices. At urna condimentum mattis pellentesque id nibh tortor. Sem fringilla ut morbi tincidunt augue interdum velit. Eu sem integer vitae justo eget magna fermentum iaculis. Et ligula ullamcorper malesuada proin libero nunc consequat. Posuere ac ut consequat semper viverra nam libero justo laoreet. Arcu felis bibendum ut tristique et. Ut morbi tincidunt augue interdum velit euismod. At augue eget arcu dictum. Arcu non sodales neque sodales ut etiam sit. Amet venenatis urna cursus eget nunc scelerisque viverra.
       </p>
        </div>
        </div>
        <div className="contact-section">
        <h1> GET IN TOUCH </h1>
        <p>Send us a message regarding your order or other enquires you might have</p>
        <Button  variant="dark" href="/contact">Contact us!</Button>
        </div>
    </div>
    </>
)
export default About;