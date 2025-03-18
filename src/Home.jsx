import React, { useEffect, useState } from "react";
import HomeHeader from "./components/HomeHeader";
import { Container, Col, Row, Image, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'


import FooterMenu from "./components/FooterMenu";
import Aos from "aos";
import CtaButtons from "./components/CtaButtons";

const Home = () => {

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
                                <div className="d-flex gap-3 mt-3">
                                    <Link target="_blank" to="https://www.linkedin.com/in/vasanth-chandrasekar/" className="btn sitebtn">Let's Connect</Link>
                                    <Button
                                        className="btn sitebtn"
                                        id="button-addon2"
                                        href={`${process.env.PUBLIC_URL}/assets/vasanth.pdf`}
                                        download="Vasanth_Resume.pdf"
                                    >
                                        Download Resume
                                    </Button>
                                </div>
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
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/js.svg`} className="" />
                            </div>
                            <div className="skillsicons nodeskill">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/node.svg`} className="" />
                            </div>
                            <div className="skillsicons nextskill">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/nextjs.svg`} className="" />
                            </div>
                            <Image src={`${process.env.PUBLIC_URL}/assets/images/vasa.png`} className="bannerimg" alt="bannerimg" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="whychoose" id="projects" data-aos="fade-up">
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
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/tales.png`} alt="projects" className="projectimg" />
                            </span>
                            <h6 className="h6 mt-3">AI Kid's Tales</h6>
                            <Link className="sitebtn btn-sm mt-2" to="https://tales.landingfast.com/" target="_blank">Live Site</Link>
                        </div>
                        <div className="projectflexcont text-center">
                            <span className="projimgbg">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/zummy.png`} alt="projects" className="projectimg" />
                            </span>
                            <h6 className="h6 mt-3">Restaurent Management System</h6>
                            <Link className="sitebtn btn-sm mt-2" to="https://zummy.1techspot.com/" target="_blank">Live Site</Link>
                        </div>
                        <div className="projectflexcont text-center">
                            <span className="projimgbg">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/zummyadmin.png`} alt="projects" className="projectimg" />
                            </span>
                            <h6 className="h6 mt-3">Restaurent Management Admin</h6>
                            <Link className="btn-sm sitebtn mt-2" to="https://dosanchutney.1techspot.com/" target="_blank">Live Site</Link>
                        </div>
                        <div className="projectflexcont text-center">
                            <span className="projimgbg">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/easymoi.png`} alt="projects" className="projectimg" />
                            </span>
                            <h6 className="h6 mt-3">Crowd Funding Manager</h6>
                            <Link className="btn-sm sitebtn mt-2" to="https://easymoi.netlify.app/" target="_blank">Live Site</Link>
                        </div>
                        <div className="projectflexcont text-center">
                            <span className="projimgbg">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/solwallet.png`} alt="projects" className="projectimg" />
                            </span>
                            <h6 className="h6 mt-3">Solana Wallet</h6>
                            <Link className="btn-sm sitebtn mt-2" to="https://solwalletweb.web.app/" target="_blank">Live Site</Link>
                        </div>
                        <div className="projectflexcont text-center">
                            <span className="projimgbg">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/healthon.png`} alt="projects" className="projectimg" />
                            </span>
                            <h6 className="h6 mt-3">Hospital Management System</h6>
                            <Link className="btn-sm sitebtn mt-2" to="https://healthon.netlify.app/dashboard" target="_blank">Live Site</Link>
                        </div>
                        <div className="projectflexcont text-center">
                            <span className="projimgbg">
                                <Image src={`${process.env.PUBLIC_URL}/assets/images/fitmate.png`} alt="projects" className="projectimg" />
                            </span>
                            <h6 className="h6 mt-3">Fitmate</h6>
                            <Link className="btn-sm sitebtn mt-2" to="https://fitmateui.web.app/" target="_blank">Live Site</Link>
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
                                    <p>April 2024 - Present</p>
                                    <p>Blockchain, ERC Contracts, Solana, Nextjs, Reactjs, Redux</p>
                                </div>
                            </li>
                            <li>
                                <div className="timelinecontent">
                                    <h3>Hasotechnology</h3>
                                    <p>Junior Software Developer</p>
                                    <p>December 2022 - April 2024</p>
                                    <p>Nodejs, Mongodb, ReactJs, Nextjs, Php, Docker, AWS</p>
                                </div>
                            </li>
                            <div className="clearclass"></div>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="whychoose expsec" id="contact" data-aos="fade-up">
                <Container>
                    <div className="whychoosesect my-3">
                        <h2 className="sech2 text-center">Connect with me!</h2>
                        <p className="text-center content">
                            Looking to collaborate or discuss an opportunity?
                            Connect with me, and let's create something amazing together!
                        </p>
                    </div>
                    <div className="d-flex justify-content-center gap-3">
                        <Link target="_blank" to="http://github.com/vasanth14/" className="btn sitebtn">Github</Link>
                        <Link target="_blank" to="https://www.linkedin.com/in/vasanth-chandrasekar/" className="btn sitebtn">Linkedin</Link>
                        <Button
                            className="btn sitebtn"
                            id="button-addon2"
                            href={`${process.env.PUBLIC_URL}/assets/vasanth.pdf`}
                            download="Vasanth_Resume.pdf"
                        >
                            Download Resume
                        </Button>
                    </div>
                </Container>
            </section>

            <FooterMenu />
        </>
    );
};

export default Home;
