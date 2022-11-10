import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className='my-6 py-3'>
            <div className=" carousel w-full rounded-3xl">
  <div id="slide1" className="carousel-item relative w-full ">
    <div className='img-gradient'>
    <img src={img1} className="w-screen h-auto " alt='first'/>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4 ">
      <h1 className='text-6xl font-bold text-white'>
      Dedicated to<br />
      Historical and<br />
      Rare photographs <br />
      </h1>
     
      
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-2/5">
        <p className='text-xl text-white'>
        Each historical photograph has a story to tell, each of them documents a major event in human history, each photo is a way to grasp the full meaning of the past.
        </p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4 ">
    <button className="btn bg-slate-500 text-orange-50 mr-5">Discover More</button>
      <button className="btn btn-outline text-slate-50">Latest Works</button>
    </div>

    <div  className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide6" className="btn btn-circle btn-outline mx-2 text-white">❮</a> 
      <a href="#slide2" className="btn btn-circle btn-outline text-white ">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className='img-gradient'>
    <img src={img2} className="w-screen h-auto " alt='first'/>
    </div>
    <div  className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle btn-outline mx-2 text-white">❮</a> 
      <a href="#slide3" className="btn btn-circle btn-outline text-white">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className='img-gradient'>
    <img src={img3} className="w-screen h-auto " alt='first'/>
    </div>
    
    <div  className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle btn-outline mx-2 text-white">❮</a> 
      <a href="#slide4" className="btn btn-circle btn-outline text-white">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className='img-gradient'>
    <img src={img4} className="w-screen h-auto " alt='first'/>
    </div>
    <div  className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle btn-outline mx-2 text-white">❮</a> 
      <a href="#slide5" className="btn btn-circle btn-outline text-white">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
  <div className='img-gradient'>
    <img src={img5} className="w-screen h-auto " alt='first'/>
    </div>
    <div  className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle btn-outline mx-2 text-white">❮</a> 
      <a href="#slide6" className="btn btn-circle btn-outline text-white">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
  <div className='img-gradient'>
    <img src={img6} className="w-screen h-auto " alt='first'/>
    </div>
    <div  className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle btn-outline mx-2 text-white">❮</a> 
      <a href="#slide1" className="btn btn-circle btn-outline text-white">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;