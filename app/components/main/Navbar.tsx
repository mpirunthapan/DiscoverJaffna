import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const navLinks = [
        { name: "Attractions", path: "/attractions" },
        { name: "Stays", path: "/stays" },
        { name: "Restaurants", path: "/restaurants" },
        { name: "Rentals", path: "/rentals" },
        { name: "Events", path: "/events" },
    ];

  return (
    <nav className="bg-white border-b border-gray-200">
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <Link to="/" className='flex items-center space-x-2'>
                <span className='self-center text-2xl font-bold text-gray-800'>
                    Discover Jaffna
                </span>
            </Link>

            <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls='navbar-default'
                aria-expanded={isOpen}
            >
                <span className='sr-only'>Open main menu</span>
                <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                >
                    {isOpen ? (
                        <path 
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M6 18L18 6M6 6l12 12'
                        />
                    ) : (
                        <path 
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    )}
                </svg>
            </button>

        <div 
            className={`${
                isOpen ? "block" : "hidden"
            } w-full lg:w-auto lg:block`}
            >
            <ul className='font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-transparent'>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <NavLink
                            to={link.path}
                            className={({isActive}) =>
                            `block py-2 px-3 rounded-sm transition-colors duration-200
                            ${
                                isActive
                                ? "bg-blue-100 text-blue-700 lg:bg-transparent lg:text-blue-700"
                                : "text-gray-900 hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-600"
                            }`
                        }
                        onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
