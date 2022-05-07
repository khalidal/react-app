import React, { Component } from "react";
export default class Counter extends Component {
  state = {
    value: this.props.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1"],
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
          {/* <div>{this.state.tags.length === 0 && "Please create a new tag"}</div>
          {this.renderTags()} */}
        </div>
      </React.Fragment>
    );
  }

  handleIncreament = (id) => {
    console.log(id);
    this.setState({ value: this.state.value + 1 });
  };

  renderTags() {
    if (this.state.value === 0) return "There are no Tags!";
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}
