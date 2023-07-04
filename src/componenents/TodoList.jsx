import { useTodo } from "../context/todoContext";
import Todo from "./Todo";

const TodoList = () => {
  const [{ todos }] = useTodo();

  return (
    <ul className="list">
      {todos.map((todo, i) => (
        <li
          key={todo.id}
          onClick={() => (todo.isComplated = !todo.isComplated)}
          className={
            todo.isComplated
              ? "line-through  list-inline"
              : "  underline list-inline"
          }
        >
          <Todo todo={todo} index={i} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
