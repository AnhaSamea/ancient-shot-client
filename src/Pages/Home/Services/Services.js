import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';
const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/limitedservices')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='text-center '>
           {/* <p className='text-xl font-bold  py-2 text-cyan-500'>Service</p> */}
            <h1 className='text-5xl font-bold py-2'>Rare Historical Photos</h1>
            <div className='py-3'>
            <p className=' '>You’re free to share my blog or my articles. 
            </p>
            <p className=''>But please provide a link to my website or to that specific article.</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div>
            <Link to='/services' className=""><button className="btn btn-outline mx-2 mt-6 px-8 text-cyan-500 hover:bg-cyan-500 hover:text-cyan-50 hover:border-cyan-500">See All</button></Link>
       </div>
        </div>
    );
};

export default Services;