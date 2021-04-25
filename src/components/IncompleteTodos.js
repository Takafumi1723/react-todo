import React from "react";
import PropTypes from 'prop-types';

const style = {
  backgroundColor: "#cccc66",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

const IncompleteTodos = (props) => {
  // const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div style={style}>
      <p className="title">はやくやれリスト</p>
      <ul>
        {props.incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => props.onClickComplete(index)}>完了</button>
              <button onClick={() => props.onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default IncompleteTodos;

IncompleteTodos.propTypes = {
  incompleteTodos: PropTypes.object,
  onClickComplete: PropTypes.func,
  onClickDelete: PropTypes.func,
}
