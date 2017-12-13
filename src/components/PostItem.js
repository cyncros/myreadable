import React, { Component } from "react";
import { changeTimeFormat } from "../utils";

class PostItem extends Component {
  render() {
    const {
      id ="0",
      title="no-title" ,
      author="no-author" ,
      timestamp="0" ,
      body="empty",
      voteScore ="0",
      category ="empty",
      commentCount ='0'
    } = this.props;

    return (
      <div className="card border-success mb-3">
        <div className="card-header">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <button
                type="button"
                className="btn btn-link"
                onClick={() => this.props.selectPostScore(id, "upVote")}
              >
                <i className="  fa fa-chevron-circle-up fa-2x " />
              </button>
              <br />
              <span>{voteScore}</span>
              <br />
              <button
                type="button"
                className="btn btn-link"
                onClick={() => this.props.selectPostScore(id, "downVote")}
              >
                <i className="fa fa-chevron-circle-down fa-2x " />
              </button>
            </div>
            <div className="col-sm-8">
              <p className="card-text">{body}</p>
              <h6 className="font-weight-bold">{category}</h6>
              <button
                className="ml-1  alert-link btn btn-secondary"
                onClick={() =>
                  this.props.singlePost({
                    postId: id,
                    category,
                    readMore: true
                  })
                }
              >
                Read More...
              </button>
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
              <br />
              {`Submitted ${changeTimeFormat(timestamp)}`}
              <button
                className="m-1 btn btn-outline-warning fa fa-pencil "
                onClick={() =>
                  this.props.editPost({
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
                onClick={() => this.props.deleteSelectedPost(id)}
              >
                <i className=" fa fa-trash" />
              </button>
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default PostItem;
