import styled from '@emotion/styled';
import React from 'react';
import { Badge } from 'reactstrap';
import colors from '../../constants/colors';
// import comments from '../../data/comments.json';
import { formatDate } from '../../utils/date/dateTimeFormat';
import getRandomPosition from '../../utils/number';
import textEllipsis from '../../utils/text/textEllipsis';
import Comment from '../comments';

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

export default ({ post, users, comments }) => {
  const { title, owner, content = '', created_at, tags } = post || {};
  const postContent = textEllipsis(content);
  const { username = '' } = users.find((user) => user.id === owner) || {};
  const postComments = comments.filter((comment) => comment.post === post.id);
  return (
    <PostContainer>
      <PostTitle>{title}</PostTitle>
      <PostInfo>
        <PostDetails>
          <Author>Author: {username}</Author>
          <CreatedAt>Created at: {formatDate(created_at)}</CreatedAt>
        </PostDetails>
        <PostTags>
          {tags.map((tag, idx) => (
            <Badge key={idx} color={colors[getRandomPosition(colors.length)]}>
              {tag}
            </Badge>
          ))}
        </PostTags>
      </PostInfo>
      <p>{postContent}</p>
      <Comment comments={postComments} users={users} post={post} owner={owner} />
    </PostContainer>
  );
};
