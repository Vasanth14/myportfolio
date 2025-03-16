import React from 'react'
import { useEffect } from 'react';
import { Container, Col, Row, Image, Button, Form, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader'
import FooterMenu from '../components/FooterMenu';
import CtaButtons from '../components/CtaButtons'
import Aos from "aos";
import 'aos/dist/aos.css'
import Marquee from 'react-marquee-slider';
import ContactForm from "../../src/components/ContactForm";

import what4 from "../../src/app/assets/images/what4.png";
import what2 from "../../src/app/assets/images/what2.png";
import process from '../../src/app/assets/images/process.jpg'
import sol from "../../src/app/assets/images/sol.png";
import sold from "../../src/app/assets/images/sold.png";
import eth from "../../src/app/assets/images/eth.png";

import aws from "../../src/app/assets/images/aws.webp";
import post from "../../src/app/assets/images/post.png";
import nodejs from "../../src/app/assets/images/nodejs.webp";
import mongo from "../../src/app/assets/images/mongo.webp";
import reacjst from "../../src/app/assets/images/reactjs.webp";
import logo from '../../src/app/assets/images/logoblack.png'
import test from '../../src/app/assets/images/test.jpg'
import connect from '../../src/app/assets/images/connect.png'
import mail from "../../src/app/assets/images/mail.png";
import phone from "../../src/app/assets/images/phone.png";
import whatsapp from "../../src/app/assets/images/whatsapp.png";


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const DigitalMarketing = () => {
    const heading = `${'Let'}'s Discuss 👋`
    const subHeading = `Fill in the Form and our Team will be in Touch with you`

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
            <section className="customservice homebannerbg">
                <Container>
                    <Row>
                        <Col className="homecolleft" lg={6}>
                            <div className="bannercontent">
                                <h2 className="maintitl">Digital Marketing Services</h2>
                                <p className="content">
                                    Our mission is to drive online growth through innovative digital marketing strategies that enhance brand visibility and engagement.
                                </p>
                                <Button className='btn sitebtn'>Talk to our Expert</Button>
                            </div>
                        </Col>
                        <Col className="homecolright" lg={6}>
                            <Image src={connect} className="bannerimg" alt="bannerimg" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='aboutcompany' data-aos="fade-up">
                <Container>
                    <Row>
                        <div className="sectiontitle">
                            <h3 className="sectitl text-center">Comprehensive Digital Marketing Solutions</h3>
                        </div>
                        <div className="whatwesect mb-3">
                            <h2 className="sech2 text-center">Transforming Your Brand's Online Presence</h2>
                        </div>
                        <div className='servicegridbg'>
                            <div className="abtcont">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">Search Engine Optimization (SEO)</h2>
                                    <p className="whatwedop">Implementing effective SEO strategies to improve your website's visibility and ranking on search engines.</p>
                                </div>
                            </div>
                            <div className="abtcont">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">Pay-Per-Click Advertising (PPC)</h2>
                                    <p className="whatwedop">Creating targeted PPC campaigns that drive traffic and generate leads for your business.</p>
                                </div>
                            </div>
                            <div className="abtcont">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">Social Media Marketing</h2>
                                    <p className="whatwedop">Leveraging social media platforms to enhance brand awareness and engage with your audience.</p>
                                </div>
                            </div>
                            <div className="abtcont">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">Content Marketing</h2>
                                    <p className="whatwedop">Developing high-quality content that attracts, engages, and converts your target audience.</p>
                                </div>
                            </div>
                            <div className="abtcont">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">Email Marketing</h2>
                                    <p className="whatwedop">Crafting personalized email campaigns that nurture leads and drive conversions.</p>
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
                            <h3 className="sectitl text-center">Digital Marketing Services</h3>
                        </div>
                        <div className="whatwesect mb-3">
                            <h2 className="sech2 text-center">Unlocking the Potential of Digital Marketing</h2>
                            <p className="text-center content">
                                Our passion lies in creating innovative solutions that propel businesses forward.
                            </p>
                        </div>
                        <div className='servicegridbg'>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Search Engine Optimization (SEO)</h2>
                                    <p className="whatwedop">Implementing effective SEO strategies to improve your website's visibility and ranking on search engines.</p>
                                </div>
                            </div>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Pay-Per-Click Advertising (PPC)</h2>
                                    <p className="whatwedop">Creating targeted PPC campaigns that drive traffic and generate leads for your business.</p>
                                </div>
                            </div>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Social Media Marketing</h2>
                                    <p className="whatwedop">Leveraging social media platforms to enhance brand awareness and engage with your audience.</p>
                                </div>
                            </div>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Content Marketing</h2>
                                    <p className="whatwedop">Developing high-quality content that attracts, engages, and converts your target audience.</p>
                                </div>
                            </div>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Email Marketing</h2>
                                    <p className="whatwedop">Crafting personalized email campaigns that nurture leads and drive conversions.</p>
                                </div>
                            </div>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">App Testing</h2>
                                    <p className="whatwedop">Ensuring the quality and performance of digital marketing applications through rigorous testing.</p>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>

            <section className='ourprocess' data-aos="fade-up">

                <div className="sectiontitle">
                    <h3 className="sectitl text-center">Our Digital Marketing Process</h3>
                </div>
                <div className="aboutcont col-lg-8 mx-auto">
                    <h2 className="sech2 text-center">From Strategy to Execution, We Handle It All! 🎯</h2>
                </div>
                <div className='processstepsbg text-center my-4'>
                    <OwlCarousel className='owl-theme' {...options}>
                        <div className='steps item'>
                            <div>
                                <Image src={what2} alt='process' className='processimg' />
                            </div>
                            <div className='my-2'>
                                <h2 className='whatwedoh2 owlwhath2'>Discovery & Requirements Gathering</h2>
                                <p className='owlp'>Understanding client needs and defining project scope for digital marketing services.</p>
                            </div>
                        </div>
                        <div className='steps item'>
                            <div>
                                <Image src={what2} alt='process' className='processimg' />
                            </div>
                            <div className='my-2'>
                                <h2 className='whatwedoh2 owlwhath2'>Strategy Development</h2>
                                <p className='owlp'>Creating tailored digital marketing strategies that align with your business goals.</p>
                            </div>
                        </div>
                        <div className='steps item'>
                            <div>
                                <Image src={what2} alt='process' className='processimg' />
                            </div>
                            <div className='my-2'>
                                <h2 className='whatwedoh2 owlwhath2'>Execution</h2>
                                <p className='owlp'>Implementing marketing campaigns across various channels to maximize reach and engagement.</p>
                            </div>
                        </div>
                        <div className='steps item'>
                            <div>
                                <Image src={what2} alt='process' className='processimg' />
                            </div>
                            <div className='my-2'>
                                <h2 className='whatwedoh2 owlwhath2'>Analytics & Reporting</h2>
                                <p className='owlp'>Monitoring campaign performance and providing detailed reports to measure success and ROI.</p>
                            </div>
                        </div>
                        <div className='steps item'>
                            <div>
                                <Image src={what2} alt='process' className='processimg' />
                            </div>
                            <div className='my-2'>
                                <h2 className='whatwedoh2 owlwhath2'>Ongoing Optimization</h2>
                                <p className='owlp'>Continuously optimizing marketing strategies based on data insights for improved results.</p>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>

            <section className="servicetech ourtechstack" id="techstacks" data-aos="fade-up">
                <Container>
                    <div className="sectiontitle">
                        <h3 className="sectitl text-center">Technologies We Use for Digital Marketing</h3>
                    </div>
                    <div className="whatwesect mb-3">
                        <h2 className="sech2 text-center">We transform your ideas into
                            digital realities</h2>
                    </div>
                    <div className="techstackcircle">
                        <div className="big-circle">
                            <div className="icon-block">
                                <Image src={reacjst} alt="" className="cicleicons" />
                            </div>
                            <div className="icon-block">
                                <Image src={nodejs} alt="" className="cicleicons" />
                            </div>
                            <div className="icon-block">
                                <Image src={mongo} alt="" className="cicleicons" />
                            </div>
                            <div className="icon-block">
                                <Image src={post} alt="" className="cicleicons" />
                            </div>
                        </div>
                        <div className="circle">
                            <div className="icon-block">
                                <Image src={aws} alt="" className="cicleicons" />
                            </div>
                            <div className="icon-block">
                                <Image src={sol} alt="" className="cicleicons" />
                            </div>
                            <div className="icon-block">
                                <Image src={sold} alt="" className="cicleicons" />
                            </div>
                            <div className="icon-block">
                                <Image src={eth} alt="" className="cicleicons" />
                            </div>
                        </div>
                        <div className="center-logo">
                            <Image src={what4} alt="logo" className="centerlogo" />
                        </div>
                    </div>
                </Container>
            </section>

            <section className="contactsection" id="contact" data-aos="fade-up">
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

export default DigitalMarketing