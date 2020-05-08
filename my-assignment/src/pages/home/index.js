import React from 'react';
import Posts from '../../components/posts';
import Comments from '../../components/comments';
import ContentBlock from '../../components/content-block';

export default () => (
  <ContentBlock>
    <Posts />
    <Comments />
  </ContentBlock>
);