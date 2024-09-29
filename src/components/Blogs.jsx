import React, { useEffect, useState } from 'react';
import { getAllData } from '../config/firebase/firebasemethods';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogData = await getAllData('blogs');
        setBlogs(blogData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <h1 className='text-center font-bold text-xl mb-10'>Latest Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.length ? (
            blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                  <p bg-blue-600>{blog.content}</p>
                  {blog.imageUrl && (
                    <img
                      src={blog.imageUrl}
                      alt="blog-img"
                      className="w-full h-48 object-cover mt-3 rounded-md"
                    />
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No blogs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
