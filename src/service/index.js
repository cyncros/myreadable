var myHeaders = new Headers();
// Headers info that include the KEY to access API info
myHeaders.append("Authorization", "whatever-you-want")
myHeaders.append('Content-Type', 'application/json')

// Diferent request method with headers info
var getRequest = { method: 'GET', headers: myHeaders}
var postRequest ={ method: 'POST', headers: myHeaders}
var putRequest ={method:'PUT', headers:myHeaders}
var delRequest ={method:'DELETE', headers:myHeaders}

const serverURL="http://localhost:3001"

// handleResponse for any data and errors
function handleResponse(response) {
  return response.json()
    .then(json => {
      if (response.ok) {
        return json
      } else {
        let error = Object.assign({}, json, {
          status: response.status,
          statusText: response.statusText
        })
        return Promise.reject(error)
      }
    })
}

// GET /categories
//   USAGE:
//     Get all of the categories available for the app. List is found in categories.js.
//     Feel free to extend this list as you desire.
export function getCategories(){
  return fetch(`${serverURL}/categories`,getRequest)
    .then(handleResponse)
    .then(data => data)
    .catch(error=> error)
    }

// GET /posts
//       USAGE:
//       Get all of the posts. Useful for the main page
//       when no category is selected.
export function getAllPosts() {
  return fetch(`${serverURL}/posts`,getRequest)
    .then(handleResponse)
    .then(data=>data)
    .catch(error=>error)
}

// GET /:category/posts
//       USAGE:
//         Get all of the posts for a particular category
export function getPostsByCat(category){
  return fetch(`${serverURL}/${category}/posts`, getRequest)
    .then(handleResponse)
    .then(data=>data)
    .catch(error=> error)
}

// GET /posts/:id
//      USAGE:
//        Get the details of a single post
export function getPostDetailById(postId) {
  return fetch(`${serverURL}/posts/${postId}`, getRequest)
    .then(handleResponse)
    .then(data => data)
    .catch(error => error)
}


// GET /posts/:id/comments
//   USAGE:
//     Get all the comments for a single post
export function getCommentsByPostID(postId){
  return fetch(`${serverURL}/posts/${postId}/comments`,getRequest)
    .then(handleResponse)
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
}

// GET /comments/:id
//      USAGE:
//        Get the details for a single comment
export function getCommentDetailsById(commentId){
  return fetch(`${serverURL}/comments/${commentId}`,getRequest)
    .then(handleResponse)
    .then(data=>data)
    .catch(error=>error)
}

// POST /posts
//       USAGE:
//         Add a new post
//
//       PARAMS:
//         id - UUID should be fine, but any unique id will work
//         timestamp - timestamp in whatever format you like, you can use Date.now() if you like
//         title - String
//         body - String
//         author - String
//         category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.

export function addPost(post){
  return fetch(`${serverURL}/posts`,
        {...postRequest,
        ...{body: JSON.stringify(post)}})
        .then(handleResponse)
        .then(data=>data)
        .catch(error=>error)
      }

//  POST /posts/:id
//    USAGE:
//      Used for voting on a post
//    PARAMS:
//      option - String: Either "upVote" or "downVote"

export function updatePostScore({postId,option}){
  return fetch(`${serverURL}/posts/${postId}`,
      {...postRequest,
       ...{body:JSON.stringify({option})}})
       .then(handleResponse)
       .then(data=>console.log(data))
       .catch(error=>console.log(error))
}

        //  PUT /posts/:id
        //    USAGE:
        //      Edit the details of an existing post
        //    PARAMS:
        //      title - String
        //      body - String
export function editPostDetails({postId,title,body}){
return fetch(`${serverURL}/posts/${postId}`,
      {...putRequest,
      ...{body:JSON.stringify({title,body})}})
      .then(handleResponse)
      .then(data=>console.log(data))
      .catch(error=>console.log(error))
}
 //
//  DELETE /posts/:id
//    USAGE:
//      Sets the deleted flag for a post to 'true'.
//      Sets the parentDeleted flag for all child comments to 'true'.
export function deletePost(postId){
return fetch(`${serverURL}/posts/${postId}`,
      {...delRequest,
      ...{body:JSON.stringify(postId)}})
      .then(handleResponse)
      .then(data=>data)
      .catch(error=>error)
}

 //
//    POST /comments
//    USAGE:
//      Add a comment to a post
 //
//    PARAMS:
//      id: Any unique ID. As with posts, UUID is probably the best here.
//      timestamp: timestamp. Get this however you want.
//      body: String
//      author: String
//      parentId: Should match a post id in the database.
export function addComment(commentInfo){
  return fetch(`${serverURL}/comments`,
      {...postRequest,
      ...{body:JSON.stringify(commentInfo)}})
      .then(handleResponse)
      .then(data=>data)
      .catch(error=>error)
}
 //
//  POST /comments/:id
//    USAGE:
//      Used for voting on a comment.
 //
export function updateCommentScore({commentId,option}){
  return fetch(`${serverURL}/comments/${commentId}`,
        {...postRequest,
        ...{body:JSON.stringify({option})}})
        .then(handleResponse)
        .then(data=>data)
        .catch(error=>error)
}
//  PUT /comments/:id
//    USAGE:
//      Edit the details of an existing comment
 //
//    PARAMS:
//      timestamp: timestamp. Get this however you want.
//      body: String
 //
export function editComments({commentId,timestamp,body}){
  return fetch(`${serverURL}/comments/${commentId}`,
        {...putRequest,
        ...{body:JSON.stringify({timestamp,body})}})
        .then(handleResponse)
        .then(data=>data)
        .catch(error=>error)

}
        //  DELETE /comments/:id
        //    USAGE:
        //      Sets a comment's deleted flag to 'true'
export function delComment(commentId){
  return fetch(`${serverURL}/comments/${commentId}`,
        {...delRequest,
        ...{body:JSON.stringify(commentId)}})
        .then(handleResponse)
        .then(data=>data)
        .catch(error=>error)
}
