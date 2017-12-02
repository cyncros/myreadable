import React, { Component } from "react";
import { Link } from "react-router-dom";
import { changeTimeFormat } from "../utils";

class PostItem extends Component {
  render() {
    let {
      timeChange = "0",
      id = "0",
      title = "no-title",
      author = "no-author",
      timestamp = "0",
      body = "empty",
      voteScore = "0",
      category = "empty",
      comments="0"
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
            <div className="col-sm-9">
              <p className="card-text">{body}</p>
              <h6 className="font-weight-bold">{category}</h6>
              <button className="ml-1 text-light  alert-link alert-dark btn btn-secondary">
                <Link to="/detail">Read More...</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card-footer  text-muted">
          <p className="text-left font-weight-bold">By: {author}</p>
          <p className="text-right font-weight-bold">{comments} comments</p>
          <p className="text-right">
            {`Submitted ${changeTimeFormat(timestamp)}`}
            <button className="ml-1 btn btn-outline-warning fa fa-pencil ">
              {" "}
            </button>
            <button
              className="ml-1 btn btn-outline-danger  "
              onClick={() => this.props.deleteSelectedPost(id)}
            >
              <i className=" fa fa-trash" />
            </button>
          </p>
        </div>
      </div>
    );
  }
}
export default PostItem;
