import React, { useState, useEffect } from 'react';
import Post from '../post/Post.jsx';
import './posts.scss';
import { makeRequest } from '../../axios.js';

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makeRequest.get('/posts');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div className="posts">
      {error ? `An error has occurred: ${error.message}` : (isLoading ? 'Loading...' : data.map((post) => 
        <Post post={post} key={post.id} />)
      )}
    </div>
  );
};

export default Posts;
