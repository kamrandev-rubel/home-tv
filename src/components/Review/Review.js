import React, { useEffect, useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <div>
            <h2>All Customer Reviews</h2>
            {
                reviews.map(review => <CustomerReview key={review.id} review={review}/>)
            }
        </div>
    );
};

export default Review;