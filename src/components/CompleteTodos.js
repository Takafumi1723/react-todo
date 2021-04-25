import React from "react";
import PropTypes from 'prop-types';

const style = {
  backgroundColor: "#cccc00",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

const CompleteTodos = (props) => {
  // const { completeTodos, onClickBack } = props;
  return (
    <div style={style}>
      <p className="title">かんりょうリスト</p>
      <ul>
        {props.completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => props.onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CompleteTodos;

CompleteTodos.propTypes = {
  completeTodos: PropTypes.object,
  onClickBack: PropTypes.func,
}