import React, { useEffect, useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h2 className='text-[5.5vw] font-[700] text-[#1d1d1f] my-5'>All Customer Reviews</h2>
            {
                reviews.map(review => <CustomerReview key={review.id} review={review}/>)
            }
        </div>
    );
};

export default Review;