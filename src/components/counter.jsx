import React, { Component } from "react";
export default class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: [],
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncreament({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
        <div>
          <div>{this.state.tags.length === 0 && "Please create a new tag"}</div>
          {this.renderTags()}
        </div>
      </React.Fragment>
    );
  }

  handleIncreament = (id) => {
    console.log(id);
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    if (this.state.count === 0) return "There are no Tags!";
    else
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
          ;
        </ul>
      );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
