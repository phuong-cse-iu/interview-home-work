import React, { useState } from 'react';
import 'react-tagsinput/react-tagsinput.css';
import { Button, Form, FormGroup, Input, Label, InputT } from 'reactstrap';

export default ({ post, owner, ...props }) => {
  const [form, setForm] = useState({ content: '', owner: owner, post: post });

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.addComment(form);
  };

  const handleChange = (e) => {
    setForm((prevState) => ({ ...prevState, content: e.target.value }));
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
