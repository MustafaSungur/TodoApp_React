import { GiCancel } from "react-icons/gi";
import { BiPencil } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { useTodo } from "../context/todoContext";
import { useState } from "react";

const Todo = ({ todo }) => {
  const [{}, dispatch] = useTodo();
  const [isEdit, setIsEdit] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.content);

  const delete_todo = () => {
    dispatch({
      type: "DELETE",
      id: todo.id,
    });
  };

  const editTodo = (todoId, newValue) => {
    dispatch({
      type: "UPDATE",
      payload: {
        todoId,
        newValue,
      },
    });
    setIsEdit(false);
    todo.isComplated = false;
  };

  const checked = ({ isChecked, todoId }) => {
    dispatch({
      type: "COPLATED",
      payload: {
        todoId,
        isChecked,
      },
    });
  };

  return (
    <div className="flex justify-between w-full align-middle">
      {(isEdit && (
        <input
          type="text"
          className="bg-inherit border outline-none w-full me-1 p-1"
          value={newTodo}
          onClick={(e) => e.target.focus()}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      )) || (
        <label className="container">
          <input
            type="checkbox"
            onClick={(e) =>
              checked({ isChecked: e.target.checked, todoId: todo.id })
            }
          />
          <div className="checkmark"></div>
          <p className={todo.isComplated ? "line-through" : ""}>
            {todo.content}
          </p>
        </label>
      )}
      <span className=" flex gap-2 my-auto items-center">
        {(isEdit && (
          <FaCheckCircle
            className="text-xl text-blue-500"
            onClick={() => editTodo(todo.id, newTodo)}
          />
        )) || (
          <BiPencil
            className="text-xl text-blue-500"
            onClick={() => setIsEdit(!isEdit)}
          />
        )}

        <GiCancel className="text-xl text-red-600" onClick={delete_todo} />
      </span>
    </div>
  );
};

export default Todo;
