import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    pendingTodoCount,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp ({todosCount}), <small>Pendientes: {pendingTodoCount}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Add Todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
