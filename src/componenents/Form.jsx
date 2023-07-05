import { useEffect, useRef } from "react";
import { useTodo } from "../context/todoContext";
import TodoList from "./TodoList";

const Form = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Contexteki todo'yu alır
  const [{ todo }, dispatch] = useTodo();

  const submitHandle = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 2416550),
      content: todo,
      isComplated: false,
    };

    dispatch({
      type: "ADD_TODO",
      todo: newTodo,
    });
  };

  const onChange = (e) => {
    dispatch({
      type: "SET_VALUE",
      value: e.target.value,
    });
  };
  const deleteAll = () => {
    dispatch({
      type: "DELETE_ALL",
    });
  };
  return (
    <div className="mb-8 flex flex-col  w-3/4 mx-auto ">
      <h1 className="p-2 text-xl font-thin">Todo App</h1>
      <form onSubmit={submitHandle} className="form grid mb-3">
        <input
          type="text"
          onChange={onChange}
          className="input"
          value={todo}
          ref={inputRef}
        />
        <button disabled={!todo} type="submit" className="btn">
          Ekle
        </button>
      </form>
      <div className="border rounded backdrop-blur ">
        <div className="flex justify-between border-b p-2">
          <h1>todoapp</h1>
          <button className="btn-cancel" onClick={deleteAll}>
            Temizle
          </button>
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default Form;
