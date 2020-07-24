import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../actionCreator/action";

class TextBar extends React.Component {
  state = {
    text: "",
  };

  id = 0;

  inputHandle = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input onChange={(e) => this.inputHandle(e)} />
        <button
          onClick={this.props.addTodo({
            theText: this.state.text,
            theCheck: false,
            theID: this.id++,
          })}
        >
          Add
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TextBar);
