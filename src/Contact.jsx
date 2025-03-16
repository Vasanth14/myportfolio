import React from 'react'
import HomeHeader from './components/HomeHeader'
import { Container } from 'react-bootstrap'
import FooterMenu from './components/FooterMenu'
import ContactForm from './components/ContactForm'
import CtaButtons from './components/CtaButtons'

const Contact = () => {
    const heading = 'Get In Touch With Us For More Information'
    const subHeading = `${'Let'}'s Talk 👋`
  return (
    <>
    <HomeHeader />
    <CtaButtons />
    <section className='contactpagediv topdiv'>
        <Container>
            <div className='col-lg-8 mx-auto'>
            <ContactForm heading={heading} subHeading={subHeading}/>
            </div>
        </Container>
    </section>
    <FooterMenu />
    </>
  )
}

export default Contact