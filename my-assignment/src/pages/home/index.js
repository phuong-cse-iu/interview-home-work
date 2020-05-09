import React from 'react';
import Posts from '../../components/posts';
import Comments from '../../components/comments';
import ContentBlock from '../../components/content-block';
import SearchBar from '../../components/search-bar';
import {connect} from 'react-redux';

const Home = () => (
  <ContentBlock>
    <SearchBar placeholder="Search posts" />
    <Posts />
    <Comments />
  </ContentBlock>
);

const mapStateToProps = ({isLoading, posts, error}) => ({
  isLoading,
  posts,
  error,
})

export default connect(mapStateToProps, null)(Home);