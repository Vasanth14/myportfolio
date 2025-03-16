import React from 'react'
import { useEffect } from 'react';
import { Container, Col, Row, Image, Button, Form, Modal, Badge } from "react-bootstrap";
import { Link } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader'
import FooterMenu from '../components/FooterMenu';
import CtaButtons from '../components/CtaButtons'
import Aos from "aos";
import 'aos/dist/aos.css'
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import what2 from "../../src/app/assets/images/what2.png";
import ContactForm from '../components/ContactForm';

import mail from "../../src/app/assets/images/mail.png";
import phone from "../../src/app/assets/images/phone.png";
import whatsapp from "../../src/app/assets/images/whatsapp.png";

const HospitalManagementSystem = () => {

    const heading = 'Get In Touch With Us For More Information'
    const subHeading = `${'Let'}'s Talk 👋`

    const options = {
        loop: true,
        autoplay: true,
        nav: false,
        dots: true,
        autoHeight: true,
        center: true,
        margin: 0,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 2,
            },
            800: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        },
    }

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <>
            <HomeHeader />
            <CtaButtons />
            <section className="customservice productpage homebannerbg">
                <Container>
                    <div className="text-center">
                        <Badge className='prodbadge mb-4'>AI-Powered Hospital Management</Badge>
                        <div className="bannercontent">
                            <h2 className="producttitle">Revolutionizing Healthcare Management with <span className='highlighttext'>Automation & AI</span></h2>
                            <p className="content w-75">
                                Streamline patient care, enhance diagnostics, and optimize hospital operations with our all-in-one hospital management solution.
                            </p>
                            <Button className='btn sitebtn'>Talk to our Expert</Button>
                        </div>
                        <div className='text-center dashdiv'>
                            <Image src={`${process.env.PUBLIC_URL}/assets/images/ellipse.svg`} className='ellipse' />
                            <Parallax scale={[0.6, 1]}>
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/hmsdash.png`} className='homedash' />
                            </Parallax>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='aboutcompany' data-aos="fade-up">
                <Container>
                    <Row>
                        <div className="sectiontitle">
                            <h3 className="sectitl text-center">Why HealthOn?</h3>
                        </div>
                        <div className="whatwesect mb-3">
                            <h2 className="sech2 text-center">We transform your ideas into
                                digital realities</h2>
                        </div>
                        <div className='servicegridbg'>
                            <div className="abtcont">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">Patient Registration & Management</h2>
                                    <p className="whatwedop">Streamline patient onboarding, maintain medical records, and ensure seamless data access for healthcare professionals.</p>
                                </div>
                            </div>
                            <div className="abtcont">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">AI-Powered Diagnosis</h2>
                                    <p className="whatwedop">Enhance clinical accuracy with AI-driven insights that assist in patient diagnosis and treatment recommendations.</p>
                                </div>
                            </div>
                            <div className="abtcont">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">Analytics & Reporting</h2>
                                    <p className="whatwedop">Leverage data-driven insights with automated reports to improve hospital performance and decision-making.</p>
                                </div>
                            </div>
                            <div className="abtcont">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">Stock & Inventory Management</h2>
                                    <p className="whatwedop">Track medical supplies, automate stock alerts, and optimize resource utilization with real-time inventory management.</p>
                                </div>
                            </div>
                            <div className="abtcont">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">WhatsApp & SMS Integration</h2>
                                    <p className="whatwedop">Enhance patient engagement with automated appointment reminders, prescription updates, and instant communication.</p>
                                </div>
                            </div>
                            <div className="abtcont">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">Billing & Payments</h2>
                                    <p className="whatwedop">Simplify hospital finances with automated invoicing, insurance claim processing, and secure online payments.</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <Link to='/contact-us' className="btn sitebtn">Contact Us</Link>
                        </div>
                    </Row>
                </Container>
            </section>

            <section className='ourservices' data-aos="fade-up">
                <Container>
                    <Row>
                        <div className="sectiontitle">
                            <h3 className="sectitl text-center">Benefits of HealthOn</h3>
                        </div>
                        <div className="whatwesect mb-3">
                            <h2 className="sech2 text-center">Revolutionizing Healthcare with AI-Powered Efficiency</h2>
                            <p className="text-center content">
                                Our intelligent hospital management system streamlines operations, enhances patient care, and optimizes resource management.
                            </p>
                        </div>
                        <div className='servicegridbg'>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Faster Patient Registration</h2>
                                    <p className="whatwedop">Reduce wait times with quick and seamless patient onboarding, digital records, and real-time updates.</p>
                                </div>
                            </div>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">AI-Assisted Diagnosis</h2>
                                    <p className="whatwedop">Enhance accuracy with AI-powered insights, improving diagnosis speed and treatment effectiveness.</p>
                                </div>
                            </div>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Automated Inventory Management</h2>
                                    <p className="whatwedop">Ensure medical stock availability with real-time tracking, low-stock alerts, and automated restocking.</p>
                                </div>
                            </div>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Smart Appointment Scheduling</h2>
                                    <p className="whatwedop">Optimize doctor-patient scheduling with an AI-driven system that reduces no-shows and manages slots efficiently.</p>
                                </div>
                            </div>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Seamless WhatsApp & SMS Integration</h2>
                                    <p className="whatwedop">Improve patient engagement with automated appointment reminders, prescription updates, and alerts.</p>
                                </div>
                            </div>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Data-Driven Insights & Reports</h2>
                                    <p className="whatwedop">Make informed decisions with AI-powered analytics, financial reports, and hospital performance tracking.</p>
                                </div>
                            </div>
                        </div>
                    </Row>

                </Container>
            </section>

            <section className="whatweoffer hmsprod" id="offers" data-aos="fade-up">
                <div className="whychoosesect my-3">
                    <h2 className="sech2 text-center">Products We Offer</h2>
                    <p className="text-center content">
                        Outstanding Saas Solutions To Empower Your Business!
                    </p>
                </div>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="sech2">How It Works: AI-Driven Automation</h2>
                            <p className="content">
                                Our Hospital Management System (HMS) leverages AI-driven automation to streamline hospital operations effortlessly. From patient registration to diagnosis and billing, our intelligent system eliminates manual work, reduces errors, and ensures seamless coordination between departments.
                            </p>
                            <Button className="btn sitebtn borderbtn">Learn More</Button>
                        </Col>
                        <Col lg={6} className="text-right">
                            <div>
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/hmsdash.png`} className='hmsdashimg' />
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col lg={6} className="text-left">
                            <div>
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/hmsdash2.png`} className='hmsdashimg' />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h2 className="sech2">AI-Powered Insights & Decision Making</h2>
                            <p className="content">
                                Our AI-driven system analyzes patient data, medical records, and operational workflows to provide real-time insights. From predictive diagnosis to resource allocation, AI enhances decision-making and improves hospital efficiency.
                            </p>
                            <Button className="btn sitebtn borderbtn">Explore AI Features</Button>
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="sech2">Advanced Analytics & Reporting</h2>
                            <p className="content">
                                Gain a 360-degree view of hospital performance with data-driven analytics. Our system generates detailed reports on patient trends, revenue, staff efficiency, and inventory management, helping you make informed business decisions.
                            </p>
                            <Button className="btn sitebtn borderbtn">View Analytics</Button>
                        </Col>
                        <Col lg={6} className="text-right">
                            <div>
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/hmsdash3.png`} className='hmsdashimg' />
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>

            <section className="contactsection prodpagecontact" id="contact" data-aos="fade-up">
                <Container>
                    <div className="conttop col-lg-8 mx-auto">
                        <div className="sectiontitle">
                            <h3 className="sectitl text-center"><span className="contactspan">Contact Us</span></h3>
                            <h2 className="sech2 text-center">Speak With Our Friendly Team</h2>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="contactbtmsection" data-aos="fade-up">
                <Container>
                    <Row>
                        <Col>
                            <div className="contbtm">
                                <div className="contcontent">
                                    <Image src={whatsapp} alt="whatsapp" className="contimg" />
                                    <h2 className="conth2">Chat With Us</h2>
                                    <p className="contp">Speak to us in Whatsapp</p>
                                    <a target="_blank" href="https://wa.me/9487734068"><p className="contl">+91 9940722428</p></a>
                                </div>
                                <div className="contcontent">
                                    <Image src={phone} alt="phone" className="contimg" />
                                    <h2 className="conth2">Call Us</h2>
                                    <p className="contp">Mon-Fri 9:30 to 6:00</p>
                                    <a target="_blank" href="https://t.me/Hello1TechSpot"><p className="contl">+91 9940722428</p></a>
                                </div>
                                <div className="contcontent">
                                    <Image src={mail} alt="mail" className="contimg" />
                                    <h2 className="conth2">Mail Us</h2>
                                    <p className="contp">We're here to help</p>
                                    <a href="#"><p className="contl">hello@1techspot.com</p></a>
                                </div>
                            </div>

                            <ContactForm heading={heading} subHeading={subHeading} />
                        </Col>
                    </Row>
                </Container>
            </section>

            <FooterMenu />
        </>
    )
}

export default HospitalManagementSystem