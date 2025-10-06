import React from 'react'
import { useState } from 'react';

interface HeroProps {
    onSearch: (query: string) => void;
}

const Hero:React.FC<HeroProps> = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <div className="relative flex flex-col justify-center items-center mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-32 rounded-3xl min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] overflow-hidden group">
        
        <img
        src="/images/bg-attractions-temple.png"
        alt="Jaffna Attractions"
        className="absolute w-full h-full top-0 left-0 object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute w-full h-full top-0 left-0 bg-black/50 rounded-3xl"></div>

        {/* Text + Search */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12 max-w-3xl text-white">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-snug md:leading-tight">
            Discover the Wonders of Jaffna
            </h1>

            <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl">
            Explore ancient temples, pristine beaches, and vibrant culture.
            </p>

            {/* Search Bar */}
            <form
            onSubmit={handleSubmit}
            className="mt-6 flex items-center justify-center gap-2 max-w-md w-full"
            >
            <input
                type="text"
                placeholder="Search for attractions"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-3/4 md:w-2/3 px-4 py-2 rounded-lg bg-white text-gray-900 shadow-sm focus:outline-none"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold transition cursor-pointer"
            >
                Search
            </button>
            </form>
        </div>
        </div>
    )
}

export default Hero
