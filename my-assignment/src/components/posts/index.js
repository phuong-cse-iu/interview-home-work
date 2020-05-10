import React from 'react';
import PostItem from './PostItem';

export default ({posts, users, comments, ...props}) => {
  return (
    <div>
      {posts && posts.length > 0 && posts.map((post) => (
        <PostItem post={post} key={post.id} users={users} comments={comments} />
      ))}
    </div>
  );
};
