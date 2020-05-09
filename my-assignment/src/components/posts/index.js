import React, { useState } from 'react';
import postsData from '../../data/posts.json';
import PostItem from './PostItem';

export default () => {
  const [posts, setPosts] = useState(postsData);
  return (
    <div>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};
