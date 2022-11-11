import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Reviews from '../Reviews/Reviews';
import CheckoutReview from '../CheckoutReview/CheckoutReview';

const Checkout = () => {
    const service = useLoaderData();
    // const{img,name,details} = service;
    return (
        <div>
            <h1 className="card-title text-start text-3xl font-bold py-5 px-2">{service.title}</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
        <PhotoProvider>
                <PhotoView src={service.facility[0].img}>
                <img src={service.facility[0].img} alt="ancient" className="rounded-xl h-64" />
                </PhotoView>
            </PhotoProvider>
        </figure>
        <div className="card-body ">
            <h2 className="card-title text-start">{service.facility[0].name}</h2>
            <p className='text-start text-slate-500'>{service.facility[0].details}</p>           
        </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
        <PhotoProvider>
                <PhotoView src={service.facility[1].img}>
                <img src={service.facility[1].img} alt="ancient" className="rounded-xl h-64" />
                </PhotoView>
            </PhotoProvider>
        </figure>
        <div className="card-body ">
            <h2 className="card-title text-start">{service.facility[1].name}</h2>
            <p className='text-start text-slate-500'>{service.facility[1].details}</p>           
        </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
        <PhotoProvider>
                <PhotoView src={service.facility[2].img}>
                <img src={service.facility[2].img} alt="ancient" className="rounded-xl h-64" />
                </PhotoView>
            </PhotoProvider>
        </figure>
        <div className="card-body ">
            <h2 className="card-title text-start">{service.facility[2].name}</h2>
            <p className='text-start text-slate-500'>{service.facility[2].details}</p>           
        </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
        <PhotoProvider>
                <PhotoView src={service.facility[3].img}>
                <img src={service.facility[3].img} alt="ancient" className="rounded-xl h-64" />
                </PhotoView>
            </PhotoProvider>
        </figure>
        <div className="card-body ">
            <h2 className="card-title text-start">{service.facility[3].name}</h2>
            <p className='text-start text-slate-500'>{service.facility[3].details}</p>           
        </div>
        </div>
    </div>
    <div>
        <CheckoutReview></CheckoutReview>
    </div>
    <div>
        <Reviews></Reviews>
    </div>

</div>
    );
};

export default Checkout;