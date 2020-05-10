import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setFormError } from '../../actions/form';
import { addPost } from '../../actions/post';
import AddPostForm from '../../components/posts/AddPostForm';
import idGenerator from '../../utils/id-generator';

const isInvalidForm = (form) =>
  Object.values(form).some((value) => value === '');

const AddPost = ({user, addPost, setFormError, ...props}) => {
  const [form, setForm] = useState({
    title: '',
    content: '',
    tags: [],
    id: idGenerator(),
    owner: user && user.currentUser && user.currentUser.googleId
  });

  const handleTagsInput = (tags) => {
    setForm((prevState) => ({ ...prevState, tags: tags }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isInvalidForm(form)) {
      setFormError({message: 'Form fields missing', color: 'danger'});
    } else {
      addPost(form);
      setFormError({message: 'Add post successfully', color: 'success'});
    }
    setForm({ title: '', content: '', tags: [] });
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <AddPostForm
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleTagsInput={handleTagsInput}
    />
  );
};

const mapStateToProps = ({user}) => ({
  user
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => dispatch(addPost(post)),
  setFormError: ({message, color}) => dispatch(setFormError(message, color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
