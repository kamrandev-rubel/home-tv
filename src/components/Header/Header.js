import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi'
import { CgCloseO } from 'react-icons/cg'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <header>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-4 rounded  shadow-md">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap ">Home Tv</span>
                    </Link>
                    <button onClick={()=>setOpen(!open)} className="inline-flex items-center p-1.5 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu" aria-expanded="false">
                        {open ? <BiMenu className='h-7 w-7' /> : <CgCloseO className='h-7 w-7'/>}
                    </button>
                    <div className={` w-full md:block md:w-auto  duration-1000 ease-in-out ${open ? 'block]':'hidden'} `}>
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-md md:font-medium">
                            <li>
                                <CustomLink to="/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 md:border-0 md:p-0 font-[550] text-lg">Home</CustomLink>
                            </li>
                            <li>
                                <CustomLink to="/review" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100  md:border-0 md:p-0 font-[550] text-lg">Review</CustomLink>
                            </li>
                            <li>
                                <CustomLink to="/dashboard" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 md:border-0 md:p-0 font-[550] text-lg">Dashboard</CustomLink>
                            </li>
                            <li>
                                <CustomLink to="/blogs" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100  md:border-0 md:p-0 font-[550] text-lg">Blogs</CustomLink>
                            </li>
                            <li>
                                <CustomLink to="/about" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 md:border-0 md:p-0 font-[550] text-lg">About</CustomLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;