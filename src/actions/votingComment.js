import * as API from '../service'

//updateCommentScore({commentId,option})
export const GET_COMMENT_SCORE='readable/actions.votingComment/GET_COMMENT_SCORE'
export const GET_COMMENT_SCORE_SUCCESS='readable/actions.votingComment/GET_COMMENT_SCORE_SUCCESS'
export const GET_COMMENT_SCORE_ERROR='readable/actions.votingComment/GET_COMMENT_SCORE_ERROR'

function acupdateCommentScore() {
  return{type:GET_COMMENT_SCORE}
}

function acupdateCommentScoreSuccess(data) {
  return {type:GET_COMMENT_SCORE_SUCCESS, data}
}

function acupdateCommentScoreError(error) {
  return{type:GET_COMMENT_SCORE_ERROR,error}
}

export const updateCommentScore=({commentId,option})=>
dispatch=>{
  dispatch(acupdateCommentScore())
  return API.updateCommentScore({commentId,option})
  .then(
    data=>dispatch(acupdateCommentScoreSuccess(data)),
    error=>{dispatch(acupdateCommentScoreError(error))
            throw error
          }
  )
}
