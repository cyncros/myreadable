import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getPostsByCat } from "../actions/Post";
import { getCategories } from "../actions/Categories";
import { objToArray } from "../utils";
import CatMenu from "../components/CatMenu";

class Layout extends Component {
  componentDidMount() {
    // let commentInfo={
    //   "id": "4",
    //   "timestamp":1509428673907,
    //   "body":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //   "author": "StrangerThings",
    //   "parentId":"4"
    // }
    // console.log(getPostsByCat("react"))
    // console.log(addPost(post))
    // console.log(updatePostScore({postId:4,option:"downVote"}))
    // console.log(updateCommentScore({commentId:3,option:"upVote"}))
    // console.log(editPostDetails({postId:4,title:"MUSHO MAS.....",body:"EXTRA..."}))
    // console.log(editComments({"commentId":3,"timestamp":1509428673907,"body":"Lorem"}))
    // console.log(addComment(commentInfo))
    // console.log(deletePost("6"))
    // console.log(delComment("4"))
    this.props.dispatch(getCategories());
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps,'proposss');
  //   console.log(this.props,'mainProps');
  // }

  getPostByCat = category => {
    this.props.dispatch(getPostsByCat(category));
    // console.log('categor ',category);
  };

  render() {
    console.log('estas props en bloker ',this.props);
    const { catInfo, postInfo } = this.props;

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
                {catInfo.map(
                  (item, i) =>
                  <CatMenu key={i} {...item}
                    postByCategory={this.getPostByCat}
                   />
                  /* <postList key={i} {...item}/> */
                )}
              </ul>
            </div>
          </div>
        </nav>
        <div className="jumbotron row">

          <div className="col-md-8 m-2">

            {this.props.children}

          </div>

          <div className=" jumbotron col-md-3 m-2 ">
            <div className="card text-center bg-primary text-white mb-3">
              <div className="card-body">
                <h3>Posts</h3>
                <h1 className="display-4">
                  <i className="fa fa-pencil" /> {postInfo.length}
                </h1>
                <button className="btn btn-dark btn-sm m-1">
                  <Link to="/">View</Link>
                </button>
                <button className="btn btn-dark btn-sm m-1">
                  <Link to="/create">+ Add</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer
          id="main-footer"
          className="bg-dark fixed-bottom text-white mt-3 p-3"
        >
          <div className="conatiner">
            <div className="row">
              <div className="col">
                <p className="lead text-center">
                  Copyright &copy; 2017{" "}
                  <Link to="/">
                    <span className="fa fa-cube" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </footer>;
      </div>
    );
  }
}
function mapStateToProps({ posts, categories }) {
  // console.log('posts en padre ',posts);

  return {
    postInfo: objToArray(posts),
    catInfo: objToArray(categories)
  };
}
export default withRouter(connect(mapStateToProps)(Layout))
