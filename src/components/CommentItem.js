import React, { Component } from "react";
import { changeTimeFormat } from "../utils";

class CommentItem extends Component {
  render() {
    return (
      <div>
        <div className=" card border-info mb-3">
          <div className="card-header text-muted">
            <h4>Author voteScore timestamp</h4>
          </div>
          <div className="card-body text-center">
            <div className="row text-center">
              <div className="cl-md-3 ">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => console.log("hola")}
                >
                  <i className="fa fa-angle-double-up" aria-hidden="true" />
                </button>
                <br />
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => console.log("hola")}
                >
                  <i className="fa fa-angle-double-down" aria-hidden="true" />
                </button>
              </div>

              <div className="cl-md-8">
                <p>Body</p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="pull-right">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => console.log("hola")}
              >
                <i className="fa fa-ban" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => console.log("hola")}
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
