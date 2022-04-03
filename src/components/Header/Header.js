import React from 'react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi'

const Header = () => {
    return (
        <header>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-4 rounded  shadow-md">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap ">Home Tv</span>
                    </Link>
                    <button className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu" aria-expanded="false">
                        <BiMenu className='h-6 w-6' />
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-md md:font-medium">
                            <li>
                                <Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 md:border-0 md:p-0">Home</Link>
                            </li>
                            <li>
                                <Link to="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100  md:border-0 md:p-0">Review</Link>
                            </li>
                            <li>
                                <Link to="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 md:border-0 md:p-0">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100  md:border-0 md:p-0">Blogs</Link>
                            </li>
                            <li>
                                <Link to="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 md:border-0 md:p-0">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;