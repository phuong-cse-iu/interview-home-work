import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {connect} from 'react-redux';
import {addComment} from '../../actions/comment';

const AddCommentFormContainers = ({addComment, post, user, setIsReplyFormOpen, ...props }) => {
  const [form, setForm] = useState({ content: '', owner: user && user.googleId, post: post.id });

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.addComment(form);
    addComment(form);
    setForm({ content: '', owner: user && user.googleId, post: post.id });
    setIsReplyFormOpen(false);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          type="textarea"
          name="content"
          id="content"
          placeholder="Content"
          onChange={handleChange}
        />
      </FormGroup>
      <Button color="primary">Reply</Button>
    </Form>
  );
};

const mapStateToProps = ({user}) => ({
  user: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(addComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentFormContainers);
