import React from 'react';
import img from './Britain-in-the-roaring-twenties-7.jpg'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const About = () => {
    return (

        <div className='py-8'>            
            <h1 className='text-3xl font-bold pt-8 pb-3 text-cyan-500 text-center'>About Ancient Shot</h1>
                <div className="hero-content flex-col lg:flex-row ">
                    <p className='text-xl text-slate-800 shadow-xl rounded-lg p-8'>
                        <strong className='text-semibold'>Ancient Shot</strong> is a website/blog exclusively dedicated to historical and rare photographs. Each historical photograph has a story to tell, each of them documents a major event in human history, each photo is a way to grasp the full meaning of the past. <br />
                        On the articles displayed in my blog, I encourage you to probe, dispute, dig deeper, inquire. History is not static. It’s fluid. It changes and grows and becomes richer and more complex when any individual interacts with it.
                    </p>

                    <div className='w-full'>
                        <PhotoProvider>
                            <PhotoView src={img}>
                            <img src={img} className="w-full h-full rounded-lg shadow-2xl" alt='' />
                            </PhotoView>
                        </PhotoProvider>

                    </div>
                </div>

            </div>
       
    );
};

export default About;