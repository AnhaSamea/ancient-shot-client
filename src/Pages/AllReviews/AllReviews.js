import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const AllReviews = () => {
    const {user} = useContext(AuthContext);
    const [allReviews, setAllReviews] = useState({});
    // const url = `http://localhost:5000/reviews?email=${user.email}`;
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setAllReviews(data);
        })
    },[user?.email])
    return (
        <div>
            <h2>You have {allReviews.length}</h2>
        </div>
    );
};

export default AllReviews;