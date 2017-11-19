import * as API from '../service'

//addComment(commentInfo)
export const CREATE_COMMENT ="readable/actions.comments/CREATE_COMMENT"
export const CREATE_COMMENT_SUCCESS ="readable/actions.comments/CREATE_COMMENT_SUCCESS"
export const CREATE_COMMENT_ERROR ="readable/actions.comments/CREATE_COMMENT_ERROR"

function acaddComment(){
  return {type:CREATE_COMMENT}
}

function acaddCommentSuccess(data){
  return {type:CREATE_COMMENT_SUCCESS,data}
}

function acaddCommentError(error){
  return {type:CREATE_COMMENT_ERROR}
}

export const addComment=(commentInfo)=>
  dispatch=>{
    dispatch(acaddComment())
    return API.addComment(commentInfo)
    .then(
      data=>dispatch(acaddCommentSuccess(data)),
      error=>{dispatch(acaddCommentError(error))
              throw error
            }
    )
  }
//getCommentDetailsById(commentId)

export const GET_COMMENT_BYID='readable/actions.comments/GET_COMMENT_BYID'
export const GET_COMMENT_BYID_SUCCESS='readable/actions.comments/GET_COMMENT_BYID_SUCCESS'
export const GET_COMMENT_BYID_ERROR='readable/actions.comments/GET_COMMENT_BYID_ERROR'

function acgetCommentDetailsById() {
  return {type:GET_COMMENT_BYID}

}

function acgetCommentDetailsByIdSuccess(data) {
  return {type:GET_COMMENT_BYID_SUCCESS,data}

}

function acgetCommentDetailsByIdError(error) {
  return {type:GET_COMMENT_BYID_ERROR,error}
}

export const getCommentDetailsById=(commentId)=>
dispatch=>{
  dispatch(acgetCommentDetailsById())
  return API.getCommentDetailsById(commentId)
  .then(
    data=> dispatch(acgetCommentDetailsByIdSuccess(data)),
    error=>{dispatch(acgetCommentDetailsByIdError(error))
            throw error
          }
  )
}

//editComments({commentId,timestamp,body})
export const EDIT_COMMENT='readable/actions.comments/EDIT_COMMENT'
export const EDIT_COMMENT_SUCCESS='readable/actions.comments/EDIT_COMMENT_SUCCESS'
export const EDIT_COMMENT_ERROR='readable/actions.comments/EDIT_COMMENT_ERROR'

function aceditComments(){
  return {type:EDIT_COMMENT}
}
function aceditCommentsSuccess(data){
  return {type:EDIT_COMMENT_SUCCESS}
}
function aceditCommentsError(error) {
return {type:EDIT_COMMENT_ERROR}
}

export const editComments=({commentId,timestamp,body})=>
dispatch=>{
  dispatch(aceditComments())
  return API.editComments({commentId,timestamp,body})
  .then(
    data=>dispatch(aceditCommentsSuccess(data)),
    error=>{dispatch(aceditCommentsError(error))
            throw error
          }
  )
}

//delComment(commentId)

export const DEL_COMMENT='readable/actions.comments/DEL_COMMENT'
export const DEL_COMMENT_SUCCESS='readable/actions.comments/DEL_COMMENT_SUCCESS'
export const DEL_COMMENT_ERROR='readable/actions.comments/DEL_COMMENT_ERROR'

function acdelComment(commentId) {
  return{type:DEL_COMMENT}
}

function acdelCommentSuccess(data) {
  return {type:DEL_COMMENT_SUCCESS,data}
}

function acdelCommentError(error) {
  return{type:DEL_COMMENT_ERROR,error}
}

export const delComment=(commentId)=>
dispatch=>{
  dispatch(acdelComment())
  return API.delComment(commentId)
  .then(
    data=> dispatch(acdelCommentSuccess(data)),
    error=>{dispatch(acdelCommentError(error))
    throw error
  }
  )
}
