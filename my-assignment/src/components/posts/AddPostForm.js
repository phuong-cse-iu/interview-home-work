import React from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default ({form, handleChange, handleSubmit, handleTagsInput, ...props }) => (
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
