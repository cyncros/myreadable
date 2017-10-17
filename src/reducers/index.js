import{
  ADD_POST,
  EDIT_POST,
  REMOVE_POST,

} from '../actions'

const initialState={
  id=null,
  timeStamp=null,
  title=null,
  body=null,
  author=null,
  category=null,
  voteScore=null,
  deleted=null,
}

function readablePost (state=initialState,action){
  const{ id, timeStamp,title,body,author,category,voteScore,deleted }=action
  switch (action.type) {
    case ADD_POST:
      return{
        ...state,
        [id]:{
          
        }
      }
      case EDIT_POST:
      return{}
      case REMOVE_POST:
      return{
        ...state,
        [id]:{
          ...state[id],
          [title]:null,
          [body]:null,
          [author]:null,
          [category]:null,
          [voteScore]:null,
        }
      }
    default:
      return state
  }
}
