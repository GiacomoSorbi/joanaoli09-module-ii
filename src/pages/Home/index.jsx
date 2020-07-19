import React from "react"
import "./HomePage.css";
import  homeImage1 from '../../assets/homeImage1.jpg'
import  homeImage2 from '../../assets/homeImage2.jpg'
import homeImage3 from '../../assets/homeImage3.jpg'
import {NavLink} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import aboutImage from '../../assets/aboutImage.jpg'



const Home = () => (
    <>
    <div class="homepage">
        <h3>We help you create healthy recipes in a easy and quick way, for a variety of breakfasts and snacks</h3>
        
        <div className="images">
       
            <img src={homeImage1} alt="breakfast bowl"/>
            <img src={homeImage2} alt="breakfast bowl"/>
            <img src={homeImage3} alt="breakfast bowl"/>
        
        </div>
        <div className="presentation">
       We provide easy and beautifully prepared breakfast and snacks for any occasions: a picnic, weekly breakfasts for the kids, a last minute party, or just because you’re feeling like it. 
       <p>We deliver at your house or location. In addition, we also have planned meals for the whole week. We provide the recipes and the ingredients necessary.</p>
       
       <Button variant="outline-dark" onClick={() => (<NavLink to="/products"></NavLink>)}>See our Products</Button>
       </div>
        
                <div className="about-section">
                    
                    <div className="about-image">
                    <img src={aboutImage} alt="about-us"/>
                    </div>
                    <div className="about-us">
                    <h1>Whant to know  more about us? </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <Button variant="outline-dark" className="btn-about" onClick={() => (<NavLink to="/about"></NavLink>)}>Know More</Button>
                    </div>
                    
              </div>
        
        <div className="contact-section">
        <h1> GET IN TOUCH </h1>
        <p>Send us a message regarding your order or other enquires you might have</p>
        <Button  variant="dark" onClick={() => (<NavLink to="/contact"></NavLink>)}>Contact us!</Button>
        </div>
    </div>
    </>
)

export default Home;