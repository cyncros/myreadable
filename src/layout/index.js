import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getPostsByCat, addPost, sortPostsBy } from "../actions/Post";
import { getCategories } from "../actions/Categories";
import { objToArray, orderArrayBy } from "../utils";
import CatMenu from "../components/CatMenu";

class Layout extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories());
    let post = {
      id: "6",
      title: "94",
      timestamp: 1509428673907,
      body:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, laborum.",
      author: "StrangerThings",
      category: "udacity"
    };
    // this.props.dispatch(addPost(post));
    // console.log(updatePostScore({postId:"2",option:"upVote"}))
    // console.log(updateCommentScore({commentId:3,option:"upVote"}))
    // console.log(editPostDetails({postId:4,title:"MUSHO MAS.....",body:"EXTRA..."}))
    // console.log(editComments({"commentId":3,"timestamp":1509428673907,"body":"Lorem"}))
    // console.log(addComment(commentInfo))
  }

  getPostByCat = category => {
    this.props.dispatch(getPostsByCat(category));
  };

  render() {
    const { catInfo = [], postsInfo = [] } = this.props;

    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-5 text-center">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <span className="fa fa-cube  fa-3x" />
            </Link>
            <div className="navbar-navbar-expand-xs " id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item px-2">
                  <Link to="/" className="nav-link">
                    Dashboard
                  </Link>
                </li>
                {catInfo.map((item, i) => (
                  <CatMenu
                    key={i}
                    {...item}
                    postByCategory={this.getPostByCat}
                  />
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <div className="jumbotron row">
          <div className="col-md-8 m-2">{this.props.children}</div>

          <div className=" jumbotron col-md-3 m-2 ">
            <div className="card text-center bg-info text-white mb-3">
              <div className="card-body">
                <h3>Order By:</h3>
                <select
                  onChange={event =>
                    // orderArrayBy(postsInfo, event.target.value)
                    this.props.dispatch(sortPostsBy(event.target.value))
                  }
                >
                  <option value={"none"}>...</option>

                  <option value="timestamp">Time Stamp</option>
                  <option value="voteScore">Vote Score</option>
                </select>
              </div>
            </div>

            <div className="card text-center bg-primary text-white mb-3">
              <div className="card-body">
                <h3>Posts</h3>
                <h1 className="display-4">
                  <i className="fa fa-pencil" /> {postsInfo.length}
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
function mapStateToProps({  posts: { items,sortBy="voteScore" },  categories: { elements }})
 {console.log(sortBy,'sortBy');

  return {
    // postsInfo: orderArrayBy(objToArray(items),sortBy),
    postsInfo: objToArray(items),

    catInfo: elements
  };
}
export default withRouter(connect(mapStateToProps)(Layout));
