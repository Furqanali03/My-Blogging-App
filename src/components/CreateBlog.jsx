import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendData, uploadImage } from '../config/firebase/firebasemethods';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleCreateBlog = async () => {
    try {
      let imageUrl = '';
      if (image) {
        imageUrl = await uploadImage(image, `blogs/${title}`);
      }
      await sendData({ title, content, imageUrl }, 'blogs');
      alert('Blog created successfully');
      navigate('/blogs'); // Redirect to the main page
    
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-center text-2xl mb-4">Create Blog</h2>
        <input
          type="text"
          className="w-full p-2 border rounded mt-2"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 border rounded mt-2"
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="file"
          className="w-full p-2 border rounded mt-2"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button onClick={handleCreateBlog} className="w-full p-2 bg-blue-500 text-white rounded mt-4">
          Create Blog
        </button>
      </div>
    </div>
  );
};

export default CreateBlog;
