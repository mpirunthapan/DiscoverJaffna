import { Link, NavLink } from 'react-router'

const Navbar = () => {

    const navLinks = [
        { name: "Attractions", path: "/attractions" },
        { name: "Hotels", path: "/hotels" },
        { name: "Restaurants", path: "/restaurants" },
        { name: "Rentals", path: "/rentals" },
        { name: "Events", path: "/events" },
    ];

  return (
    <nav className="bg-white border-gray-200">
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <Link to="/">
                <p className='text-2xl font-bold font-gradient text-gray-800'>Discover Jaffna</p>
            </Link>
        <div className='w-auto'>
            <ul className='font-medium flex space-x-4 p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50'>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <NavLink
                            to={link.path}
                            className={({isActive}) =>
                            `block py-2 px-3 rounded-sm transition-colors duration-200
                            ${
                                isActive
                                ? "bg-blue-100 text-blue-700 font-semibold"
                                : "text-gray-900 hover:bg-gray-100"
                            }`
                        }
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
