import useData from '../../Hooks/useData';
import CustomerReview from '../CustomerReview/CustomerReview';

const Review = () => {
    const [reviews, setReviews] = useData('review.json')
    return (
        <div>
            <h2 className='lg:text-[4.5vw] md:text-[6vw] text-[7vw] font-[700] text-[#1d1d1f] my-5'>All Customer Reviews</h2>
            {
                reviews.map(review => <CustomerReview key={review.id} review={review}/>)
            }
        </div>
    );
};

export default Review;