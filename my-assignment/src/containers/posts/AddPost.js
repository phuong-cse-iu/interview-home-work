import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import AddPostForm from '../../components/posts/AddPostForm';
import idGenerator from '../../utils/id-generator';

const AddPost = (props) => {
  const [form, setForm] = useState({
    title: '',
    content: '',
    tags: [],
    id: idGenerator(),
  });

  const handleTagsInput = (tags) => {
    setForm((prevState) => ({ ...prevState, tags: tags }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addPost(form);
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

const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => dispatch(addPost(post)),
});

export default connect(null, mapDispatchToProps)(AddPost);
