import { COMMENT } from "../constants";

const addComment = comment => ({
    type: COMMENT.ADD_COMMENT,
    comment
});

const setComments = comments => ({
    type: COMMENT.FETCH_COMMENT_SUCCESS,
    comments
})

export {
    addComment,
    setComments
}