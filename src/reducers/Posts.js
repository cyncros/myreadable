import omit from "lodash.omit";
import mapkeys from "lodash.mapkeys";

import {
  FETCH_SINGLE_POST,
  FETCH_SINGLE_POST_SUCCESS,
  FETCH_SINGLE_POST_ERROR,
  EDIT_POST_DETAILS,
  EDIT_POST_DETAILS_SUCCESS,
  EDIT_POST_DETAILS_ERROR,
  ORDER_POST_BY,
  VOTE_SCORE_POST,
  VOTE_SCORE_POST_SUCCESS,
  VOTE_SCORE_POST_ERROR,
  GET_All_POST,
  GET_All_POST_SUCCESS,
  GET_All_POST_ERROR,
  GET_All_POST_BY_CAT_ID,
  GET_All_POST_BY_CAT_ID_SUCCESS,
  GET_All_POST_BY_CAT_ID_ERROR,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  DEL_POST,
  DEL_POST_SUCCESS,
  DEL_POST_ERROR
} from "../actions/Post";

const initialState = { loading: false };

function Posts(state = initialState, action) {
  switch (action.type) {
    case FETCH_SINGLE_POST:
      return {
        ...state,
        loading: true
      };
    case FETCH_SINGLE_POST_SUCCESS:
      return {
        ...state,
        postDetail: action.data,
        loading: false
      };
    case FETCH_SINGLE_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case EDIT_POST_DETAILS:
      return {
        ...state,
        loading: true
      };
    case EDIT_POST_DETAILS_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          [action.data.id]: action.data
        },
        loading: false
      };
    case EDIT_POST_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case ORDER_POST_BY:
      return {
        ...state,
        sortBy: action.sortValue
      };
    case VOTE_SCORE_POST:
      return {
        ...state,
        loading: true
      };
    case VOTE_SCORE_POST_SUCCESS:
      const newData = action.data.voteScore;
      return {
        ...state,
        items: {
          ...state.items,
          [action.data.id]: action.data
        },
        postDetail: {
          ...state.postDetail,
          voteScore: newData
        },
        loading: false
      };
    case VOTE_SCORE_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case GET_All_POST:
      return {
        ...state,
        loading: true
      };
    case GET_All_POST_SUCCESS:
      const newPosts = mapkeys(action.data, "id");
      return {
        ...state,
        items: newPosts,
        loading: false
      };
    case GET_All_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case GET_All_POST_BY_CAT_ID:
      return {
        ...state,
        loading: true
      };
    case GET_All_POST_BY_CAT_ID_SUCCESS:
      const postsById = mapkeys(action.data, "id");
      return {
        ...state,
        items: postsById,
        loading: false
      };
    case GET_All_POST_BY_CAT_ID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case CREATE_POST:
      return {
        ...state,
        loading: true
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          [action.data.id]: action.data
        },
        loading: false
      };
    case CREATE_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case DEL_POST:
      return {
        ...state,
        loading: true
      };
    case DEL_POST_SUCCESS:
      let deletePost = omit(state.items, action.data.id);
      return {
        ...state,
        items: deletePost,
        loading: false
      };
    case DEL_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
export default Posts;
