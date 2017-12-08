import React, { Component } from "react";
import { connect } from "react-redux";
import CommentItem from "./CommentItem";

import {
  getCommentsByPostID,
  updateCommentScore,
  delComment
} from "../actions/comments";
import { objToArray } from "../utils";

class CommentsList extends Component {
  componentDidMount() {
    const parentId = this.props.parentPost;
    this.props.dispatch(getCommentsByPostID(parentId));
  }
  changeCommentScore = (commentId, option) => {
    this.props.dispatch(updateCommentScore(commentId, option));
  };
  delCommentbyID = commentId => {
    this.props.dispatch(delComment(commentId));
  };

  editComponnetByID = ({ id, body, author, newComment }) => {
    this.props.parentHistory.push(`/comment/${id}`, {
      id,
      body,
      author,
      newComment
    });
  };

  render() {
    let { commentsDetail = [] } = this.props;

    if (commentsDetail.length === 0) {
      return (
        <div className="text-center">
          <h1>
            Theres no comments.
            <i className="fa fa-frown-o fa-2x" aria-hidden="true" />
          </h1>
          <br />
          <h4>Be the 1st and add one. </h4>
        </div>
      );
    }

    return (
      <div>
        {commentsDetail.map(item => (
          <CommentItem
            key={item.id}
            {...item}
            updateComScore={this.changeCommentScore}
            deleteComment={this.delCommentbyID}
            editComment={this.editComponnetByID}
          />
        ))}
      </div>
    );
  }
}
function mapStateToProps({ comments: { items } }, ownProps) {
  const cambio = objToArray(items);

  return {
    commentsDetail: cambio
  };
}
export default connect(mapStateToProps)(CommentsList);
