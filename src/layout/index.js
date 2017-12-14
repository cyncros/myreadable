import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getPostsByCat } from "../actions/Post";
import { getCategories } from "../actions/Categories";
import { objToArray } from "../utils";
import CatMenu from "../components/CatMenu";

class Layout extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories());
  }

  getPostByCat = category => {
    this.props.dispatch(getPostsByCat(category));
  };

  render() {
    const { catInfo = [] } = this.props;

    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-5 text-center">
          <div className="container justify-content-center font-weight-bold">
            <Link to="/" className="navbar-brand">
              <span className="fa fa-cube  fa-3x" />
            </Link>
            <div className="navbar-navbar-expand-xs " id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item px-2">
                  <Link to="/" className="nav-link">
                    Dashboard
                  </Link>
                </li>
                {catInfo.map((item, i) => (
                  <CatMenu
                    key={i}
                    {...item}
                    postByCategory={this.getPostByCat}
                  />
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <div>{this.props.children}</div>
        </div>
        <footer
          id="main-footer"
          className="bg-dark fixed-bottom text-white mt-3 p-3"
        >
          <div className="conatiner">
            <div className="row">
              <div className="col">
                <p className="lead text-center">
                  Copyright &copy; 2017{" "}
                  <Link to="/">
                    <span className="fa fa-cube" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </footer>;
      </div>
    );
  }
}
function mapStateToProps({ posts: { items }, categories: { elements } }) {
  return {
    postsInfo: objToArray(items),
    catInfo: elements
  };
}
export default withRouter(connect(mapStateToProps)(Layout));
