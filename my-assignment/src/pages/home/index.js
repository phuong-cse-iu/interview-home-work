import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import Alert from '../../containers/alert';
import ContentBlock from '../../components/content-block';
import Posts from '../../components/posts';
import { POST } from '../../constants';
import AddPost from '../../containers/posts/AddPost';
import SearchBar from '../../containers/search-bar';

const Home = ({ posts, fetchPosts, isLoading, error }) => {
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleClick = (e) => setShowAddForm(!showAddForm);

  return (
    <ContentBlock>
      {error.message && error.message.length > 0 && (
        <Alert color={error.color} message={error.message} />
      )}
      <SearchBar placeholder="Search posts" />
      <Button type="button" color="primary" onClick={handleClick}>
        {showAddForm ? 'Hide form' : 'Click to add post'}
      </Button>
      {showAddForm && <AddPost />}
      <Posts posts={posts} />
    </ContentBlock>
  );
};

const mapStateToProps = ({ isLoading, postsData, error, filter }) => ({
  isLoading,
  posts: filter
    ? postsData.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(filter.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(filter.toLowerCase())
          )
      )
    : postsData.posts,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch({ type: POST.FETCH_POST }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
