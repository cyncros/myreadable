import * as API from "../service/";

//sORT vALUE (WORKS)
export const ORDER_POST_BY = "readable/actions.Post/ORDER_POST_BY";

export const sortPostsBy = sortValue => {

  return {
    type: ORDER_POST_BY,
    sortValue
  };
};

//    PARAMS://      option - String: Either "upVote" or "downVote"

//updatePostScore({postId,option})   (WORKS)

export const VOTE_SCORE_POST = "readable/actions.Post/VOTE_SCORE_POST";
export const VOTE_SCORE_POST_SUCCESS =
  "readable/actions.Post/VOTE_SCORE_POST_SUCCESS";
export const VOTE_SCORE_POST_ERROR =
  "readable/actions.Post/VOTE_SCORE_POST_ERROR";

function acupdatePostScore() {
  return { type: VOTE_SCORE_POST };
}
function acupdatePostScoreSuccess(data) {
  return { type: VOTE_SCORE_POST_SUCCESS, data };
}

function acupdatePostScoreError(error) {
  return { type: VOTE_SCORE_POST_ERROR, error };
}

export const updatePostScore = (postId, option) => dispatch => {
  dispatch(acupdatePostScore());
  return API.updatePostScore(postId, option).then(
    data => dispatch(acupdatePostScoreSuccess(data)),
    error => {
      dispatch(acupdatePostScoreError(error));
      throw error;
    }
  );
};

//getPostDetailById(postId)
export const FETCH_SINGLE_POST = "readable/actions.Post/FETCH_SINGLE_POST";
export const FETCH_SINGLE_POST_SUCCESS =
  "readable/actions.Post/FETCH_SINGLE_POST_SUCCESS";
export const FETCH_SINGLE_POST_ERROR =
  "readable/actions.Post/FETCH_SINGLE_POST_ERROR";

function acgetPostDetailById() {
  return { type: FETCH_SINGLE_POST };
}
function acgetPostDetailByIdSuccess(data) {
  return { type: FETCH_SINGLE_POST_SUCCESS, data };
}

function acgetPostDetailByIdError(error) {
  return { type: FETCH_SINGLE_POST_ERROR, error };
}

export const getPostDetailById = postId => dispatch => {
  dispatch(acgetPostDetailById());

  return API.getPostDetailById(postId).then(
    data => dispatch(acgetPostDetailByIdSuccess(data)),
    error => {
      dispatch(acgetPostDetailByIdError(error));
      throw error;
    }
  );
};

//getallPost() (WORKS)
export const GET_All_POST = "readable/actions.Post/GET_All_POST";
export const GET_All_POST_SUCCESS =
  "readable/actions.Post/GET_All_POST_SUCCESS";
export const GET_All_POST_ERROR = "readable/actions.Post/GET_All_POST_ERROR";

function acGetPosts() {
  return { type: GET_All_POST };
}

function acGetPostsSuccess(data) {
  return { type: GET_All_POST_SUCCESS, data };
}

function acGetPostsError(error) {
  return { type: GET_All_POST_ERROR, error };
}

export const getAllPosts = () => dispatch => {
  dispatch(acGetPosts());
  return API.getAllPosts().then(
    data => dispatch(acGetPostsSuccess(data)),
    error => {
      dispatch(acGetPostsError(error));
      throw error;
    }
  );
};
//  PUT /posts/:id
//    USAGE:
//      Edit the details of an existing post
//    PARAMS:
//      title - String
//      body - String
// editPostDetails({postId,title,body}) (WORKS)
export const EDIT_POST_DETAILS = "readable/actions.Post/EDIT_POST_DETAILS";
export const EDIT_POST_DETAILS_SUCCESS =
  "readable/actions.Post/EDIT_POST_DETAILS_SUCCESS";
export const EDIT_POST_DETAILS_ERROR =
  "readable/actions.Post/EDIT_POST_DETAILS_ERROR";
function aceditPostDetails() {
  return { type: EDIT_POST_DETAILS };
}
function aceditPostDetailsSuccess(data) {
  return { type: EDIT_POST_DETAILS_SUCCESS, data };
}
function aceditPostDetailsError(error) {
  return { type: EDIT_POST_DETAILS_ERROR, error };
}

export const editPostDetails = ({ postId, title, body }) => dispatch => {
  dispatch(aceditPostDetails());

  return API.editPostDetails({ postId,title, body }).then(
    data => dispatch(aceditPostDetailsSuccess(data)),
    error => {
      dispatch(aceditPostDetailsError(error));
      throw error;
    }
  );
};
//getallPostByCategoryID()   (WORKS)
export const GET_All_POST_BY_CAT_ID =
  "readable/actions.Post/GET_All_POST_BY_CAT_ID";
export const GET_All_POST_BY_CAT_ID_SUCCESS =
  "readable/actions.Post/GET_All_POST_BY_CAT_ID_SUCCESS";
export const GET_All_POST_BY_CAT_ID_ERROR =
  "readable/actions.Post/GET_All_POST_BY_CAT_ID_ERROR";

function acGetPostsByCatID() {
  return { type: GET_All_POST_BY_CAT_ID };
}

function acGetPostsByCatIDSuccess(data) {
  return { type: GET_All_POST_BY_CAT_ID_SUCCESS, data };
}

function acGetPostsByCatIDError(error) {
  return { type: GET_All_POST_BY_CAT_ID_ERROR, error };
}

export const getPostsByCat = category => dispatch => {
  dispatch(acGetPostsByCatID());
  return API.getPostsByCat(category).then(
    data => dispatch(acGetPostsByCatIDSuccess(data)),
    error => {
      dispatch(acGetPostsByCatIDError(error));
      throw error;
    }
  );
};

//addPost(post) (WORKS)
//post its a obj that include the id,timestamp, title, author, body and category

export const CREATE_POST = "readable/actions.Post/CREATE_POST";
export const CREATE_POST_SUCCESS = "readable/actions.Post/CREATE_POST_SUCCESS";
export const CREATE_POST_ERROR = "readable/actions.Post/CREATE_POST_ERROR";

function acAddPost() {
  return { type: CREATE_POST };
}
function acAddPostSuccess(data) {
  return { type: CREATE_POST_SUCCESS, data };
}
function acAddPostError(error) {
  return { type: CREATE_POST_ERROR, error };
}

export const addPost = post => dispatch => {
  dispatch(acAddPost());
  return API.addPost(post).then(
    data => dispatch(acAddPostSuccess(data)),
    error => {
      dispatch(acAddPostError(error));
      throw error;
    }
  );
};
//deletePost (WORKS)
export const DEL_POST = "readable/actions.Post/DEL_POST";
export const DEL_POST_SUCCESS = "readable/actions.Post/DEL_POST_SUCCESS";
export const DEL_POST_ERROR = "readable/actions.Post/DEL_POST_ERROR";

function acdeletePost() {
  return { type: DEL_POST };
}

function acdeletePostSuccess(data) {
  return { type: DEL_POST_SUCCESS, data };
}

function acdeletePostError(error) {
  return { type: DEL_POST_ERROR, error };
}

export const deletePost = postId => dispatch => {
  dispatch(acdeletePost());
  return API.deletePost(postId).then(
    data => dispatch(acdeletePostSuccess(data)),
    error => {
      dispatch(acdeletePostError(error));
      throw error;
    }
  );
};

//
