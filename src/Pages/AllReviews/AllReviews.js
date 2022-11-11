import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewRow from '../ReviewRow/ReviewRow';

const AllReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState({});
    // const url = `https://ancient-shot-server.vercel.app/reviews?email=${user.email}`;
    useEffect(()=>{
        fetch(`https://ancient-shot-server.vercel.app/reviews?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setReviews(data);
        })
    },[user?.email])
    return (
        <div>
            <h2 className='font-bold text-3xl py-8'>History <strong className='font-bold text-3xl text-cyan-500'>{reviews.length}</strong></h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Review</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
   {
    reviews.map(review=> <ReviewRow key={review._id} review={review}></ReviewRow>)
   }

    </tbody>
  
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Review</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
        </div>
    );
};

export default AllReviews;