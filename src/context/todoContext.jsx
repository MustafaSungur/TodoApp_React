import { createContext, useContext, useReducer } from "react";

const Context = createContext();

const useTodo = () => useContext(Context);

const todoProvide = ({ children, todoReducer, initialState }) => {
  return (
    <Context.Provider value={useReducer(todoReducer, initialState)}>
      {children}
    </Context.Provider>
  );
};

export default todoProvide;
export { useTodo };
