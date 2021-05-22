import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

import InputTodo from "./components/InputTodo.js";
import IncompleteTodos from "./components/IncompleteTodos.js";
import CompleteTodos from "./components/CompleteTodos.js";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    //ここでDBに入力されたタスクを登録するAPIを実行する
    const param = {
      contents: todoText,
      complete: false,
    }
    axios.post("http://localhost:8088/saveTask",param)
    .then(res => {
      const result = res.data;
      console.log(result)
      console.log("APIは正常に実行されました。")
    })
    .catch(e => {
      console.log(e);
    })
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      ></InputTodo>
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>追加できるのは５個まで!</p>
      )}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      ></IncompleteTodos>
      <CompleteTodos
        completeTodos={completeTodos}
        onClickBack={onClickBack}
      ></CompleteTodos>
    </>
  );
};

export default App;
