import {
  GET_ALL_CATS,
  GET_ALL_CATS_SUCCESS,
  GET_ALL_CATS_ERROR
} from "../actions/Categories";

const initialState = { loading: false };
function Cats(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CATS:
      return {
        ...state,
        loading: true
      };
    case GET_ALL_CATS_SUCCESS:
      return {
        ...state,
        elements :action.data.categories,
        loading: false
      };
    case GET_ALL_CATS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
}
export default Cats;
