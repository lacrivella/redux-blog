export const CREATE_COMMENT = 'CREATE_COMMENT';
export const addComment = (postID, comment) => ({
  type: CREATE_COMMENT,
  payload: { postID, comment }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (postID, commentID) => ({
  type: DELETE_COMMENT,
  payload: { postID, commentID }
});
