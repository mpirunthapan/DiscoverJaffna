import React from 'react'
import Footer from '~/components/main/Footer'
import Navbar from '~/components/main/Navbar'
import Hero from '~/components/attractionDetail/Hero'
import { useParams } from 'react-router'

const attractionDetail = () => {
  const{id} = useParams();

  return (
    <>
    <Navbar />
    <Hero id={Number(id)}/>
    <Footer />
    </>
  )
}

export default attractionDetail
