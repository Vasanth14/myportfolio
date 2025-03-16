import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import logoname from '../../src/app/assets/images/footericonlogo.svg'
import fb from '../../src/app/assets/images/fb.png'
import link from '../../src/app/assets/images/link.png'
import beh from '../../src/app/assets/images/beh.png'
import drib from '../../src/app/assets/images/drib.png'

const FooterMenu = () => {
    return (
        <>
            <section className='footer'>
                <Container>
                    <Row>
                        <Col className='my-5 my-lg-0' lg={4}>
                            <Link className='footerbrand'><span className='me-2'><Image src={logoname} className="footericonlogo my-3 my-lg-0" alt="logo"/></span>1TechSpot</Link>
                            <h2 className='footflo'>Follow Us On</h2>
                            <div className='footlinks'>
                                <Link><Image className='footlinksimg' src={fb} alt='fb'/></Link>
                                <Link><Image className='footlinksimg' src={link} alt='link'/></Link>
                                <Link><Image className='footlinksimg' src={beh} alt='beh'/></Link>
                                <Link><Image className='footlinksimg' src={drib} alt='drib'/></Link>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='footmenus'>
                                <h2>Our Services</h2>
                                <ul>
                                    <li><Link href="#">Web Development</Link></li>
                                    <li><Link href="#">Mobile App Development</Link></li>
                                    <li><Link href="#">Blockchain Development</Link></li>
                                    <li><Link href="#">AI & ML Development</Link></li>
                                    <li><Link href="#">Software Development</Link></li>
                                    <li><Link href="#">Digital Marketing</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='footmenus'>
                                <h2>Support</h2>
                                <ul>
                                    <li><Link href="#">Privacy Policy</Link></li>
                                    <li><Link href="#">Terms And Conditions</Link></li>
                                    <li><Link href="#">Blockchain Development</Link></li>
                                    <li><Link as={Link} target='_blank' tos="https://1techspot.com/blog">Blog</Link></li>
                                    <li><Link href="#">Frequently Asked Questions</Link></li>
                                </ul>

                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='text-center mt-5 footbtm'>
                    <p>© 1Techpot Limited 2023. All Rights Reserved.</p>
                </div>
            </section>
        </>
    )
}

export default FooterMenu