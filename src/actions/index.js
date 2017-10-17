export const ADD_POST='ADD_POST'
export const EDIT_POST='EDIT_POST'
export const REMOVE_POST='REMOVE_POST'
export const ADD_COMMENT='ADD_COMMENT'
export const EDIT_COMMENT='EDIT_COMMENT'
export const DELETE_COMMENT='DELETE_COMMENT'
export const GET_POST='GET_POST'

export function getPost({ id,timeStamp,title,body,author,category,voteScore,deleted}) {
  return{
    type:GET_POST,
  id,
  timeStamp,
  title,
  body,
  author,
  category,
  voteScore,
  deleted,
  }
}


export function addPost({timeStamp,title,body,author,category}){
  return{
    type:ADD_POST,
    id,
    timeStamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted,
  }
}

export function editPost({id,tite,body,category,voteScore}){
  return{
    type:EDIT_POST,
    id,
    title,
    body,
    category,
    voteScore,
    deleted,
  }
}

export function removePost({id}){
  return{
    type:REMOVE_POST,
    id,
  }
}


export function addComment({parentId,timeStamp,body,author,voteScore,parentIdDeleted}){
  return {
    type:ADD_COMMENT,
    id,
    parentId,
    timeStamp,
    body,
    author,
  voteScore,
  parentIdDeleted,
  }
}
export function editComment({id,body,voteScore}){
  return{
    type:EDIT_COMMENT,
    id,
    body,
    voteScore,
  }
}
