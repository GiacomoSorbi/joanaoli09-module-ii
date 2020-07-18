import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './EmailInput.css'



class EmailInput extends React.Component {

    constructor (props) {
        super(props);
        this.state = {      
            email:'',
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
        })
    }



    render () {
        return(
           
               <Form onSubmit={this.handleSubmit}>
                   
                    <Form.Group>
                        <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                    </Form.Group>
                    <Button className="subscribe-btn" variant="primary" type="submit" disabled={this.state.disabled}>
                        Subscribe
                    </Button>

                    {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                    {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
               </Form>
      
            )
    }


}

export default EmailInput;