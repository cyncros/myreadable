import omit from "lodash.omit";
import mapkeys from "lodash.mapkeys";

import {
  GET_COMMENT_SCORE,
  GET_COMMENT_SCORE_SUCCESS,
  GET_COMMENT_SCORE_ERROR,
  COMMENTS_BY_POSTID,
  COMMENTS_BY_POSTID_SUCCESS,
  COMMENTS_BY_POSTID_ERROR,
  CREATE_COMMENT,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
  EDIT_COMMENT,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_ERROR,
  DEL_COMMENT,
  DEL_COMMENT_SUCCESS,
  DEL_COMMENT_ERROR,
  GET_COMMENT_BYID,
  GET_COMMENT_BYID_SUCCESS,
  GET_COMMENT_BYID_ERROR
} from "../actions/comments";

const initialState = { loading: false };

function Comments(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENT_BYID:
      return {
        ...state,
        loading: true
      };
    case GET_COMMENT_BYID_SUCCESS:
      return {
        ...state,
        items: action.data,
        loading: false
      };

    case GET_COMMENT_BYID_ERROR:
      return {
        ...state,
        ...action.error,
        loading: false,
        error: action.error
      };
    case EDIT_COMMENT:
      return {
        ...state,
        loading: true
      };
    case EDIT_COMMENT_SUCCESS:
      if (action.data === undefined) {
        return {
          ...state
        };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [action.data.id]: action.data
          },
          loading: false
        };
      }

    case EDIT_COMMENT_ERROR:
      return {
        ...state,
        ...action.error,
        loading: false,
        error: action.error
      };

    case CREATE_COMMENT:
      return {
        ...state,
        loading: true
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          [action.data.id]: action.data
        }
      };
    case CREATE_COMMENT_ERROR:
      return {
        ...state,
        ...action.error,
        error: action.error,
        loading: false
      };
    case DEL_COMMENT:
      return {
        ...state,
        loading: true
      };
    case DEL_COMMENT_SUCCESS:
      const delComment = omit(state.items, action.data.id);
      return {
        ...state,
        items: delComment,
        loading: false
      };
    case DEL_COMMENT_ERROR:
      return {
        ...state,
        ...action.error,
        loading: false,
        error: action.error
      };
    case GET_COMMENT_SCORE:
      return {
        ...state,
        loading: true
      };
    case GET_COMMENT_SCORE_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          [action.data.id]: action.data
        },
        loading: false
      };
    case GET_COMMENT_SCORE_ERROR:
      return {
        ...state,
        ...action.error,
        loading: false,
        error: action.error
      };
    case COMMENTS_BY_POSTID:
      return {
        ...state,
        loading: true
      };
    case COMMENTS_BY_POSTID_SUCCESS:
      const commentsByPostId = mapkeys(action.data, "id");
      return {
        ...state,
        items: commentsByPostId,
        loading: false
      };

    case COMMENTS_BY_POSTID_ERROR:
      return {
        ...state,
        ...action.error,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
}
export default Comments;
