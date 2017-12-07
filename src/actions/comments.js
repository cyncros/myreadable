import * as API from "../service";

//updateCommentScore(commentId,option)
export const GET_COMMENT_SCORE =
  "readable/actions.votingComment/GET_COMMENT_SCORE";
export const GET_COMMENT_SCORE_SUCCESS =
  "readable/actions.votingComment/GET_COMMENT_SCORE_SUCCESS";
export const GET_COMMENT_SCORE_ERROR =
  "readable/actions.votingComment/GET_COMMENT_SCORE_ERROR";

function acupdateCommentScore() {
  return { type: GET_COMMENT_SCORE };
}

function acupdateCommentScoreSuccess(data) {
  return { type: GET_COMMENT_SCORE_SUCCESS, data };
}

function acupdateCommentScoreError(error) {
  return { type: GET_COMMENT_SCORE_ERROR, error };
}

export const updateCommentScore = (commentId, option) => dispatch => {
  dispatch(acupdateCommentScore());
  return API.updateCommentScore(commentId, option).then(
    data => dispatch(acupdateCommentScoreSuccess(data)),
    error => {
      dispatch(acupdateCommentScoreError(error));
      throw error;
    }
  );
};

//getCommentsByPostID() (WORKSSSSS)
export const COMMENTS_BY_POSTID =
  "readable/actions.comments/COMMENTS_BY_POSTID";
export const COMMENTS_BY_POSTID_SUCCESS =
  "readable/actions.comments/COMMENTS_BY_POSTID_SUCCESS";
export const COMMENTS_BY_POSTID_ERROR =
  "readable/actions.comments/COMMENTS_BY_POSTID_ERROR";

function acgetCommentsByPostID() {
  return { type: COMMENTS_BY_POSTID };
}
function acgetCommentsByPostIDSuccess(data) {
  return { type: COMMENTS_BY_POSTID_SUCCESS, data };
}
function acgetCommentsByPostIDError(error) {
  return { type: COMMENTS_BY_POSTID_ERROR, error };
}

export const getCommentsByPostID = parentId => dispatch => {
  dispatch(acgetCommentsByPostID());
  return API.getCommentsByPostID(parentId).then(
    data => dispatch(acgetCommentsByPostIDSuccess(data)),
    error => {
      dispatch(acgetCommentsByPostIDError(error));
      throw error;
    }
  );
};

//addComment(commentInfo)
export const CREATE_COMMENT = "readable/actions.comments/CREATE_COMMENT";
export const CREATE_COMMENT_SUCCESS =
  "readable/actions.comments/CREATE_COMMENT_SUCCESS";
export const CREATE_COMMENT_ERROR =
  "readable/actions.comments/CREATE_COMMENT_ERROR";

function acaddComment() {
  return { type: CREATE_COMMENT };
}

function acaddCommentSuccess(data) {
  return { type: CREATE_COMMENT_SUCCESS, data };
}

function acaddCommentError(error) {
  return { type: CREATE_COMMENT_ERROR };
}

export const addComment = commentInfo => dispatch => {
  dispatch(acaddComment());
  return API.addComment(commentInfo).then(
    data => dispatch(acaddCommentSuccess(data)),
    error => {
      dispatch(acaddCommentError(error));
      throw error;
    }
  );
};
//getCommentDetailsById(commentId)

export const GET_COMMENT_BYID = "readable/actions.comments/GET_COMMENT_BYID";
export const GET_COMMENT_BYID_SUCCESS =
  "readable/actions.comments/GET_COMMENT_BYID_SUCCESS";
export const GET_COMMENT_BYID_ERROR =
  "readable/actions.comments/GET_COMMENT_BYID_ERROR";

function acgetCommentDetailsById() {
  return { type: GET_COMMENT_BYID };
}

function acgetCommentDetailsByIdSuccess(data) {
  return { type: GET_COMMENT_BYID_SUCCESS, data };
}

function acgetCommentDetailsByIdError(error) {
  return { type: GET_COMMENT_BYID_ERROR, error };
}

export const getCommentDetailsById = commentId => dispatch => {
  dispatch(acgetCommentDetailsById());
  return API.getCommentDetailsById(commentId).then(
    data => dispatch(acgetCommentDetailsByIdSuccess(data)),
    error => {
      dispatch(acgetCommentDetailsByIdError(error));
      throw error;
    }
  );
};

//editComments({commentId,timestamp,body})
export const EDIT_COMMENT = "readable/actions.comments/EDIT_COMMENT";
export const EDIT_COMMENT_SUCCESS =
  "readable/actions.comments/EDIT_COMMENT_SUCCESS";
export const EDIT_COMMENT_ERROR =
  "readable/actions.comments/EDIT_COMMENT_ERROR";

function aceditComments() {
  return { type: EDIT_COMMENT };
}
function aceditCommentsSuccess(data) {
  return { type: EDIT_COMMENT_SUCCESS };
}
function aceditCommentsError(error) {
  return { type: EDIT_COMMENT_ERROR };
}

export const editComments = ({ id, timestamp, body }) => dispatch => {
  console.log({ id, timestamp, body }, "datafromaction");
  dispatch(aceditComments());
  return API.editComments({ id, timestamp, body }).then(
    data => {
      dispatch(aceditCommentsSuccess(data));
      console.log(data, "dataactioncreator");
    },
    error => {
      dispatch(aceditCommentsError(error));
      throw error;
    }
  );
};

//delComment(commentId)

export const DEL_COMMENT = "readable/actions.comments/DEL_COMMENT";
export const DEL_COMMENT_SUCCESS =
  "readable/actions.comments/DEL_COMMENT_SUCCESS";
export const DEL_COMMENT_ERROR = "readable/actions.comments/DEL_COMMENT_ERROR";

function acdelComment(commentId) {
  return { type: DEL_COMMENT };
}

function acdelCommentSuccess(data) {
  return { type: DEL_COMMENT_SUCCESS, data };
}

function acdelCommentError(error) {
  return { type: DEL_COMMENT_ERROR, error };
}

export const delComment = commentId => dispatch => {
  dispatch(acdelComment());
  return API.delComment(commentId).then(
    data => dispatch(acdelCommentSuccess(data)),
    error => {
      dispatch(acdelCommentError(error));
      throw error;
    }
  );
};
