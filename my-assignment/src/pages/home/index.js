import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import Alert from '../../containers/alert';
import ContentBlock from '../../components/content-block';
import Posts from '../../components/posts';
import { POST, USER, COMMENT } from '../../constants';
import AddPost from '../../containers/posts/AddPost';
import SearchBar from '../../containers/search-bar';

const Home = ({ posts, fetchPosts, fetchUsers, fetchComments, isLoading, error, user, comments }) => {
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchPosts();
    fetchUsers();
    fetchComments();
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
      <Posts posts={posts} users={user.users} comments={comments} />
    </ContentBlock>
  );
};

const mapStateToProps = ({ isLoading, postsData, error, filter, user, comment }) => ({
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
  user,
  comments: comment.comments
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch({ type: POST.FETCH_POST }),
  fetchUsers: () => dispatch({type: USER.FETCH_USERS}),
  fetchComments: () => dispatch({type: COMMENT.FETCH_COMMENTS}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
