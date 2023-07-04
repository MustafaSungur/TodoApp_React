import { GiCancel } from "react-icons/gi";
import { BiPencil } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { useTodo } from "../context/todoContext";
import { useState } from "react";

const Todo = ({ todo, index }) => {
  const [{}, dispatch] = useTodo();
  const [edit, setEdit] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.content);
  const delete_todo = () => {
    const isDelete = confirm("Item Silinecek");
    if (isDelete) {
      dispatch({
        type: "DELETE",
        id: todo.id,
      });
    }
  };
  const editTodo = (todoId) => {
    if (!newTodo) {
      dispatch({
        type: "UPDATE",
        payload: {
          todoId,
          newTodo,
        },
      });
      setEdit(false);
    }
  };

  return (
    <div className="flex justify-between w-full align-middle">
      {(edit && (
        <input
          type="text"
          className="input text-zinc-950"
          value={newTodo}
          onClick={(e) => e.target.focus()}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      )) || (
        <div>
          {index + 1}) {todo.content}
        </div>
      )}
      <span className=" flex gap-2 mt-auto items-center">
        {(edit && (
          <FaCheckCircle className="text-xl" onClick={editTodo(todo.id)} />
        )) || <BiPencil className="text-xl" onClick={() => setEdit(!edit)} />}

        <GiCancel className="text-xl" onClick={delete_todo} />
      </span>
    </div>
  );
};

export default Todo;
