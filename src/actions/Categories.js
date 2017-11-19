import * as API from '../service'

export const GET_ALL_CATS='readable/actions.Categories/GET_ALL_CATS'
export const GET_ALL_CATS_SUCCESS='readable/actions.Categories/GET_ALL_CATS_SUCCESS'
export const GET_ALL_CATS_ERROR='readable/actions.Categories/GET_ALL_CATS_ERROR'

function acgetCats(){
  return{type:GET_ALL_CATS}
}

function acgetCatsSuccess(data){
  return {type:GET_ALL_CATS_SUCCESS,data}
}

function acgetCatsError(error){
  return {type:GET_ALL_CATS_ERROR,error}
}

export const getCategories=()=>
dispatch=>{
  dispatch(acgetCats())
  return API.getCategories()
  .then(
    data=>dispatch(acgetCatsSuccess(data)),
    error=>{dispatch(acgetCatsError(error))
            throw error
    }
  )
}
