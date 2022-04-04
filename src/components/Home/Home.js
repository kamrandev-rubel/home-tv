import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/tv.png'
const Home = () => {




    return (
        <div>
            <div className='grid grid-cols-2 w-[90%] mx-auto mt-10'>
                <div className=" flex justify-center items-center flex-col">
                    <h1 className='lg:text-5xl font-[700] text-[#1d1d1f] mb-4'>The future hits home.</h1>
                    <p className='text-lg text-[#86868b] font-[600]'>Simply connect your favorite devices and transform your house into a remarkably smart, convenient, and entertaining home. Control lights with your iPhone — or just your voice. Play any song, in any room, from anywhere. And elevate movie night with theater-like picture and sound. All with the security and privacy of Apple.</p>
                    <button className="relative inline-flex items-center justify-center p-0.5 my-4 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  hover:text-white  focus:ring-4 focus:outline-none focus:ring-cyan-200 ">
                        <span className="relative px-14 py-3.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0 text-lg font-md">
                            Live Demo
                        </span>
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <img src={image} alt="" className='rounded-md' />
                </div>
            </div>
            <div className='w-[90%] mx-auto'>
                <h1 className='lg:text-5xl font-[700] text-[#1d1d1f] my-10'>Customer Review</h1>
                <div className='grid grid-cols-3'>
                    <article className='shadow-lg'>
                        <div className="flex items-center mb-4 space-x-4">
                            <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""/>
                                <div className="space-y-1 font-medium dark:text-white">
                                    <p>Jese Leos Joined on August 2014</p>
                                </div>
                        </div>
                        <div className="flex items-center mb-1">
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                        </div>
                        <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on </p></footer>
                        <p className="mb-2 font-light text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                        <p className="mb-3 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
                        <Link to="/" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</Link>
                        <aside>
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
                            <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                                <Link to="/" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</Link>
                                <Link to="/" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</Link>
                            </div>
                        </aside>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Home;