import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import PostList from "./PostList";
import PostForm from "./PostForm";
import PostDetail from "./PostDetail";
import CommentsList from "./CommentsList"
import CommentCreate from "./CommentCreate"
import Index from "../layout";

class App extends Component {
  render() {
    return (
      <Index>
        <Switch>
          <Route path="/create" component={PostForm} />
          <Route path="/edit" component={PostForm} />
          <Route path="/comment/:id" component={CommentCreate} />
          <Route path="/comment/create" component={CommentCreate} />

          <Route path="/:category/:id" component={PostDetail} />
          <Route path="/:category" component={PostList} />
          <Route path="/posts/:id/comments" component={CommentsList} />
          <Route path="/" component={PostList} />
        </Switch>
      </Index>
    );
  }
}

export default App;
