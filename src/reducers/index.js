import { combineReducers } from 'redux'
import posts from './Posts'
import categories from './Categories'
// import comments from './comments'

export default combineReducers({
  posts: posts,
  categories: categories,

})
