import React, { useEffect, useState } from "react";
import { Container, Col, Row, Image, Button, Form, Modal } from "react-bootstrap";
import close from "../../src/app/assets/images/closebtn.svg";

const ContactForm = ({ heading, subHeading }) => {

    const [loading, setLoading] = useState(false)

    const showModal = () => {
        document.getElementById('custommodal').style.display = 'block'
    }
    const closeModal = () => {
        document.getElementById('custommodal').style.display = 'none'
    }

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        subject: "",
        checkboxes: []
    });

    const [responseMessage, setResponseMessage] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            // For checkboxes, update the selected checkboxes array
            if (checked) {
                setFormData({
                    ...formData,
                    checkboxes: [...formData.checkboxes, value]
                });
            } else {
                setFormData({
                    ...formData,
                    checkboxes: formData.checkboxes.filter((item) => item !== value)
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)

        // Prepare data to send
        const formBody = new URLSearchParams({
            firstname: formData.firstname,
            lastname: formData.lastname,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            checkboxes: formData.checkboxes.join(", ") // Convert array to string
        });

        // Send POST request to PHP backend
        fetch("https://mail.1techspot.com/mail.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formBody.toString()
        })
            .then((response) => response.json())
            .then((data) => {
                setResponseMessage(data.message);
                setLoading(false)
                showModal()
                setTimeout(() => {
                    closeModal()
                }, 5000);
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    subject: '',
                    checkboxes: [],
                })
            })
            .catch((error) => {
                console.error("Error:", error);
                setResponseMessage("An error occurred. Please try again.");
            });
    };

    return (
        <>
            <div className="contform mt-5">
                <div className="sectiontitle">
                    <h2 className="sech2 text-center">{heading}</h2>
                    <h3 className="sectitl text-center"><span className="contactformspan contactspan">{subHeading}</span></h3>
                </div>
                <div className="formboxbg mt-3">
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} className="col-lg-6 col-12" controlId="formGridEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control name="firstname" value={formData.firstname} onChange={handleChange} type="text" required />
                            </Form.Group>

                            <Form.Group as={Col} className="col-lg-6 col-12 mt-lg-0 mt-2" controlId="formGridPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control name="lastname" value={formData.lastname} onChange={handleChange} type="text" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" value={formData.email} onChange={handleChange} type="email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                        </Form.Group>

                        <div className="checkflex">
                            <div>
                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" name="checkboxes" value="Option 1" onChange={handleChange} label="Web Development" />
                                </Form.Group>
                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" name="checkboxes" value="Option 2" onChange={handleChange} label="Mobile App Development" />
                                </Form.Group>
                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" name="checkboxes" value="Option 3" onChange={handleChange} label="Graphic Design" />
                                </Form.Group>
                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" name="checkboxes" value="Option 4" onChange={handleChange} label="Design Marketing" />
                                </Form.Group>
                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" name="checkboxes" value="Option 5" onChange={handleChange} label="UI/UX Design" />
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" name="checkboxes" value="Option 6" onChange={handleChange} label="Software Development" />
                                </Form.Group>
                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" name="checkboxes" value="Option 7" onChange={handleChange} label="Blockchain Development" />
                                </Form.Group>
                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" name="checkboxes" value="Option 8" onChange={handleChange} label="Software Testing" />
                                </Form.Group>
                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" name="checkboxes" value="Option 9" onChange={handleChange} label="AI/ML Solutions" />
                                </Form.Group>
                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" name="checkboxes" value="Option 10" onChange={handleChange} label="Other" />
                                </Form.Group>
                            </div>
                        </div>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control type="text" name="subject" value={formData.subject} onChange={handleChange} className="textarea" as="textarea" rows={3} required />
                        </Form.Group>

                        <div className="text-center">
                            <Button variant="primary" className="btn sitebtn" type="submit">
                                {loading ? 'Sending Message...' : 'Send Message'}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
            <div id="custommodal" className="custommodal">
                <span className="custommodalspan"><Button onClick={closeModal}><Image src={close} alt="close button" className="closebtn" /></Button></span>
                <div className="notifdiv">
                    <p className="content mb-0">{responseMessage}</p>
                </div>
            </div>
        </>
    )
}

export default ContactForm