import React, {useState} from 'react'
import Navbar from '~/components/main/Navbar'
import Footer from '~/components/main/Footer'
import Hero from '~/components/attractions/Hero'
import AttractionsTable from '~/components/attractions/AttractionsTable'

const attractions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <>
    <Navbar />
    <Hero onSearch={setSearchQuery} />
    <AttractionsTable searchQuery={searchQuery} />
    <Footer />
    </>
  )
}

export default attractions
