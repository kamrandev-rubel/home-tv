import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useData from '../../Hooks/useData';
import image from '../../images/tv.png'
import HomePageReview from '../HomePageReview/HomePageReview';
const Home = () => {
    const [homeReviews, setHomeReviews] = useData('review.json')
    const homeReviews3 = homeReviews.slice(0, 3)
    const navigate = useNavigate()
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[90%] mx-auto mt-10'>
                <div className=" flex justify-center items-center flex-col">
                    <h1 className='text-[5.5vw] md:text-[3.5vw] lg:text-[3.5vw] font-[700] text-[#1d1d1f] mb-4'>The future hits home.</h1>
                    <p className='text-md lg:text-lg text-[#86868b] font-[600]'>Simply connect your favorite devices and transform your house into a remarkably smart, convenient, and entertaining home. Control lights with your iPhone — or just your voice. Play any song, in any room, from anywhere. And elevate movie night with theater-like picture and sound. All with the security and privacy of Apple.</p>
                    <button className="relative animate-bounce inline-flex items-center justify-center p-0.5 my-4 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  hover:text-white  focus:ring-4 focus:outline-none focus:ring-cyan-200 ">
                        <Link to='/' className="relative px-14 py-3.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0 text-lg font-md">
                            Live Demo
                        </Link>
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <img src={image} alt="" className='rounded-md ' />
                </div>
            </div>
            <div className='w-[90%] mx-auto'>
                <h1 className='text-[5.5vw] md:text-[3.5vw] lg:text-[3.5vw] font-[700] text-[#1d1d1f] my-10 text-center'>Customer Review ({homeReviews3.length})</h1>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        homeReviews3.map(homeReview => <HomePageReview
                            key={homeReview.id}
                            homeReview={homeReview}
                        />)
                    }
                </div>
                <div>
                    <button onClick={() => navigate('/review')} className="relative inline-flex items-center justify-center p-0.5 my-10 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  hover:text-white  focus:ring-4 focus:outline-none focus:ring-cyan-200 ">
                        <span className="relative px-14 py-3.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0 text-lg font-md">
                            See All Reviews
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;