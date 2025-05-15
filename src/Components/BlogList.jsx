import React from 'react';
import BlogCard from '../Miscellaneous/BlogCard';

function BlogList() {
  const blogPosts = [
    {
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3a1a6fce-e35c-4a32-893c-9704f2868423/NIKE+VOMERO+18.png',
      date: '3.22.2024',
      time: '5:13 PM',
      title: 'First Look at the Ghask Mountain Hi EK50 Collab with Techwear+',
    },
    {
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3a1a6fce-e35c-4a32-893c-9704f2868423/NIKE+VOMERO+18.png',
      date: '3.22.2024',
      time: '5:10 PM',
      title: 'AIRS® Launches New Genderless Collection',
    },
    {
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3a1a6fce-e35c-4a32-893c-9704f2868423/NIKE+VOMERO+18.png',
      date: '3.22.2024',
      time: '5:13 PM',
      title: 'First Look at the Ghask Mountain Hi EK50 Collab with Techwear+',
    },
    {
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3a1a6fce-e35c-4a32-893c-9704f2868423/NIKE+VOMERO+18.png',
      date: '3.22.2024',
      time: '5:13 PM',
      title: 'First Look at the Ghask Mountain Hi EK50 Collab with Techwear+',
    },
  ];

  return (
    <div className="bg-white px-4 sm:px-6">
      <section className="py-16 max-w-5xl mx-auto flex flex-col items-center">
        {blogPosts.map((post, idx) => (
          <BlogCard key={idx} {...post} />
        ))}
      </section>
    </div>
  );
}

export default BlogList;
