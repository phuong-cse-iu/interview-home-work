import React, { useState } from 'react';
import { Button, Collapse } from 'reactstrap';
import Comment from './Comment';
import styled from '@emotion/styled';
import AddCommentForm from '../../containers/comments/AddCommentForm';

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ToggleCommentsContainer = styled.div`
  flex-basis: 95%;
`;

const ReplyContainer = styled.div`
  flex-basis: 8%;
`;

const ReplyFormSection = styled.div`
  padding: 12px 0;
`;

export default ({ comments, users = [], post, owner, ...props }) => {
  const [isCommentSectionOpen, setIsCommentSectionOpen] = useState(false);
  const [isReplyFormOpen, setIsReplyFormOpen] = useState(false);

  const toggleCommentsSection = () =>
    setIsCommentSectionOpen(!isCommentSectionOpen);
  const toggleReplyFormOpen = () =>
    setIsReplyFormOpen(!isCommentSectionOpen && !isReplyFormOpen);

  return (
    <div>
      <ButtonsContainer>
        <ToggleCommentsContainer>
          <Button
            size="sm"
            color="primary"
            outline
            onClick={toggleCommentsSection}
            style={{ marginBottom: '1rem' }}
            disabled={comments.length === 0}
          >
            {comments.length} replies
          </Button>
        </ToggleCommentsContainer>
        <ReplyContainer>
          <Button
            size="sm"
            color="primary"
            outline
            onClick={toggleReplyFormOpen}
            style={{ marginBottom: '1rem' }}
          >
            Reply
          </Button>
        </ReplyContainer>
      </ButtonsContainer>
      <CommentsContainer>
        <Collapse isOpen={isCommentSectionOpen}>
          {comments.map(({ content, owner, id, created_at }, idx) => (
            <Comment
              key={id}
              content={content}
              commentDate={created_at}
              owner={users.find((user) => user.id === owner)}
            />
          ))}
        </Collapse>
      </CommentsContainer>
      <ReplyFormSection>
        <Collapse isOpen={isReplyFormOpen}>
          <AddCommentForm post={post} owner={owner} setIsReplyFormOpen={setIsReplyFormOpen} /> 
        </Collapse>
      </ReplyFormSection>
    </div>
  );
};
