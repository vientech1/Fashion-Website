import React from 'react';

function Circles({ hexcolor, colorname }) {
    console.log(hexcolor)
  return (
    <div className='flex flex-col items-center justify-center'>
    <div
      className="w-10 h-10 rounded-full border border-gray-300 mb-2"
      style={{ backgroundColor: hexcolor }}
   />
    <p>{colorname}</p>
    </div>
  );
}

export default Circles;
