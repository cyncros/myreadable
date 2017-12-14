import React from "react";
import { Link } from "react-router-dom";
const notFound = () => {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
      <h1 className="display-3">
        <span className="fa-stack fa-2x mr-5">
          <strong className="fa-stack-2x fa-stack-text ">404 </strong>
        </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="fa-stack fa-2x ml-5">
          <strong className="fa-stack-2x fa-stack-text">
            <i className="fa fa-frown-o" aria-hidden="true" />
          </strong>
        </span>
      </h1>
      <h2 className="m-5">Sorry, something went wrong!</h2>

      <br />
      <button type="button" className="btn btn-info btn-lg m-5">
        <h3>
          <span className="fa fa-home" aria-hidden="true" />
          &nbsp; <Link to="/">Take Me Home</Link>
        </h3>
      </button>
    </div>
  );
};
export default notFound;
