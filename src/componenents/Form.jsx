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
  return (
    <div>
      <div className="h-screen my-auto flex justify-center flex-col  text-center w-3/6  mx-auto ">
        <form
          onSubmit={submitHandle}
          className=" top-20 mx-auto fixed bottom-2/3 left-1/2 -translate-x-1/2 z-0"
        >
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
        <TodoList />
      </div>
    </div>
  );
};

export default Form;
