import React, { Component } from "react";
import { Link } from "react-router-dom";


function catName(name) {
  let ico;
  if (name === "react") {
    ico = "fa fa-rocket";
  } else if (name === "redux") {
    ico = "fa fa-ravelry";
  } else if (name === "udacity") {
    ico = "fa fa-university";
  }
  return ico;
}

class CatMenu extends Component {
  render() {
    let { name = "/", path = "/" } = this.props;
    return (
      <li className="nav-item px-2">
        <Link
          to={`/${path}`}
          // onClick={this.props.postByCategory(name)}
          onClick={()=>this.props.postByCategory(name)}
          className="nav-link"
        >
          <i className={catName(name)} /> {name}
        </Link>
      </li>
    );
  }
}
export default CatMenu;
