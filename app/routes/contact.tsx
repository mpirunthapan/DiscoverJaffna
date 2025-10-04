import React from 'react'
import Footer from '~/components/main/Footer'
import Navbar from '~/components/main/Navbar'
import GetInTouch from '~/components/contact/GetInTouch'
import ContactForm from '~/components/contact/ContactForm'

const contact = () => {
  return (
    <>
    <Navbar />
    <div className='max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
            <GetInTouch />
            <ContactForm />
        </div>
    </div>
    <Footer />
    </>
  )
}

export default contact
