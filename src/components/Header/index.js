import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <div>
            <img
              src="https://www.qwackedu.com/static/media/logo.2a487917892639ad5b74.png"
              alt="app-logo"
              className="app-logo"
            />
          </div>
          <div className="nav-items">
            <Link to="/QWACK-assignment" className="nav-item">
              <p className="nav-item">Home</p>
            </Link>
            <p className="nav-item">Worksheet</p>
            <Link to="/QWACK-assignment/vocabulary" className="nav-item">
              <p className="nav-item">Vocabulary</p>
            </Link>
            <p className="nav-item">Quiz</p>
            <p className="nav-item">Competition</p>
            <p className="nav-item">About Us</p>
          </div>
          <button type="button" className="btn btn-primary">
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
