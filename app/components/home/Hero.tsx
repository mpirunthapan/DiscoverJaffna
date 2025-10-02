import React from 'react'
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center items-center mx-4 md:mx-12 lg:mx-30 rounded-3xl min-h-[60vh] md:min-h-[80vh] overflow-hidden group">
      
      {/* Background Image */}
      <img
        src="/images/bg-temple.png"
        alt="Jaffna Landscape"
        className="absolute w-full h-full top-0 left-0 object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute w-full h-full top-0 left-0 bg-black/50 rounded-3xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12 max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-snug">
          Jaffna: Where Culture and Coastline Collide.
        </h1>
        <p className="mt-3 text-sm sm:text-base md:text-xl text-gray-200">
          Discover ancient temples, vibrant markets, and serene beaches in the
          heart of Sri Lanka's north.
        </p>

        <Link
          to="/attractions"
          className="mt-5 px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white text-sm sm:text-base rounded-lg hover:bg-blue-600 transition"
        >
          Explore Jaffna
        </Link>
      </div>
    </div>
  )
}

export default Hero
