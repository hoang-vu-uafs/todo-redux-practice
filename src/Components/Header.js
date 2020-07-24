import React from "react";
import { connect } from "react-redux";

function Header(props) {
  function countChecked() {
    let count = 0;
    props.todos.forEach((todo) => {
      if (todo.theCheck === true) {
        count++;
      }
    });

    return count;
  }

  return (
    <div>
      <label>Number of tasks: {props.todos.length}</label>
      <div>Finished tasks: {countChecked}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({ todos: state.todos });

export default connect(mapStateToProps)(Header);
