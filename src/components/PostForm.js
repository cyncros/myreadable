import React, { Component } from "react";
import { uniqueID, timeToStamp, createObjToSubmit } from "../utils";
import { connect } from "react-redux";
import { addPost, editPostDetails } from "../actions/Post";

class pagBase extends Component {
  componentDidMount() {
    let postData = this.props.history.location.state;

    const { newPost } = postData;
    if (newPost === false) {
      this.setState({
        ...postData,
        btnSubmitText: "Save",
        newPost: false
      });
    } else {
      this.setState({
        btnSubmitText: "Create",
        newPost: true
      });
    }
  }

  state = {
    title: "",
    author: "",
    category: "react",
    body: ""
  };
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    let { postId, body, author, title, category, newPost } = this.state;
    let catP = this.state.category;

    const isEnable = title.length > 0 && author.length > 0 && body.length > 0;
    return (
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="row align-items-center justify-content-center">
          <div className="jumbotron col-md-6 m-2 text-center">
            <form>
              <div className="form-group">
                <label className="col-form-label">Title Post</label>
                <input
                  name="title"
                  type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  placeholder="Post Title"
                />
              </div>
              <div className="form-group">
                <label className="col-form-label">Author Post</label>
                <input
                  name="author"
                  type="text"
                  className="form-control"
                  value={this.state.author}
                  onChange={this.handleInputChange}
                  placeholder="Post Author"
                  disabled={!newPost}
                />
              </div>

              <div className="form-group">
                <label className="col-form-label">Category</label>
                <select
                  name="category"
                  value={this.state.category}
                  onChange={this.handleInputChange}
                  className="form-control"
                  disabled={!newPost}
                >
                  <option value="react">React</option>
                  <option value="redux">Redux</option>
                  <option value="udacity">Udacity</option>
                </select>
              </div>
              <div className="form-group">
                <label className="col-form-label">Message Post:</label>
                <textarea
                  className="form-control"
                  name="body"
                  value={this.state.body}
                  onChange={this.handleInputChange}
                  rows="3"
                  placeholder="Message Post"
                />
              </div>

              <button
                className="btn btn-success m-1"
                type="button"
                disabled={!isEnable}
                onClick={() => {
                  let postIDs = uniqueID();
                  if (newPost === true) {
                    this.props.dispatch(
                      addPost(
                        createObjToSubmit(
                          postIDs,
                          {
                            title,
                            author,
                            category,
                            body
                          },
                          timeToStamp()
                        )
                      )
                    );
                    this.props.history.push(`/${category}/${postIDs}`);
                  } else {
                    this.props.dispatch(
                      editPostDetails({
                        postId,
                        title,
                        body
                      })
                    );
                    this.props.history.push(`/${category}/${postId}`);
                  }
                }}
              >
                {this.state.btnSubmitText}
              </button>
              <button
                className="btn btn-dark m-1"
                type="Reset"
                value="Reset"
                onClick={() => {
                  this.props.history.push(`/${catP}/${postId}`);
                }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(pagBase);
