import React, { Component } from "react";
import { uniqueID, timeToStamp, createObjToSubmit } from "../utils";
import { connect } from "react-redux";

import { addComment, editComments } from "../actions/comments";

class CommentCreate extends Component {
  componentDidMount() {
    const comInfo = this.props.location.state;
console.log(comInfo);
    const { newComment } = comInfo;
    newComment === true
      ? this.setState({
          btnSubmitText: "Create",
          newComment: true
        })
      : this.setState({
          ...comInfo,
          btnSubmitText: "Save",
          newComment: false
        });
  }

  state = {
    id: "0",
    author: "",
    body: "",
    frmErrors: { author: "", body: "" },
    authorValid: false,
    bodyValid: false,
    frmValid: false
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
    let { id, body, author, newComment } = this.state;
    const comInfo2 = this.props.history.location.state;
    const isEnable = author.length > 0 && body.length > 0;
let cati =comInfo2.category
let parent =comInfo2.parentId

    return (
      <div className="jumbotron col-md-10 m-2 container-fluid">
        <div className="card text-white text-center bg-info mb-3 ">
          <div className="card-header">
            <h4 className="card-title">New Comment</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label className="col-form-label">Author Post</label>
                <input
                  name="author"
                  type="text"
                  className="form-control "
                  value={this.state.author}
                  onChange={this.handleInputChange}
                  placeholder="Post Author"
                  disabled={!newComment}
                  id="validationDefault01"
                  required
                />
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
                  id="validationDefault02"
                  required="true"
                />
              </div>
            </form>
          </div>
          <div className="card-footer text-muted">
            <button
              className="btn btn-success m-1"
              disabled={!isEnable}
              type="submit"
              onClick={() => {
                if (newComment) {
                  this.props.dispatch(
                    addComment(
                      createObjToSubmit(
                        uniqueID(),
                        {
                          author,
                          parentId: parent,
                          body
                        },
                        timeToStamp()
                      )
                    )
                  );
                } else {
                  let timeComment = timeToStamp();
                  this.props.dispatch(
                    editComments({ id, body, timestamp: timeComment })
                  );
                }
                this.props.history.push(
                  `/${cati}/${parent}`
                );
              }}
            >
              {this.state.btnSubmitText}
            </button>

            <button
              className="btn btn-dark m-1"
              type="Reset"
              value="Reset"
              onClick={() => {
                this.props.history.push(
                  `/${cati}/${parent}`
                );
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(CommentCreate);
