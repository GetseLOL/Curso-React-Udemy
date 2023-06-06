import React from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi";
import { useState } from "react";

export const TodoApp = () => {
  // const { data: todos, isLoading } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  console.log(todo);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>Is Loading: {isLoading ? "True" : "False"} </h4>
      <pre> {JSON.stringify(todo)} </pre>

      <button onClick={nextTodo}>Next Todo</button>
      <button onClick={prevTodo}>Previus Todo</button>
      {/* <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <strong> {todo.completed ? "DONE" : "Pending"} </strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};
