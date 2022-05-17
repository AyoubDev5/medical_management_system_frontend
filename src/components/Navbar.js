import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-header">
            <a
              href="#"
              className="bars"
              onClick={this.props.onBarClick}
            ></a>
            <a className="navbar-brand" href="#">
              Medical Management System
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
