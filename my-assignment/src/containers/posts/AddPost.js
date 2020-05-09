import React, { useState } from 'react';
import { connect } from 'react-redux';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { addPost } from '../../actions/post';

const AddPost = (props) => {
  const [form, setForm] = useState({
    title: '',
    content: '',
    tags: [],
    id: '2',
  });

  const handleTagsInput = (tags) => {
    setForm((prevState) => ({ ...prevState, tags: tags }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addPost(form);
    setForm({ title: '', content: '', tags: [], id: '2' });
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="content">Content</Label>
        <Input
          type="text"
          name="content"
          id="content"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <TagsInput value={form.tags} onChange={handleTagsInput} />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => dispatch(addPost(post)),
});

export default connect(null, mapDispatchToProps)(AddPost);
