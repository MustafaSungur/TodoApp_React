import { useTodo } from "../context/todoContext";
import Todo from "./Todo";

const TodoList = () => {
  const [{ todos }] = useTodo();
  return (
    <ul className="list">
      {todos.lenght !== 0 ? (
        todos.map((todo) => (
          <li key={todo.id} className=" list-inline">
            <Todo todo={todo} />
          </li>
        ))
      ) : (
        <li className="list-inline">
          asdasd <p>Görev Listesi boş</p>
        </li>
      )}
    </ul>
  );
};

export default TodoList;
