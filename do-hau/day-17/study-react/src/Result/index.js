import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import "./style.scss";

class Result extends Component {
    constructor() {
        super();
    }
  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
  }

  handleIncrement = () => {
      this.props.increment()
  }

  handleDecrement = () => {
      this.props.decrement()
  }

  render() {
    console.log("Props", this.props);
    return (
      <div>
        <p className="custom-text">{this.props.number}</p>
        <Button onClick={this.handleIncrement} variant="primary">
          Cộng
        </Button>
        <Button onClick={this.handleDecrement} variant="primary">
          Trừ
        </Button>
      </div>
    );
  }
}

export default Result;
