import React from 'react';

const BlogCard = ({ title, authorName, authorImageUrl, bannerImgUrl, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden md:w-[20vw] md:max-w-md mx-4 my-6 p-4 space-y-2 hover:-translate-y-2 duration-300">
      <div className="flex items-center p-4  min-h-[14vh]">
        <img src={authorImageUrl} alt={`${authorName}`} className="w-10 h-10 rounded-full mr-4" />
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-600 text-sm">{authorName}</p>
        </div>
      </div>
      <img src={bannerImgUrl} alt="Banner" className="w-[400px] h[200px] object-cover" />
      <div className="p-4 text-gray-700 text-sm min-h-[18vh]">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BlogCard;
