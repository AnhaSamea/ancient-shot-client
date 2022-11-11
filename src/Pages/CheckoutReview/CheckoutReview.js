import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const CheckoutReview = () => {
    const[reviews,setAllReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=> setAllReviews(data))
    },[])
    return (
        <div>
            <h1 className='text-3xl font-bold text-cyan-500 text-center py-8'>Reviews</h1>
            {
                reviews.map(review=> <ReviewDetails key={review._id} review={review}></ReviewDetails>)
            }
        </div>
    );
};

export default CheckoutReview;