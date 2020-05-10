import React from 'react';
import {connect} from 'react-redux';
import Comment from '../../components/comments';
import { addComment } from '../../actions/comment';

const CommentsContainer = ({ addComment, users, ...props}) => {
    return (
        <Comment addComment={addComment} users={users} />
    );
};

const mapStateToProps = ({user}) => ({
    users: user.users
});

const mapDispatchToProps = dispatch => ({
    addComment: (comment) => dispatch(addComment(comment)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);