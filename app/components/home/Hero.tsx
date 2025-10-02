import React from 'react'
import { Link } from "react-router";

const Hero = () => {
  return (
     <div className="relative flex flex-col justify-center items-center mx-45 rounded-3xl min-h-[80vh] overflow-hidden group">
      
      <img
        src="/images/bg-temple.png"
        alt="Jaffna Landscape"
        className="absolute w-full h-full top-0 left-0 object-cover rounded-3xl transition-transform duration-750 ease-in-out group-hover:scale-110"
      />

      
      <div className="absolute w-full h-full top-0 left-0 bg-black/50 rounded-3xl"></div>

      
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Jaffna: Where Culture and Coastline Collide.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Discover ancient temples, vibrant markets, and serene beaches in the
          heart of Sri Lanka's north.
        </p>

        
        <Link
          to="/attractions"
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Explore Jaffna
        </Link>
      </div>
    </div>
  )
}

export default Hero
