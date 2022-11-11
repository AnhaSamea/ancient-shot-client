import React from 'react';

const Reviews = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold py-5'>Add your review</h1>
            <form className='flex justify-center '>
            <div className="form-control w-full max-w-xs shadow-xl rounded-lg p-8">
                <label className="label">
                    <span className="label-text">Your Name</span>

                </label>
                <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Your Email</span>

                </label>
                <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Your Review</span>

                </label>
                <textarea className="textarea textarea-bordered h-52 w-64" placeholder="Bio"></textarea>

                <button className="btn btn-outline my-5  text-cyan-500 hover:bg-cyan-500 hover:text-cyan-50 hover:border-cyan-500" type='submit'>Submit</button>
            </div>
            </form>
        </div>
    );
};

export default Reviews;