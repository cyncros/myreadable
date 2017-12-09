import React, { Component } from "react";
import { connect } from "react-redux";

import CommentsList from "./CommentsList";
import {
  getPostDetailById,
  updatePostScore,
  deletePost
} from "../actions/Post";
import { changeTimeFormat } from "../utils";

class PostDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPostDetailById(id);
  }
  //-----Edit ----START

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

  //-----Edit ----FINALE

  render() {
    let {
      postDetail: {
        id = "0",
        title = "no-title",
        author = "no-author",
        timestamp = "0",
        body = "empty",
        voteScore = "0",
        category = "empty",
        commentCount = "0"
      } = {}
    } = this.props;

    const { postDetail = [] } = this.props;
    if (postDetail.length === 0) {
      return (
        <div className="text-center">
          <h1>
            Theres no POST HERE.
            <i className="fa fa-frown-o fa-2x" aria-hidden="true" />
          </h1>
          <br />
          <h4>Be the 1st and add one. </h4>
        </div>
      );
    }

    return (
      <div className="jumbotron col-md ">
        <div className="jumbotron">
          <div className="card border-success mb-3">
            <div className="card-header ">
              <h3>{title}</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3 text-center">
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => this.props.updatePostScore(id, "upVote")}
                  >
                    <i className="  fa fa-chevron-circle-up fa-2x " />
                  </button>
                  <br />
                  <span>{voteScore}</span>
                  <br />
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => this.props.updatePostScore(id, "downVote")}
                  >
                    <i className="fa fa-chevron-circle-down fa-2x " />
                  </button>
                </div>
                <div className="col-sm-8">
                  <p className="card-text">{body}</p>
                  <h6 className="font-weight-bold">{category}</h6>
                </div>
              </div>
            </div>
            <div className="card-footer  text-muted">
              <div className="pull-left">
                <p>By: {author}</p>
              </div>
              <div className="pull-right">
                <p className="text-right">
                  {commentCount} comments
                  <button
                    type="button"
                    className="btn btn-outline-success m-1"
                    onClick={() =>
                      this.props.history.push("/comment/create", {cat:category,parentId:id,
                        newComment: true
                      })
                    }
                  >
                    <i className="fa fa-commenting-o" aria-hidden="true">+Add Comment</i>
                  </button>
                  <br />
                  {`Submitted ${changeTimeFormat(timestamp)}`}
                  <button
                    className="m-1 btn btn-outline-warning fa fa-pencil "
                    onClick={() =>
                      this.editPostInfo({
                        postId: id,
                        body,
                        title,
                        author,
                        category
                      })
                    }
                  />
                  <button
                    className="m-1 btn btn-outline-danger  "
                    onClick={() => this.props.deletePost(id)}
                  >
                    <i className=" fa fa-trash" />
                  </button>
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div className="jumbotron">
            <CommentsList parentPost={this.props.match.params.id}
            parentHistory={this.props.history} />
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ posts: { postDetail } }, ownProps) {
  return {
    postDetail: postDetail
  };
}
export default connect(mapStateToProps, {
  updatePostScore,
  getPostDetailById,
  deletePost
})(PostDetail);
