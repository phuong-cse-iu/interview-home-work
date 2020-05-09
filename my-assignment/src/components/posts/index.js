import React, { useState } from 'react';
import postsData from '../../data/posts.json';
import PostItem from './PostItem';

export default ({posts, ...props}) => {
  // const [posts, setPosts] = useState(postsData);
  console.log('posts', posts);
  return (
    <div>
      {posts && posts.length > 0 && posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};
