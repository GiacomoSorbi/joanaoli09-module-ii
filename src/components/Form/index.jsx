import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./Form.css";
import Axios from 'axios'

class ContactForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            message:'',
            disabled: false,
            emailSent: null,

        }
    }

    handleChange = (event) => { 

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState ({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disbaled: true,
            emailSent: false
        });

        Axios.post('http://localhost:3000/api/email', this.state)
            .then(res => {
                if(res.data.success){
                    this.setState({
                        disbaled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disbaled: false,
                        emailSent: false
                    });
                }
               
            })
        .catch (err => {
            this.setState ({
                disbaled: false,
                emailSent: false
            })
        })
    }



    render () {
        return(
           <div className="form">
               <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="full-name" className="label">Full Name</Form.Label>
                        <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="email" className="label">Email</Form.Label>
                        <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="message" className="label">Message</Form.Label>
                        <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange}/>
                    </Form.Group>

                    <Button className="d-inline-block" variant="outline-dark" type="submit" disabled={this.state.disabled}>
                        Send
                    </Button>

                    {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                    {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}

               </Form>
           </div>
            )
    }


}

export default ContactForm;