import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    if(this.state.count>0)
    this.setState({ count: this.state.count - 1 });
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };
  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span style={this.styles} className={this.badgeColour()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <ul>
          {/* {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))} */}
        </ul>
      </React.Fragment>
    );
  }
  badgeColour() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
