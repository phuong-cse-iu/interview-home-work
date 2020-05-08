import React from "react";
import styled from "@emotion/styled";
import { Badge } from "reactstrap";
import { formatDate } from "../../utils/dateTimeFormat";

const PostTitle = styled.h4`
  text-align: center;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  display: flex;
  flex-wrap: wrap;
  flex-basis: 50%;
  justify-content: flex-end;
  align-items: baseline;
`;

const Author = styled.div`

`;

const CreatedAt = styled.div``;

export default ({post}) => {
  const {title, owner, content, created_at, tags} = post;
  return (
    <PostContainer>
      <PostTitle>{title}</PostTitle>
      <PostInfo>
        <PostDetails>
          <Author>Author: Adam Levine</Author>
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
      <p> {content}</p>
    </PostContainer>
  );
};

