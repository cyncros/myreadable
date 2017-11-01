import React, { Component } from "react";
import PostItem from "./PostItem";

class PostList extends Component {
  render() {
    return (
      <div>
        <PostItem />
        <PostItem />
      </div>
    )
  }
}
export default PostList;
