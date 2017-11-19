import React, { Component } from "react";
import PostItem from "./PostItem";
// import {withRouter} from "react-router-dom"
import { connect } from "react-redux";
import { getAllPosts} from "../actions/Post";

import { objToArray } from "../utils";

class PostList extends Component {
  componentDidMount() {
    this.props.dispatch(getAllPosts());
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.match,'mainProps');
    console.log(nextProps.match,'nextProps');
  }

  render() {
    const { postInfo } = this.props;

    return (
      <div>
        {postInfo.map(item => (
          <PostItem key={item.id} {...item} />
          // return <PostItem id={id} title={title} author={author}/>
        ))}

      </div>
    );
  }
}

function mapStateToProps({ posts, categories }) {
  console.log('posts ',posts);
  return {
    postInfo: objToArray(posts)
  };
}
export default connect(mapStateToProps)(PostList)
