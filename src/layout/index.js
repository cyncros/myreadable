import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {getCategories, getPostsByCat,
  addPost,updatePostScore,editPostDetails,
addComment,deletePost, updateCommentScore,
editComments,delComment} from '../service'


class Main extends Component{
componentDidMount(){
// let post={
//     "id": "6",
//       "timestamp": 1509428673907,
//       "title": "REACT..............",
//       "body": "Everyone.......",
//       "author": "th",
//       "category": "react"
// }
// let commentInfo={
//   "id": "4",
//   "timestamp":1509428673907,
//   "body":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   "author": "StrangerThings",
//   "parentId":"4"
// }
  // console.log(getCategories())
  // console.log(getPostsByCat("react"))
  // console.log(addPost(post))
  // console.log(updatePostScore({postId:4,option:"downVote"}))
  // console.log(updateCommentScore({commentId:3,option:"upVote"}))
// console.log(editPostDetails({postId:4,title:"MUSHO MAS.....",body:"EXTRA..."}))
// console.log(editComments({"commentId":3,"timestamp":1509428673907,"body":"Lorem"}))
// console.log(addComment(commentInfo))
// console.log(deletePost("6"))
// console.log(delComment("4"))
}

  render(){

    return (
<div>

<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-5">
  <div className="container">
    <Link to="/" className="navbar-brand">
      <span className="fa fa-cube  fa-3x" />
    </Link>
    <button
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarNav"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">

      <ul className="navbar-nav">
        <li className="nav-item px-2">
        <Link to="/" className="nav-link">
            Dashboard
          </Link>
        </li>

        <li className="nav-item px-2">
          <a href="people.html" className="nav-link">
            <i className="fa fa-rocket" /> React
          </a>
        </li>
        <li className="nav-item px-2">
          <a href="plant.html" className="nav-link">
            <i className="fa fa-ravelry" /> Redux
          </a>
        </li>
        <li className="nav-item px-2">
          <a href="plant.html" className="nav-link">
            <i className="fa fa-university" /> Udacity
          </a>
        </li>
      </ul>

    </div>
  </div>
</nav>



<div className="jumbotron col-md-9 m-2" >
{this.props.children}
</div>
<div className="col-md-3 m-2">

</div>



<footer id="main-footer" className="bg-dark fixed-bottom text-white mt-3 p-3">
  <div className="conatiner">
    <div className="row">
      <div className="col">
        <p className="lead text-center">
          Copyright &copy; 2017 <Link to="/"><span className="fa fa-cube" /></Link>
        </p>
      </div>
    </div>
  </div>
</footer>;


</div>
    )
  }
}
export default Main;
