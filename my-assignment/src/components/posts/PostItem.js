import styled from '@emotion/styled';
import React from 'react';
import { Badge } from 'reactstrap';
import users from '../../data/users.json';
import { formatDate } from '../../utils/date/dateTimeFormat';
import textEllipsis from '../../utils/text/textEllipsis';

const PostTitle = styled.h4`
  text-align: center;
`;

const PostContainer = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  margin-top: 4px;
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const PostDetails = styled.div`
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
`;

const PostTags = styled.div`
  align-items: baseline;
  display: flex;
  flex-basis: 50%;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const Author = styled.div``;

const CreatedAt = styled.div``;

const findOwner = (id) => users.find((user) => user.id === id);

export default ({ post }) => {
  const { title, owner, content = '', created_at, tags } = post || {};
  const postContent = textEllipsis(content);
  const { username = '' } = findOwner(owner) || {};
  return (
    <PostContainer>
      <PostTitle>{title}</PostTitle>
      <PostInfo>
        <PostDetails>
          <Author>Author: {username}</Author>
          <CreatedAt>Created at: {formatDate(created_at)}</CreatedAt>
        </PostDetails>
        <PostTags>
          <Badge color="primary">Primary</Badge>
          <Badge color="secondary">Secondary</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="danger">Danger</Badge>
          <Badge color="warning">Warning</Badge>
          <Badge color="info">Info</Badge>
          <Badge color="light">Light</Badge>
          <Badge color="dark">Dark</Badge>
        </PostTags>
      </PostInfo>
      <p>{postContent}</p>
    </PostContainer>
  );
};
