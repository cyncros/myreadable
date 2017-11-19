import omit from "lodash.omit";
import mapkeys from "lodash.mapkeys";

import {
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
    // case GET_All_POST:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    case GET_All_POST_SUCCESS:
      const newPosts = mapkeys(action.data, "id");
      return {
        ...state,
        ...newPosts,
        // loading: false
      };
    case GET_All_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    // case GET_All_POST_BY_CAT_ID:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    case GET_All_POST_BY_CAT_ID_SUCCESS:
      const postsById = mapkeys(action.data, "id");
      // return {
      //   ...state,
      //   ...postsById,
      //   loading: false
      // };
      // return Object.assign({}, state, postsById ,{loading:false})
      return Object.assign({}, state, postsById )
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
        ...action.data,
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
      let deletePost = omit(state, action.data);
      return {
        ...state,
        ...deletePost,
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
