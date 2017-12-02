import React, { Component } from "react";
import PostItem from "./PostItem";
import { connect } from "react-redux";
import { getAllPosts, deletePost,updatePostScore } from "../actions/Post";
import { withRouter } from "react-router";

import { objToArray } from "../utils";

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

  changePostScore=(postId,option)=>{
    this.props.dispatch(updatePostScore(postId,option))
  }

  render() {
    const { postInfo = [] } = this.props;

    return (
      <div>
        {postInfo.map(item => (
          <PostItem
            key={item.id}
            {...item}
            deleteSelectedPost={this.delPostById}
            selectPostScore={this.changePostScore}
          />
          // return <PostItem id={id} title={title} author={author}/>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ posts: { items } }) {
  return {
    postInfo: objToArray(items)
  };
}
export default withRouter(connect(mapStateToProps)(PostList));
