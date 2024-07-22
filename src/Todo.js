import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Todo = () => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const AddTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    //add todo to list
    setList([...list, newTodo]);

    setInput("");
  };

  const deleteTodos = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const todoEl = list.map((todo) => (
    <li key={todo.id}>
      {/* <input className="checkbox" type="checkbox"></input> */}
      {todo.todo}{" "}
      <button className="deleteBtn" onClick={() => deleteTodos(todo.id)}>
        &times;
      </button>
    </li>
  ));

  return (
    <main>
      <h1 className="title">Todo App</h1>
      <div className="todo--container">
        <input
          type="text"
          placeholder="Task name"
          // name=""
          value={input}
          onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={() => AddTodo(input)}>Add</button>
      </div>
      <ul>{todoEl}</ul>
    </main>
  );
};

export default Todo;
