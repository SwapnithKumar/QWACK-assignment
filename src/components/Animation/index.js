import React, { Component } from "react";
import "./index.css";

class Animation extends Component {
  render() {
    return (
      <div className="animations-container">
        <div className="sun"></div>
        <div class="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    );
  }
}

export default Animation;
