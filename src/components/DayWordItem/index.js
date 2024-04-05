import React, { Component } from "react";
import "./index.css";

class DayWordItem extends Component {
  render() {
    const { event } = this.props;
    const { day, action, about, pos, use } = event;
    return (
      <div className="word-day-item font-style">
        <h1 className="day">{day}</h1>
        <h1 className="action bold">{action}</h1>
        <p className="about bold">{about}</p>
        <p className="pos">[{pos}]</p>
        <p className="use bold">Use:</p>
        <p className="use bold">{use}</p>
      </div>
    );
  }
}

export default DayWordItem;
