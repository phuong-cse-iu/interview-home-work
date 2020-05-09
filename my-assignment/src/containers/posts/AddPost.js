import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const AddPost = (props) => {
  const [form, setForm] = useState({title: '', content: '', tags: [], id: '2'})

  const handleTagsInput = (tags) => {
      setForm(prevState => ({...prevState, tags: tags}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('props', {...props});
    props.addPost(form);                     
  }

  const handleChange = e => {
      const {target} = e;
      const {name, value} = target;
      setForm(prevState => ({...prevState, [name]: value}));
      
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input type="text" name="title" id="title" placeholder="Title" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="content">Content</Label>
        <Input type="text" name="content" id="content" placeholder="Content" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <TagsInput value={form.tags} onChange={handleTagsInput} />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => dispatch(addPost(post)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
