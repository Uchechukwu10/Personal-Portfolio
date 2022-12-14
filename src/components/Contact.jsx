import { React, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';


const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    };

    const form = useRef();

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        emailjs.sendForm('contact_service', 'contact_form', form.current, 'sXP8n_JQlnIYy7WCG')
            .then((result) => {
                console.log(result.text);
                setStatus({ success: true, message: 'Message sent successfully'});
            }, (error) => {
                console.log(error.text);
                setStatus({ success: false, message: 'Something went wrong, please try again later.'});
            });
        setFormDetails(formInitialDetails);
        setButtonText("Send");
    };

  return (
    <div>
        <section className='contact' id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="contact image" />
                    </Col>
                    <Col md={6}>
                        <h2>Get in touch</h2>
                        <form ref={form} onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} name='first_name' placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} name='last_name' placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                                <Col sm={12} className="px-1">
                                    <input type="email" value={formDetails.email} name='user_email' placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                </Col>
                                <Col sm={12}>
                                    <textarea row="12" value={formDetails.message} placeholder="Message" name='message' onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }

                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default Contact