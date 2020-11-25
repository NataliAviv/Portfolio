import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Contact.css";
import Axios from 'axios';
class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            email:'',
            message:'',
            disabled:false,
            emailSent:null,
        }
    }

    handleChange=(event)=>{
        console.log(event);
        const target=event.target;
        const value=target.type ==='checkbox' ? target.checked: target.value;
        const name=target.name;
        this.setState({
            [name]:value
        })

    }

    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({
            disabled: true,
        });
        Axios.post('http://localhost:3030/app/email', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
    }


    render(){
    return (
        <div className="contact-container" id="contact-container">
            <div className="contact-title title">Get in touch with me!</div>
            <Form  className="form" onSubmit={this.handleSubmit}>
            <Form.Group className="form-group">
            <Form.Label className="name-title">Name:<br/></Form.Label>
                <input htmlFor="full-name"className="form-control box" placeholder="Name"id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group> 
                <Form.Label>Email:<br/></Form.Label>
                <input htmlFor="email" className="form-control box" placeholder="Email" id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="message">Message<br/></Form.Label>
                <Form.Control id="message" name="message" as="textarea"rows="3" className="box-msg"value={this.state.message} onChange={this.handleChange}/>
            </Form.Group>
            <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                Send
            </Button>
            <p><br/>Or, just email me directly at:<br/>
            natali.aviv162@gmail.com</p>

            {this.state.emailSent===true&&<p className="d-inline success-msg">Email Sent! :)</p>}
            {this.state.emailSent===false&&<p className="d-inline err-msg">Email Not Sent Please Try Again...</p>}

            </Form>
        </div>
    );
    }
}

export default Contact;