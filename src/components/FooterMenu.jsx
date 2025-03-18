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
                <div className='text-center mt-5 footbtm'>
                    <p>Vasanth Chandrasekar</p>
                </div>
            </section>
        </>
    )
}

export default FooterMenu