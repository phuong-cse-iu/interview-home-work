import styled from '@emotion/styled';
import React from 'react';
import {
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from 'reactstrap';
import ContentBlock from '../content-block';
import { fromNow } from '../../utils/date/dateTimeFormat';

const Avatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const Author = styled.span`
  padding: 0 12px;
`;

const CreatedAt = styled.span`
  padding: 0 12px;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentInfos = styled.div`
  display: flex;
  flex-direction: row;
`;

const CommentContent = styled.div`
  padding: 0 12px;
`;

export default ({ content, owner, commentDate, ...props }) => {
  return (
    <ContentBlock>
      <Container>
        <Row>
          <Col xs={1}>
            <Avatar src="https://i.picsum.photos/id/665/200/200.jpg" />
          </Col>
          <Col xs={11}>
            <CommentContainer>
              <CommentInfos>
                <Author>{owner.username}</Author>
                <CreatedAt>{fromNow(commentDate)}</CreatedAt>
              </CommentInfos>
              <CommentContent>{content}</CommentContent>
            </CommentContainer>
          </Col>
        </Row>
      </Container>
    </ContentBlock>
  );
};
