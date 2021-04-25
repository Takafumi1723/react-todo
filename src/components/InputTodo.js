import React from "react";
import PropTypes from 'prop-types';

const style = {
  backgroundColor: "#cccc99",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

const InputTodo = (props) => {
  // const { todoText, onChangeTodoText, onClickAdd, disabled } = props;
  return (
    <div style={style}>
      <input
        // disabled={disabled}
        placeholder="タスクを入力"
        value={props.todoText}
        onChange={props.onChangeTodoText}
      />
      <button disabled={props.disabled} onClick={props.onClickAdd}>
        追加
      </button>
    </div>
  );
};

export default InputTodo;

InputTodo.propTypes = {
  todoText: PropTypes.string,
  onChangeTodoText: PropTypes.func,
  onClickAdd: PropTypes.func,
  disabled: PropTypes.bool,
}
