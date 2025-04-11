// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full bg-black/40 text-white px-10 py-4 flex justify-center items-center z-50 rounded-lg">
            <div className="flex-1">
                <h2 className="text-3xl font-bold text-white">LOGO</h2>
            </div>

            <div className="flex-1 flex justify-center max-[880px]:hidden">
                <ul className="flex space-x-8 min-w-max">
                    <li>
                        <a href="#home" className="text-sm text-white hover:text-gray-200">Home</a>
                    </li>
                    <li>
                        <a href="#aboutUs" className="text-sm text-white hover:text-gray-200 whitespace-nowrap">About Us</a>
                    </li>
                    <li>
                        <a href="#owners" className="text-sm text-white hover:text-gray-200">Owners</a>
                    </li>
                    <li>
                        <a href="#tenants" className="text-sm text-white hover:text-gray-200">Tenants</a>
                    </li>
                    <li>
                        <a href="#properties" className="text-sm text-white hover:text-gray-200">Properties</a>
                    </li>
                </ul>
            </div>

            <div className="flex-1 flex justify-end max-[880px]:hidden">
                <button className="bg-emerald-400 text-white px-6 py-2 rounded-md hover:bg-emerald-500 transition-colors">
                    Start Treatment
                </button>
            </div>

            <div className="hidden max-[880px]:block">
                <button
                    onClick={toggleMenu}
                    className="text-white focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-16 right-0 bg-black/40 w-full max-[880px]:block md:hidden">
                    <ul className="flex flex-col space-y-4 p-4">
                        <li>
                            <Link to="/" className="text-sm text-white hover:text-gray-200">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-sm text-white hover:text-gray-200">About Us</Link>
                        </li>
                        <li>
                            <Link to="/owners" className="text-sm text-white hover:text-gray-200">Owners</Link>
                        </li>
                        <li>
                            <Link to="/tenants" className="text-sm text-white hover:text-gray-200">Tenants</Link>
                        </li>
                        <li>
                            <Link to="/properties" className="text-sm text-white hover:text-gray-200">Properties</Link>
                        </li>
                        <li>
                            <button className="bg-emerald-400 text-white px-6 py-2 rounded-md hover:bg-emerald-500 transition-colors w-full">
                                Start Treatment
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;