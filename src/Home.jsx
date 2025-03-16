import React, { useEffect, useState } from "react";
import HomeHeader from "./components/HomeHeader";
import { Container, Col, Row, Image, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'

import bannerimg from "../src/app/assets/images/bannerimg.png";
import close from "../src/app/assets/images/closebtn.svg";
import prize from '../src/app/assets/images/prize.png'
import what1 from "../src/app/assets/images/what1.png";
import what2 from "../src/app/assets/images/what2.png";
import what3 from "../src/app/assets/images/what3.png";
import what4 from "../src/app/assets/images/what4.png";
import what5 from "../src/app/assets/images/what5.png";
import what6 from "../src/app/assets/images/what6.png";
import what7 from "../src/app/assets/images/what7.png";
import what8 from "../src/app/assets/images/what8.png";
import what9 from "../src/app/assets/images/what9.png";
import mail from "../src/app/assets/images/mail.png";
import phone from "../src/app/assets/images/phone.png";
import whatsapp from "../src/app/assets/images/whatsapp.png";

import sol from "../src/app/assets/images/sol.png";
import sold from "../src/app/assets/images/sold.png";
import eth from "../src/app/assets/images/eth.png";

import aws from "../src/app/assets/images/aws.webp";
import post from "../src/app/assets/images/post.png";
import nodejs from "../src/app/assets/images/nodejs.webp";
import mongo from "../src/app/assets/images/mongo.webp";
import reacjst from "../src/app/assets/images/reactjs.webp";
import logo from '../src/app/assets/images/logoblack.png'

import FooterMenu from "./components/FooterMenu";
import Aos from "aos";
import ContactForm from "../src/components/ContactForm";
import CtaButtons from "./components/CtaButtons";

const Home = () => {

    const heading = `${'Let'}'s Discuss 👋`
    const subHeading = `Fill in the Form and our Team will be in Touch with you`

    useEffect(() => {
        document.body.classList.add('homepage')
        Aos.init({ duration: 1000 })

        return () => {
            document.body.classList.remove('homepage')
        }
    }, [])

    return (
        <>
            <HomeHeader />
            <CtaButtons />
            <section className="homebannerbg">
                <Container>
                    <Row>
                        <Col className="homecolleft" lg={6}>
                            <div className="bannercontent">
                                <h4 className="sub-title">Hello There! I'm</h4>
                                <h2 className="maintitl">Vasanth Chandrasekar</h2>
                                <p className="content">
                                    Transforming Ideas into Powerful Web Apps 🚀
                                </p>
                                <Link target="_blank" to="https://www.linkedin.com/in/vasanth-chandrasekar/" className="btn sitebtn mt-3">Let's Connect</Link>
                            </div>
                        </Col>
                        <Col className="homecolright" lg={6}>
                            <div className="greetdiv">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/greet.png`} className="greetimg" />
                            </div>
                            <div className="devdiv">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/dev.png`} className="greetimg" />
                            </div>
                            <div className="skillsicons rcskill">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/react.svg`} className="" />
                            </div>
                            <div className="skillsicons jsskill">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/javascript.svg`} className="" />
                            </div>
                            <div className="skillsicons nodeskill">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/node.svg`} className="" />
                            </div>
                            <div className="skillsicons nextskill">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/nextjs.svg`} className="" />
                            </div>
                            <Image src={`${process.env.PUBLIC_URL}/assets/images/vasa.svg`} className="bannerimg" alt="bannerimg" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="whychoose" id="whychoose" data-aos="fade-up">
                <Container>
                    <div className="whychoosesect my-3">
                        <h2 className="sech2 text-center">I've been building a lot of things</h2>
                        <p className="text-center content">
                            From concept to deployment—explore my development journey
                        </p>
                    </div>

                    <div className="projectflex">
                        <div className="projectflexcont text-center">
                            <span className="projimgbg">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/zummy.png`} alt="projects" className="projectimg" />
                            </span>
                            <h6 className="h6 mt-3">Restaurent Management System</h6>
                            <Link className="btn sitebtn mt-2" to="https://zummy.1techspot.com/" target="_blank">Live Site</Link>
                        </div>
                        <div className="projectflexcont text-center">
                            <span className="projimgbg">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/zummyadmin.png`} alt="projects" className="projectimg" />
                            </span>
                            <h6 className="h6 mt-3">Restaurent Management Admin</h6>
                            <Link className="btn sitebtn mt-2" to="https://dosanchutney.1techspot.com/" target="_blank">Live Site</Link>
                        </div>
                        <div className="projectflexcont text-center">
                            <span className="projimgbg">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/easymoi.png`} alt="projects" className="projectimg" />
                            </span>
                            <h6 className="h6 mt-3">Crowd Funding Manager</h6>
                            <Link className="btn sitebtn mt-2" to="https://easymoi.netlify.app/" target="_blank">Live Site</Link>
                        </div>
                        <div className="projectflexcont text-center">
                            <span className="projimgbg">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/solwallet.png`} alt="projects" className="projectimg" />
                            </span>
                            <h6 className="h6 mt-3">Solana Wallet</h6>
                            <Link className="btn sitebtn mt-2" to="https://solwalletweb.web.app/" target="_blank">Live Site</Link>
                        </div>
                        <div className="projectflexcont text-center">
                            <span className="projimgbg">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/healthon.png`} alt="projects" className="projectimg" />
                            </span>
                            <h6 className="h6 mt-3">Hospital Management System</h6>
                            <Link className="btn sitebtn mt-2" to="https://healthon.1techspot.com" target="_blank">Live Site</Link>
                        </div>
                        <div className="projectflexcont text-center">
                            <span className="projimgbg">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/fitmate.png`} alt="projects" className="projectimg" />
                            </span>
                            <h6 className="h6 mt-3">Fitmate</h6>
                            <Link className="btn sitebtn mt-2" to="https://fitmateui.web.app/" target="_blank">Live Site</Link>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="whychoose expsec" id="experience" data-aos="fade-up">
                <div className="whychoosesect my-3">
                    <h2 className="sech2 text-center">My Path in Tech</h2>
                    <p className="text-center content">
                        Exploring new technologies, solving real-world problems, and growing every step of the way.
                    </p>
                </div>
                <div>
                    <div className="timeline">
                        <ul>
                            <li>
                                <div className="timelinecontent">
                                    <h3>Pixel Web Solutions</h3>
                                    <p>Web Developer</p>
                                </div>
                                <div className="time">
                                    <h4>2024 - Present</h4>
                                </div>
                            </li>
                            <li>
                                <div className="timelinecontent">
                                    <h3>Hasotechnology</h3>
                                    <p>Junior Software Developer</p>
                                </div>
                                <div className="time">
                                    <h4>2022 - 2024</h4>
                                </div>
                            </li>
                            <div className="clearclass"></div>
                        </ul>
                    </div>
                </div>
            </section>

            {/* <section className="whychoose" id="whychoose" data-aos="fade-up">
                <Container>
                    <div className="whychoosesect my-3">
                        <h2 className="sech2 text-center">Why Choose 1TechSpot?</h2>
                        <p className="text-center content">
                            Valuable Branding Solutions To Propel Your Business To New Heights!
                        </p>
                    </div>
                    <div className="whatwedoflex">
                        <div className="whatwedocont">
                            <div>
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/whychoose1.png`} alt="arrow" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Innovative Solutions</h2>
                                    <p className="whatwedop">At 1Techspot, innovation is at the heart of everything we do. We bring cutting-edge solutions to the table, ensuring your business stays ahead of the curve in an ever-evolving digital landscape.</p>
                                </div>
                            </div>
                        </div>
                        <div className="whatwedocont">
                            <Image src={`${process.env.PUBLIC_URL}/assets/images/whychoose2.png`} alt="arrow" className="whatwedoimg" />
                            <div className="whatwedofeatures">
                                <h2 className="whatwedoh2">Expertise and Experiences</h2>
                                <p className="whatwedop">Our team of seasoned professionals boasts years of industry experience, delivering top-tier IT services and solutions. We leverage our expertise to turn your vision into reality, meeting and exceeding your expectations.</p>
                            </div>
                        </div>
                        <div className="whatwedocont">
                            <Image src={`${process.env.PUBLIC_URL}/assets/images/whychoose3.png`} alt="arrow" className="whatwedoimg" />
                            <div className="whatwedofeatures">
                                <h2 className="whatwedoh2">Client-centric Approach</h2>
                                <p className="whatwedop">We place our clients at the center of our operations. By understanding your unique requirements, we provide tailored solutions that drive your business forward. Your success is our mission.</p>
                            </div>
                        </div>
                        <div className="whatwedocont">
                            <Image src={`${process.env.PUBLIC_URL}/assets/images/whychoose4.png`} alt="arrow" className="whatwedoimg" />
                            <div className="whatwedofeatures">
                                <h2 className="whatwedoh2">Affordable Excellence</h2>
                                <p className="whatwedop">Quality should never come at an exorbitant cost. At Techspot, we offer premium services at competitive prices, ensuring you receive the best value for your investment.</p>
                            </div>
                        </div>
                        <div className="whatwedocont">
                            <Image src={`${process.env.PUBLIC_URL}/assets/images/whychoose5.png`} alt="arrow" className="whatwedoimg" />
                            <div className="whatwedofeatures">
                                <h2 className="whatwedoh2">Comprehensive Services</h2>
                                <p className="whatwedop">From initial consultation to final implementation, Techspot offers end-to-end IT services. Whether it's software development, network security, cloud solutions, or IT consulting, we're your one-stop shop for all your tech needs.</p>
                            </div>
                        </div>
                        <div className="whatwedocont">
                            <Image src={`${process.env.PUBLIC_URL}/assets/images/whychoose6.png`} alt="arrow" className="whatwedoimg" />
                            <div className="whatwedofeatures">
                                <h2 className="whatwedoh2">Advanced Technology</h2>
                                <p className="whatwedop">We utilize state-of-the-art technology to deliver innovative and efficient solutions. Our commitment to staying at the forefront of technological advancements guarantees your business remains competitive.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <Link to='/contact-us' className="btn sitebtn">Get In Touch</Link>
                    </div>
                </Container>
            </section>

            <section className="whatweoffer" id="offers" data-aos="fade-up">
                <div className="whychoosesect my-3">
                    <h2 className="sech2 text-center">Products We Offer</h2>
                    <p className="text-center content">
                        Outstanding Saas Solutions To Empower Your Business!
                    </p>
                </div>
                <Container>
                    <Row className="mt-5 align-items-center" data-aos="fade-up">
                        <Col lg={6}>
                            <h2 className="sech2">Hospital Management System (HMS)</h2>
                            <p className="content">
                                Our Hospital Management System (HMS) is a state-of-the-art solution designed to streamline hospital operations and enhance patient care. With a focus on efficiency, security, and user-friendliness, our HMS empowers healthcare providers to deliver top-notch services while optimizing their workflows.
                            </p>
                            <Link to='/hospital-management-software' className="btn sitebtn borderbtn">Know More</Link>
                        </Col>
                        <Col lg={6} className="text-center">
                            <Image alt="management softwares" className="mgsoftimg" src={`${process.env.PUBLIC_URL}/assets/images/hms.png`} />
                        </Col>
                    </Row>

                    <Row className="mt-5 align-items-center" data-aos="fade-up">
                        <Col lg={6} className="text-center">
                            <Image alt="management softwares" className="mgsoftimg" src={`${process.env.PUBLIC_URL}/assets/images/hrm.png`} />
                        </Col>
                        <Col lg={6}>
                            <h2 className="sech2">Human Resource Management (HRMS)</h2>
                            <p className="content">
                                Our Human Resource Management System (HRMS) is designed to streamline and automate HR processes, allowing organizations to manage their workforce more efficiently and effectively. With a comprehensive suite of features, our HRMS empowers HR professionals to focus on strategic initiatives rather than administrative tasks.
                            </p>
                            <Button className="btn sitebtn borderbtn">Know More</Button>
                        </Col>
                    </Row>

                    <Row className="mt-5 align-items-center" data-aos="fade-up">
                        <Col lg={6}>
                            <h2 className="sech2">Customer Relationship Management (CRM)</h2>
                            <p className="content">
                                Our Customer Relationship Management (CRM) system helps businesses manage interactions with current and potential customers. Features include contact management, sales pipeline management, lead management, marketing automation, customer support and service, and reporting and analytics. This system improves customer satisfaction, boosts sales, and enhances marketing efforts.
                            </p>
                            <Button className="btn sitebtn borderbtn">Know More</Button>
                        </Col>
                        <Col lg={6} className="text-center">
                            <Image alt="management softwares" className="mgsoftimg" src={`${process.env.PUBLIC_URL}/assets/images/crm.png`} />
                        </Col>
                    </Row>

                    <Row className="mt-5 align-items-center" data-aos="fade-up">
                        <Col lg={6} className="text-center">
                            <Image alt="management softwares" className="mgsoftimg" src={`${process.env.PUBLIC_URL}/assets/images/pms.png`} />
                        </Col>
                        <Col lg={6}>
                            <h2 className="sech2">Project Management System (PMS)</h2>
                            <p className="content">
                                The Project Management System (PMS) is designed to help organizations plan, execute, and track their projects efficiently. It offers features such as task and milestone management, resource allocation, time tracking, collaboration tools, project budgeting, and reporting and dashboards. This system ensures project success, improves team collaboration, and enhances productivity.
                            </p>
                            <Button className="btn sitebtn borderbtn">Know More</Button>
                        </Col>
                    </Row>


                    <Row className="mt-5 align-items-center" data-aos="fade-up">
                        <Col lg={6}>
                            <h2 className="sech2">Inventory Management System (IMS)</h2>
                            <p className="content">
                                Our Inventory Management System (IMS) streamlines inventory control and management processes. Key features include inventory tracking, stock alerts, purchase order management, supplier management, warehouse management, and barcode scanning. This system optimizes inventory levels, reduces costs, and ensures product availability.
                            </p>
                            <Button className="btn sitebtn borderbtn">Know More</Button>
                        </Col>
                        <Col lg={6} className="text-center">
                            <Image alt="management softwares" className="mgsoftimg" src={`${process.env.PUBLIC_URL}/assets/images/ims.png`} />
                        </Col>
                    </Row>

                    <Row className="mt-5 align-items-center" data-aos="fade-up">
                        <Col lg={6} className="text-center">
                            <Image alt="management softwares" className="mgsoftimg" src={`${process.env.PUBLIC_URL}/assets/images/ems.png`} />
                        </Col>
                        <Col lg={6}>
                            <h2 className="sech2">E-Commerce Management System</h2>
                            <p className="content">
                                The Project Management System (PMS) is designed to help organizations plan, execute, and track their projects efficiently. It offers features such as task and milestone management, resource allocation, time tracking, collaboration tools, project budgeting, and reporting and dashboards. This system ensures project success, improves team collaboration, and enhances productivity.
                            </p>
                            <Button className="btn sitebtn borderbtn">Know More</Button>
                        </Col>
                    </Row>

                </Container>
            </section>

            <section className="watwedo" id="services" data-aos="fade-up">
                <Container>
                    <div className="sectiontitle">
                        <h3 className="sectitl text-center">Services We Offer</h3>
                    </div>
                    <div className="whatwesect my-3">
                        <h2 className="sech2 text-center">We transform your ideas into
                            digital realities</h2>
                        <p className="text-center content">
                            Our passion lies in creating innovative solutions that propel businesses forward.
                        </p>
                    </div>
                    <div className="whatwedoflex">
                        <div className="whatwedocont">
                            <div>
                                <Image src={what1} alt="arrow" className="whatwedoimg" />
                                <div className="whatwedofeatures">
                                    <h2 className="whatwedoh2">Web Development</h2>
                                    <p className="whatwedop">From sleek websites to robust web applications, we build digital platforms that engage users and drive results.</p>
                                </div>
                            </div>
                        </div>
                        <div className="whatwedocont">
                            <Image src={what2} alt="arrow" className="whatwedoimg" />
                            <div className="whatwedofeatures">
                                <h2 className="whatwedoh2">Mobile App Development</h2>
                                <p className="whatwedop">Our mobile app development team crafts intuitive, feature-rich apps for iOS and Android, ensuring seamless user experiences.</p>
                            </div>
                        </div>
                        <div className="whatwedocont">
                            <Image src={what3} alt="arrow" className="whatwedoimg" />
                            <div className="whatwedofeatures">
                                <h2 className="whatwedoh2">Visual Graphic Design</h2>
                                <p className="whatwedop">Our creative graphic designers bring your brand to life with stunning visuals that resonate with your audience.</p>
                            </div>
                        </div>
                        <div className="whatwedocont">
                            <Image src={what4} alt="arrow" className="whatwedoimg" />
                            <div className="whatwedofeatures">
                                <h2 className="whatwedoh2">Software Development</h2>
                                <p className="whatwedop">From sleek websites to robust web applications, we build digital platforms that engage users and drive results.</p>
                            </div>
                        </div>
                        <div className="whatwedocont">
                            <Image src={what5} alt="arrow" className="whatwedoimg" />
                            <div className="whatwedofeatures">
                                <h2 className="whatwedoh2">Blockchain Development</h2>
                                <p className="whatwedop">Revolutionize with blockchain. We develop decentralized applications and systems that enhance security and transparency.</p>
                            </div>
                        </div>
                        <div className="whatwedocont">
                            <Image src={what6} alt="arrow" className="whatwedoimg" />
                            <div className="whatwedofeatures">
                                <h2 className="whatwedoh2">Software Testing</h2>
                                <p className="whatwedop">Quality assurance for flawless performance. Our rigorous testing processes ensure that your software is reliable, secure, and bug-free.</p>
                            </div>
                        </div>
                        <div className="whatwedocont">
                            <Image src={what7} alt="arrow" className="whatwedoimg" />
                            <div className="whatwedofeatures">
                                <h2 className="whatwedoh2">Digital Marketing</h2>
                                <p className="whatwedop">Amplify your digital voice. Our digital marketing strategies are designed to increase your reach, engagement, and conversion rates.</p>
                            </div>
                        </div>
                        <div className="whatwedocont">
                            <Image src={what8} alt="arrow" className="whatwedoimg" />
                            <div className="whatwedofeatures">
                                <h2 className="whatwedoh2">AI & ML Solutions</h2>
                                <p className="whatwedop">Smart solutions for an intelligent future. We harness the power of artificial intelligence and machine learning to provide innovative solutions that drive growth.</p>
                            </div>
                        </div>
                        <div className="whatwedocont">
                            <Image src={what9} alt="arrow" className="whatwedoimg" />
                            <div className="whatwedofeatures">
                                <h2 className="whatwedoh2">UI/UX Design</h2>
                                <p className="whatwedop">Intuitive design for memorable experiences. We focus on creating user interfaces that are both aesthetically pleasing and easy to navigate.</p>
                            </div>
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
            </section> */}



            <FooterMenu />
        </>
    );
};

export default Home;
