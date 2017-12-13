import React, { Component } from "react";
import { changeTimeFormat } from "../utils";

class CommentItem extends Component {
  render() {
    const {
      id="0" ,
      author="no-author" ,
      timestamp="0" ,
      body="empty" ,
      voteScore="0" 
    } = this.props;
    return (
      <div>
        <div className="card text-center border-info mb-3">
          <div className="card-header text-muted">
            <h6>By: {author} </h6>
          </div>
          <div className="card-body row">
            <div className="cl-md-6 mr-auto ">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => this.props.updateComScore(id, "upVote")}
              >
                <i className="fa fa-angle-double-up" aria-hidden="true" />
              </button>
              <br />
              {voteScore}
              <br />
              <button
                type="button"
                className="btn btn-success"
                onClick={() => this.props.updateComScore(id, "downVote")}
              >
                <i className="fa fa-angle-double-down" aria-hidden="true" />
              </button>
            </div>

            <div className="cl-md-6 mr-auto">
              <p>{body}</p>
            </div>
          </div>
          <div className="card-footer ">
            <div className="pull-left">
              {`Submitted ${changeTimeFormat(timestamp)}`}
            </div>
            <div className="pull-right">
              <button
                type="button"
                className="btn btn-outline-danger m-1"
                onClick={() => this.props.deleteComment(id)}
              >
                <i className="fa fa-ban" aria-hidden="true" />
              </button>

              <button
                type="button"
                className="btn btn-outline-warning m-1"
                onClick={() => {
                  this.props.editComment({
                    id,
                    body,
                    author,
                    newComment: false
                  });
                }}
              >
                <i className="fa fa-pencil" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CommentItem;
