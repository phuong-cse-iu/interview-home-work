import React, { useState } from 'react';
import Posts from '../../components/posts';
import Comments from '../../components/comments';
import ContentBlock from '../../components/content-block';
import SearchBar from '../../components/search-bar';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import AddPost from '../../containers/posts/AddPost';
import Alert from '../../components/alert';

const Home = ({posts, isLoading, error}) => {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleClick = e => setShowAddForm(!showAddForm);

  return (
    <ContentBlock>
      <Alert color="danger" message="Post fields required" />
      <SearchBar placeholder="Search posts" />
      <Button type="button" color="primary" onClick={handleClick}>
        {showAddForm ? 'Hide form' : 'Click to add post'}
      </Button>
      {showAddForm && <AddPost />}
      <Posts posts={posts} />
      {/* <Comments /> */}
    </ContentBlock>
  );
};

const mapStateToProps = ({ isLoading, posts, error }) => ({
  isLoading,
  posts,
  error,
});

export default connect(mapStateToProps, null)(Home);
