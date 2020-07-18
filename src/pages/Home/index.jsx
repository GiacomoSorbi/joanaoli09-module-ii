import React from "react"
import "./HomePage.css";
import {Container} from 'react-bootstrap';
import  homeImage1 from '../../assets/homeImage1.jpg'
import  homeImage2 from '../../assets/homeImage2.jpg'
import homeImage3 from '../../assets/homeImage3.jpg'
import history from '../../components/History'
import { Button } from 'react-bootstrap';
import aboutImage from '../../assets/aboutImage.jpg'



const Home = () => (
    <>
    <div class="homepage">
        <h3>We help you create healthy recipes in a easy and quick way, for a variety of breakfasts and snacks</h3>
        {/* <h2>What you can do</h2> */}
        <div className="section-1">
        <div className="images">
            <Container>
            <img src={homeImage1} alt="breakfast bowl"/>
            <img src={homeImage2} alt="breakfast bowl"/>
            <img src={homeImage3} alt="breakfast bowl"/>
            </Container>
        </div>
        <p className="presentation">
       We provide easy and beautifully prepared breakfast and snacks for any occasions: a picnic, weekly breakfasts for the kids, a last minute party, or just because you’re feeling like it. 
       <p>We deliver at your house or location. In addition, we also have planned meals for the whole week. We provide the recipes and the ingredients necessary.</p>
        </p>
       <Button className="btn-products" onClick={() => history.push('/products')}>See our Products</Button>
        </div>
        
                <div className="about-section">
                    
                    <div className="about-image">
                    <img src={aboutImage} alt="about-us"/>
                    </div>
                    <div className="about-us">
                    <h1>Whant to know  more about us? </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <Button className="btn-about" onClick={() => history.push('/about')}>Know More</Button>
                    </div>
                    
              </div>
        
        <div className="subscribe-newsletter">
        <h1> GET IN TOUCH </h1>
        <p>Send us a message regarding your order or other enquires you might have</p>
        <Button variant="btn btn-success" onClick={() => history.push('/contact')}>Contact us!</Button>
        <div>
        
        </div>
        
        </div>
    </div>
    </>
)

export default Home;