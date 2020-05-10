import React, { useState } from 'react';
import { Button, Collapse } from 'reactstrap';
import users from '../../data/users.json';
import Comment from './Comment';
import styled from '@emotion/styled';

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ({ comments, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button
        size="sm"
        color="primary"
        outline
        onClick={toggle}
        style={{ marginBottom: '1rem' }}
        disabled={comments.length === 0}
      >
        {comments.length} replies
      </Button>
      <CommentsContainer>
        <Collapse isOpen={isOpen}>
          {comments.map(({ content, owner, id, created_at }, idx) => (
            <Comment
              key={id}
              content={content}
              commentDate={created_at}
              owner={users.find((user) => user.id === owner)}
            />
          ))}
          {/* <Button
            color="primary"
            // onClick={toggle}
            style={{ marginBottom: '1rem' }}
          >
            Response to post
          </Button> */}
        </Collapse>
      </CommentsContainer>
    </div>
  );
};
