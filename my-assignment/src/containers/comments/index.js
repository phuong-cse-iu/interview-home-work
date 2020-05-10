import React from 'react';
import {connect} from 'react-redux';
import Comments from '../../components/comments';

const CommentsContainer = ({...props}) => {
    return (
        <Comments />
    );
}

export default connect(null, null)(CommentsContainer);