import React, { useEffect, useState } from 'react';
import AllServiceCard from './AllServiceCard';

const AllService = () => {
    const [allServices, setAllService] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setAllService(data))
    },[])
    return (
        <div className='text-center '>
           <h1 className='text-5xl font-bold py-2'>Rare Historical Photos</h1> 
           <div className='py-3'>
           <p className=' '>You’re free to share my blog or my articles. 
            </p>
            <p className=''>But please provide a link to my website or to that specific article.</p>
           </div>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    allServices.map(allService=> <AllServiceCard key={allService.id} allService={allService}></AllServiceCard>)
                }
           </div>
        </div>
    );
};

export default AllService;