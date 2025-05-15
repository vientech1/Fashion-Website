import React from 'react';
import FemaleImg from '../assets/Female2.jpg';
import MaleImg from '../assets/Male.jpg';

const CategorySection = () => {
  return (
    <div className="flex flex-col md:flex-row  h-screen">
      {/* Women Section */}
      <div
        className="flex-1 relative bg-cover bg-center group"
        style={{ backgroundImage: `url(${FemaleImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition duration-300" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-3xl font-semibold">Women</h2>
          <button className="mt-4 border border-white px-6 py-2 hover:bg-white hover:text-black transition">
            Shop now
          </button>
        </div>
      </div>

      {/* Men Section */}
      <div
        className="flex-1 relative bg-cover bg-center group"
        style={{ backgroundImage: `url(${MaleImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition duration-300" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-3xl font-semibold">Men</h2>
          <button className="mt-4 border border-white px-6 py-2 hover:bg-white hover:text-black transition">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
