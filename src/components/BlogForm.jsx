import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorImageUrl, setAuthorImageUrl] = useState('');
  const [bannerImgUrl, setBannerImgUrl] = useState('');
  const navigate = useNavigate();

  const saveBlog = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      content,
      authorName,
      authorImageUrl,
      bannerImgUrl,
    };

    try {
      const response = await fetch('http://localhost:3000/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add blog');
      }

      // Assuming successful addition, navigate to the home page or another route
      navigate('/');
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  return (
    <form onSubmit={saveBlog} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="authorName">
          Author Name
        </label>
        <input
          type="text"
          id="authorName"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="authorImageUrl">
          Author Image URL
        </label>
        <input
          type="text"
          id="authorImageUrl"
          value={authorImageUrl}
          onChange={(e) => setAuthorImageUrl(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bannerImgUrl">
          Banner Image URL
        </label>
        <input
          type="text"
          id="bannerImgUrl"
          value={bannerImgUrl}
          onChange={(e) => setBannerImgUrl(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add Blog
      </button>
    </form>
  );
};

export default BlogForm;
