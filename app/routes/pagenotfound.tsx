import React from 'react'
import { Link } from 'react-router'

const pagenotfound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4">
            <img src="/images/404dude.png" alt="404dude" className='w-80 max-w-full mb-6 drop-shadow-lg animate-pulse [animation-duration:5s]'/>
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl mb-4">Oops! Page Not Found</p>
            <p className="mb-6 text-center max-w-lg">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
            Go to Home
            </Link>
        </div>
    )
}

export default pagenotfound
