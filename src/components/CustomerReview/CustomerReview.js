import React from 'react';
import { Link } from 'react-router-dom';
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

const CustomerReview = ({ review }) => {
    const { name, picture, country, rating, ratings, review_text, review_time } = review;
    return (
            <article className='shadow-lg w-6/12 mx-auto my-20 p-4'>
                <div className="flex items-center mb-4 space-x-4">
                    <img className="w-10 h-10 rounded-full" src={picture} alt="" />
                    <div className="space-y-1 font-medium dark:text-white">
                    <p>{name} <span className='font-semibold'>{review_time}</span></p>
                    </div>
                </div>
            <div className="flex items-center mb-1">

                

                





                {/* <BsStarFill className='text-[orange]' />
                <BsStarFill className='text-[orange]' />
                <BsStarFill className='text-[orange]' />
                <BsStarFill className='text-[orange]'  />
                <BsStarHalf className='text-[orange]' /> */}
                    <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">{rating} </h3>
                </div>
            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the {country} on</p></footer>
            <p className="mb-2 font-light text-gray-500 dark:text-gray-400">{review_text}</p>
                <Link to="/review" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</Link>
                <aside>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
                    <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                        <Link to="/review" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 ">Helpful</Link>
                        <Link to="/review" className="pl-4 text-sm font-medium text-blue-600 hover:underline">Report abuse</Link>
                    </div>
                </aside>
            </article>
    );
};

export default CustomerReview;