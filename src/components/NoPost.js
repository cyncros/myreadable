import React from "react";
import {Link} from 'react-router-dom'
const NoPost = props => {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
      <h1>
        Theres no POST HERE.
        <i className="fa fa-frown-o fa-2x" aria-hidden="true" />
      </h1>
      <br />
      <h4>Be the 1st and add one. </h4>

      <button
        type="button"
        className="btn btn-info btn-lg m-5"
      >
        <h3>
          <span className="fa fa-plus" aria-hidden="true" />
          &nbsp; <Link to="/">Create One </Link>
        </h3>
      </button>
    </div>
  );
};
export default NoPost;
