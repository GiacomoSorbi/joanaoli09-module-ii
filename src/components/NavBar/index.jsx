import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import "./NavBar.css";

const NavBar = () => (
    <Navbar expand ="lg">
        <Navbar.Brand href="/">Incredibowls</Navbar.Brand>
        <Navbar.Collapse id ="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/products">Products</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar