import {
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
} from '../actions/comments'

const initialState = { loading: false }

function commentReducer(state: initialState, action) {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        loading: true
      }
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        ...action.data,
        loading: false
      }
    case CREATE_COMMENT_ERROR:
      return {
        ...state,
        ...action.error,
        loading: false,
        error: action.error
      }

    case EDIT_COMMENT:
      return {
        ...state,
        loading: true
      }
    case EDIT_COMMENT_SUCCESS:
      return {
        ...state,
        ...action.data,
        loading: false
      }
    case EDIT_COMMENT_ERROR:
      return {
        ...state,
        ...action.error,
        loading: false,
        error: action.error
      }

    case DEL_COMMENT:
      return {
        ...state,
        loading: true
      }
    case DEL_COMMENT_SUCCESS:
      return {
        ...state,
        ...action.data,
        loading: false
      }
    case DEL_COMMENT_ERROR:
      return {
        ...state,
        ...action.error,
        loading: false,
        error: action.error
      }
    case GET_COMMENT_BYID:
      return {
        ...state,
        loading: true
      }
    case GET_COMMENT_BYID_SUCCESS:
      return {
        ...state,
        ...action.data,
        loading: false
      }
    case GET_COMMENT_BYID_ERROR:
      return {
        ...state,
        ...action.error,
        loading: false,
        error: action.error
      }

    default:
      return state
  }
}
export default commentReducer
