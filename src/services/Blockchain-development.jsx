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

const BlockchainDevelopment = () => {
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
                                <h2 className="maintitl">Blockchain Development Solutions</h2>
                                <p className="content">
                                    Our mission is to provide cutting-edge blockchain solutions that enhance security, transparency, and efficiency in digital transactions.
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
                            <h3 className="sectitl text-center">Comprehensive Blockchain Services</h3>
                        </div>
                        <div className="whatwesect mb-3">
                            <h2 className="sech2 text-center">Transforming Your Ideas into Blockchain Realities</h2>
                        </div>
                        <div className='servicegridbg'>
                            <div className="abtcont">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">Custom Blockchain Development</h2>
                                    <p className="whatwedop">Building tailored blockchain solutions that meet your business needs and enhance operational efficiency.</p>
                                </div>
                            </div>
                            <div className="abtcont">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">NFT Marketplace Development</h2>
                                    <p className="whatwedop">Creating robust NFT marketplaces for buying, selling, and trading digital assets securely.</p>
                                </div>
                            </div>
                            <div className="abtcont">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">Crypto Trading Exchange Development</h2>
                                    <p className="whatwedop">Developing secure and scalable crypto trading platforms for seamless transactions.</p>
                                </div>
                            </div>
                            <div className="abtcont">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">Smart Contract Development</h2>
                                    <p className="whatwedop">Implementing automated smart contracts to facilitate trustless transactions on the blockchain.</p>
                                </div>
                            </div>
                            <div className="abtcont">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="aboutcomp">
                                    <h2 className="whatwedoh2">Blockchain Consulting Services</h2>
                                    <p className="whatwedop">Providing expert guidance on blockchain technology adoption and implementation strategies.</p>
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
                            <h3 className="sectitl text-center">Blockchain Development Services</h3>
                        </div>
                        <div className="whatwesect mb-3">
                            <h2 className="sech2 text-center">Unlocking the Potential of Blockchain Technology</h2>
                            <p className="text-center content">
                                Our passion lies in creating innovative solutions that propel businesses forward.
                            </p>
                        </div>
                        <div className='servicegridbg'>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Blockchain Development</h2>
                                    <p className="whatwedop">Crafting high-quality blockchain applications that provide seamless user experiences.</p>
                                </div>
                            </div>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Smart Contract Development</h2>
                                    <p className="whatwedop">Building robust blockchain applications tailored to your business needs.</p>
                                </div>
                            </div>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Cross-Platform Development</h2>
                                    <p className="whatwedop">Creating applications that work on both blockchain platforms efficiently.</p>
                                </div>
                            </div>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Mobile UI/UX Design</h2>
                                    <p className="whatwedop">Designing intuitive and engaging user interfaces for blockchain applications.</p>
                                </div>
                            </div>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Blockchain App Testing</h2>
                                    <p className="whatwedop">Ensuring the quality and performance of blockchain applications through rigorous testing.</p>
                                </div>
                            </div>
                            <div className="whatwedocont whatwedocontcust">
                                <Image src={what2} alt="arrow" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">App Maintenance & Support</h2>
                                    <p className="whatwedop">Providing ongoing support and updates to keep your blockchain app running smoothly.</p>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>

            <section className='ourprocess' data-aos="fade-up">

                <div className="sectiontitle">
                    <h3 className="sectitl text-center">Our Blockchain Development Process</h3>
                </div>
                <div className="aboutcont col-lg-8 mx-auto">
                    <h2 className="sech2 text-center">From Concept to Launch, We Handle It All! 🎯</h2>
                </div>
                <div className='processstepsbg text-center my-4'>
                    <OwlCarousel className='owl-theme' {...options}>
                        <div className='steps item'>
                            <div>
                                <Image src={what2} alt='process' className='processimg' />
                            </div>
                            <div className='my-2'>
                                <h2 className='whatwedoh2 owlwhath2'>Discovery & Requirements Gathering</h2>
                                <p className='owlp'>Understanding client needs and defining project scope for blockchain applications.</p>
                            </div>
                        </div>
                        <div className='steps item'>
                            <div>
                                <Image src={what2} alt='process' className='processimg' />
                            </div>
                            <div className='my-2'>
                                <h2 className='whatwedoh2 owlwhath2'>Design & Prototyping</h2>
                                <p className='owlp'>Creating user-centric designs and prototypes for blockchain solutions.</p>
                            </div>
                        </div>
                        <div className='steps item'>
                            <div>
                                <Image src={what2} alt='process' className='processimg' />
                            </div>
                            <div className='my-2'>
                                <h2 className='whatwedoh2 owlwhath2'>Development</h2>
                                <p className='owlp'>Building blockchain applications using the latest technologies and frameworks.</p>
                            </div>
                        </div>
                        <div className='steps item'>
                            <div>
                                <Image src={what2} alt='process' className='processimg' />
                            </div>
                            <div className='my-2'>
                                <h2 className='whatwedoh2 owlwhath2'>Testing & Quality Assurance</h2>
                                <p className='owlp'>Conducting thorough testing to ensure blockchain application functionality and performance.</p>
                            </div>
                        </div>
                        <div className='steps item'>
                            <div>
                                <Image src={what2} alt='process' className='processimg' />
                            </div>
                            <div className='my-2'>
                                <h2 className='whatwedoh2 owlwhath2'>Deployment & Support</h2>
                                <p className='owlp'>Launching your blockchain application and providing ongoing support.</p>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>

            <section className="servicetech ourtechstack" id="techstacks" data-aos="fade-up">
                <Container>
                    <div className="sectiontitle">
                        <h3 className="sectitl text-center">Technologies We Use for Blockchain Development</h3>
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

export default BlockchainDevelopment