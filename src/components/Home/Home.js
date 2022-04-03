import React from 'react';
import image from '../../images/tv.png'
const Home = () => {
    return (
        <div className='grid grid-cols-2 w-[90%] mx-auto mt-10'>
            <div className=" flex justify-center items-center flex-col">
                <h1 className='lg:text-5xl font-[700] text-[#1d1d1f] mb-4'>The future hits home.</h1>
                <p className='text-lg text-[#86868b] font-[600]'>Simply connect your favorite devices and transform your house into a remarkably smart, convenient, and entertaining home. Control lights with your iPhone — or just your voice. Play any song, in any room, from anywhere. And elevate movie night with theater-like picture and sound. All with the security and privacy of Apple.</p>
                <button class="relative inline-flex items-center justify-center p-0.5 my-4 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  hover:text-white  focus:ring-4 focus:outline-none focus:ring-cyan-200 ">
                    <span class="relative px-14 py-3.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0 text-lg font-md">
                        Live Demo
                    </span>
                </button>
            </div>
            <div className="flex justify-center items-center">
                <img src={image} alt="" className='rounded-md'/>
            </div>
        </div>
    );
};

export default Home;