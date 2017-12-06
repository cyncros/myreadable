import React, { Component } from "react";
import PostItem from "./PostItem";
import { connect } from "react-redux";
import {
  getAllPosts,
  deletePost,
  updatePostScore,
  sortPostsBy
} from "../actions/Post";
import { withRouter } from "react-router-dom";

import { objToArray, orderArrayBy } from "../utils";

class PostList extends Component {
  componentDidMount() {
    this.props.dispatch(getAllPosts());
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.path === "/") {
      if (prevProps.match.path === "/:category") {
        this.props.dispatch(getAllPosts());
      }
    }
  }

  delPostById = postId => {
    this.props.dispatch(deletePost(postId));
  };

  changePostScore = (postId, option) => {
    this.props.dispatch(updatePostScore(postId, option));
  };

  editPostInfo = ({ postId, title, body, author, category }) => {
    this.props.history.push("/edit", {
      postId,
      title,
      body,
      newPost: false,
      author,
      category
    });
  };

  singlePostDetails = ({ postId, category, readMore }) => {
    this.props.history.push(`/${category}/${postId}`, { postId, readMore });
    // this.props.dispatch(getPostDetailById(postId));
  };

  render() {
    const { postsInfo = [] } = this.props;

    return (
      <div className="jumbotron">
        <div className=" row">
          <div className="col-sm-8 ">
            {postsInfo.map(item => (
              <PostItem 
                key={item.id}
                {...item}
                deleteSelectedPost={this.delPostById}
                selectPostScore={this.changePostScore}
                editPost={this.editPostInfo}
                singlePost={this.singlePostDetails}
              />
              // return <PostItem id={id} title={title} author={author}/>
            ))}
          </div>

          <div className="col-sm-4 ">
            <div className="card text-center bg-info text-white mb-3">
              <div className="card-body">
                <h3>Order By:</h3>
                <select
                  className="btn-lg"
                  onChange={event =>
                    this.props.dispatch(sortPostsBy(event.target.value))
                  }
                >
                  <option value={"none"}>...</option>
                  <option value="timestamp">Time Stamp</option>
                  <option value="voteScore">Vote Score</option>
                </select>
              </div>
            </div>

            <div className="card text-center bg-success text-white mb-3">
              <div className="card-body">
                <h3>Posts</h3>
                <h1 className="display-4">
                  <i className="fa fa-pencil" /> {postsInfo.length}
                </h1>
                <button
                  type="button"
                  className="btn btn-dark m-1 btn-lg"
                  onClick={() => this.props.history.push("/")}
                >
                  View
                </button>
                <button
                  type="button"
                  className="btn btn-dark m-1 btn-lg"
                  onClick={() =>
                    this.props.history.push("/create", { newPost: true })
                  }
                >
                  + Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts: { items, sortBy = "voteScore" } }) {
  let objArray = objToArray(items);

  return {
    postsInfo: orderArrayBy(objArray, sortBy)
  };
}
export default withRouter(connect(mapStateToProps)(PostList));
