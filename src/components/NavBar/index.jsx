import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import "./NavBar.css";
import {NavLink} from 'react-router-dom'

const NavBar = () => (
    <Navbar expand ="lg">
        <Navbar.Brand href="/">Incredibowls</Navbar.Brand>
        <Navbar.Collapse id ="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item><NavLink className="nav-links" to="/">Home</NavLink></Nav.Item>
                <Nav.Item><NavLink className="nav-links" to="/about">About</NavLink></Nav.Item>
                <Nav.Item><NavLink className="nav-links" to="/contact">Contact</NavLink></Nav.Item>
                <Nav.Item><NavLink className="nav-links" to="/products">Products</NavLink></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar