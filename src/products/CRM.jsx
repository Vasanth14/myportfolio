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

const CRM = () => {

    const heading = 'Connect with Us for Advanced AI Solutions'
    const subHeading = 'Discover the Future of Staff Management with AI'

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
                        <Badge className='prodbadge mb-4'>AI-Driven Sales</Badge>
                        <div className="bannercontent">
                            <h2 className="producttitle">Revolutionizing Sales Management with <span className='highlighttext'>AI & Automation</span></h2>
                            <p className="content w-75">
                                Boost sales performance, enhance customer relationships, and streamline CRM processes with our cutting-edge AI-powered sales and CRM software.
                            </p>
                            <Button className='btn sitebtn'>Consult with Our Sales Experts</Button>
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
                            <h3 className="sectitl text-center">Why Choose Our AI Solutions?</h3>
                        </div>
                        <div className="whatwesect mb-3">
                            <h2 className="sech2 text-center">Empowering Your Business with AI-Driven Innovations</h2>
                        </div>
                        <div className='servicegridbg'>
                            <div className="abtcont">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">AI-Driven Customer Relationship Management</h2>
                                    <p className="whatwedop">Automate customer interactions, manage leads effectively, and provide seamless access to customer data for sales professionals.</p>
                                </div>
                            </div>
                            <div className="abtcont">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">Intelligent Sales Analytics</h2>
                                    <p className="whatwedop">Leverage AI insights to enhance sales performance evaluations and optimize customer engagement strategies.</p>
                                </div>
                            </div>
                            <div className="abtcont">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">Automated Lead Management & Nurturing</h2>
                                    <p className="whatwedop">Ensure effective lead tracking and nurturing with AI-driven automation and real-time updates.</p>
                                </div>
                            </div>
                            <div className="abtcont">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">Smart Sales Forecasting & Resource Allocation</h2>
                                    <p className="whatwedop">Optimize sales forecasting and resource allocation with AI-powered tools that enhance decision-making.</p>
                                </div>
                            </div>
                            <div className="abtcont">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">Seamless Integration with Communication Tools</h2>
                                    <p className="whatwedop">Enhance team collaboration with integrated communication tools for instant updates and notifications.</p>
                                </div>
                            </div>
                            <div className="abtcont">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">Comprehensive Sales Reporting & Insights</h2>
                                    <p className="whatwedop">Gain actionable insights with AI-driven sales reports to improve decision-making and strategic planning.</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <Link to='/contact-us' className="btn sitebtn">Get in Touch</Link>
                        </div>
                    </Row>
                </Container>
            </section>

            <section className='ourservices' data-aos="fade-up">
                <Container>
                    <Row>
                        <div className="sectiontitle">
                            <h3 className="sectitl text-center">Benefits of AI in Staff Management</h3>
                        </div>
                        <div className="whatwesect mb-3">
                            <h2 className="sech2 text-center">Revolutionizing Sales Management with AI</h2>
                            <p className="text-center content">
                                Our AI-powered sales and CRM software enhances efficiency, improves customer engagement, and optimizes sales processes.
                            </p>
                        </div>
                        <div className='servicegridbg'>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">AI-Driven Sales Automation</h2>
                                    <p className="whatwedop">Streamline sales operations with digital records and real-time updates, reducing administrative burdens.</p>
                                </div>
                            </div>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">AI-Powered Insights & Sales Decision Making</h2>
                                    <p className="whatwedop">Improve accuracy and fairness in sales performance evaluations with AI-driven insights and analytics.</p>
                                </div>
                            </div>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Automated Resource Management</h2>
                                    <p className="whatwedop">Ensure optimal resource utilization with real-time tracking and automated scheduling.</p>
                                </div>
                            </div>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Smart Communication Tools</h2>
                                    <p className="whatwedop">Enhance team collaboration with AI-driven communication tools that streamline workflows.</p>
                                </div>
                            </div>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="icon" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Integrated Reporting & Analytics</h2>
                                    <p className="whatwedop">Make informed decisions with comprehensive reports and AI-powered analytics.</p>
                                </div>
                            </div>
                        </div>
                    </Row>

                </Container>
            </section>

            <section className="whatweoffer hmsprod" id="offers" data-aos="fade-up">
                <div className="whychoosesect my-3">
                    <h2 className="sech2 text-center">Our AI-Driven Solutions</h2>
                    <p className="text-center content">
                        Innovative SaaS Solutions to Elevate Your Business!
                    </p>
                </div>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="sech2">AI-Driven Sales Automation</h2>
                            <p className="content">
                                Our CRM system leverages AI-driven automation to streamline sales operations. From lead generation to customer management, our intelligent system reduces manual tasks, minimizes errors, and ensures seamless coordination across sales teams.
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
                            <h2 className="sech2">AI-Powered Insights & Sales Decision Making</h2>
                            <p className="content">
                                Our AI-driven system analyzes customer data, sales metrics, and operational workflows to provide real-time insights. From predictive analytics to resource allocation, AI enhances sales decision-making and improves organizational efficiency.
                            </p>
                            <Button className="btn sitebtn borderbtn">Explore AI Features</Button>
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="sech2">Advanced Sales Analytics & Reporting</h2>
                            <p className="content">
                                Gain a comprehensive view of sales performance with data-driven analytics. Our system generates detailed reports on sales trends, customer engagement, and resource management, helping you make informed business decisions.
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
                            <h2 className="sech2 text-center">Connect with Our AI Experts</h2>
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

export default CRM