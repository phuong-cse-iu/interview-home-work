import styled from '@emotion/styled';
import React from 'react';
import { Badge } from 'reactstrap';
import colors from '../../constants/colors';
import users from '../../data/users.json';
import { formatDate } from '../../utils/date/dateTimeFormat';
import getRandomPosition from '../../utils/number';
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
          {tags.map(tag => <Badge color={colors[getRandomPosition(colors.length)]}>{tag}</Badge>)}
        </PostTags>
      </PostInfo>
      <p>{postContent}</p>
    </PostContainer>
  );
};
