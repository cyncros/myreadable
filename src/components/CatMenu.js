import React from "react";
import { Link } from "react-router-dom";

function catName(name) {
  if (name === "react") {
    return "fa fa-rocket";
  } else if (name === "redux") {
    return "fa fa-ravelry";
  } else if (name === "udacity") {
    return "fa fa-university";
  }
}

const CatMenu = props => {
  const { name = "/", path = "" } = props;
  return (
    <li className="nav-item px-2">
      <Link
        to={`/${path}`}
        onClick={() => props.postByCategory(name)}
        className="nav-link"
      >
        <i className={catName(name)} /> {name}
      </Link>
    </li>
  );
};
export default CatMenu;
