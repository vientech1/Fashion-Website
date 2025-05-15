import React from 'react';

function BlogCard({ image, date, time, title }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center items-start w-full md:w-4/5 space-y-4 md:space-y-0 md:space-x-8 mb-14">
      <img
        src={image}
        alt={title}
        className="w-full md:w-64 h-60 object-cover rounded-xl"
      />
      <div className="flex-1 text-left">
        <p className="text-sm text-gray-500 mb-1">{`${date} • ${time}`}</p>
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
          {title}
        </h2>
        <p className="text-gray-700">
          📖 👀 <a href="#" className="underline text-black">More</a>
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
