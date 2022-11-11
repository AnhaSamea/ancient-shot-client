import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const CheckoutReview = () => {
    const[reviews,setAllReviews] = useState([]);
    useEffect(()=>{
        fetch('https://ancient-shot-server.vercel.app/reviews')
        .then(res=>res.json())
        .then(data=> setAllReviews(data))
    },[])
    return (
        <div>
            <h1 className='text-3xl font-bold text-cyan-500 text-center'>Reviews</h1>
            {
                reviews.map(review=> <ReviewDetails key={review._id} review={review}></ReviewDetails>)
            }
        </div>
    );
};

export default CheckoutReview;