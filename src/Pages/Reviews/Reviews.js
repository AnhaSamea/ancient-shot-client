import React, { useContext } from 'react';
import{ AuthContext} from '../../context/AuthProvider/AuthProvider'
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Reviews = () => {
    const {_id,title,price} = useLoaderData()
    const {user} = useContext(AuthContext);
       
    const handlePostReview = event=>{
        event.preventDefault();
        const form= event.target;
        const name = form.name.value;
        const email = user?.email || 'Unregistered';
        const message = form.message.value;
        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            message
        }

        fetch(`http://localhost:5000/reviews`,{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){

            alert('Thanks for your review!')
                form.reset()
            }
            console.log(data)
        })
        .catch(err=> console.error(err))
    }
    return (
        <div>
            <h1 className='text-center text-3xl font-bold py-5'>Add your review</h1>
            <form onSubmit={handlePostReview} className='flex justify-center '>
            <div className="form-control w-full max-w-xs shadow-xl rounded-lg p-8">
                <label className="label">
                    <span className="label-text">Your Name</span>

                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-xs" defaultValue={user?.name} required/>
                <label className="label">
                    <span className="label-text">Your Email</span>

                </label>
                <input type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" defaultValue={user?.email} readOnly required/>
                <label className="label">
                    <span className="label-text">Your Review</span>

                </label>
                <textarea name='message' className="textarea textarea-bordered h-52 w-64" placeholder="Write here.."></textarea>

                <button className="btn btn-outline my-5  text-cyan-500 hover:bg-cyan-500 hover:text-cyan-50 hover:border-cyan-500" type='submit'>Submit</button>
            </div>
            </form>
        </div>
    );
};

export default Reviews;