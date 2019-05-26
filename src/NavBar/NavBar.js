import React from "react";

import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid bg-dark">
        <div className="container">
          <div className="AppName">
            {" "}
            <ul className="nav navbar-nav navbar-left">
              <li>
                <a
                  href="https://github.com/Brahmaiah-Rayalla"
                  className="fa fa-github"
                />
              </li>
              <li>
                <a
                  href="http://brahma517.blogspot.com/"
                  className="fa fa-rss-square"
                />
              </li>
            </ul>{" "}
            <h1>E-App </h1>
            <div className="cart">
              <h3>
                <a className="nav-modal" onClick={this.props.click}>
                  <span className="glyphicon glyphicon-shopping-cart" /> Cart{" "}
                </a>
                Items:{" "}
                <span className="badge badge-success">{this.props.count}</span>{" "}
                Price:{" "}
                <span className="badge badge-success">
                  ${this.props.totalAmount}
                </span>
              </h3>
            </div>
            <div className="reeset">
              <button className="btn btn-info" onClick={this.props.reset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
