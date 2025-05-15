import React from 'react';
import CoverImg from '../assets/LadyCover.jpg';

function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen w-full flex justify-center items-center overflow-hidden">
        {/* Fixed Background Image */}
        <img
          src={CoverImg}
          alt="Hero Background"
          className=" top-0 left-0 w-full fixed h-full object-cover -z-10"
        />

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-0" />

        {/* Foreground Text */}
        <div className='z-10 text-white  absolute space-y-5'>
        <h1 className=" text-5xl font-medium">
        Industrial design meets fashion.
        </h1>
        <p>
        Atypical leather goods
        </p>
        <button
        type="submit"
        className="text-white border px-3 py-2 hover:opacity-90 transition"
      >
        Explore 
      </button>
        </div>
       
      </div>

    </>
  );
}

export default HeroSection;
