import React from 'react';
import posts from '../../data/posts.json';
import PostItem from './PostItem';

export default () => <div>
  {posts.map(post => <PostItem post={post} key={post.id} />)}

</div>