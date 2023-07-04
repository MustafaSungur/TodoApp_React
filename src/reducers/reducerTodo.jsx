export const initialState = {
  todos: [],
  todo: "",
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state,
        todo: action.value,
      };
    case "ADD_TODO":
      return {
        ...state,
        todo: "",
        todos: [...state.todos, action.todo],
      };
    case "DELETE":
      return {
        todos: [...state.todos].filter((todo) => todo.id !== action.id),
      };
    case "UPDATE":
      console.log(action.id);
      return {
        ...state,
        todos: [...state.todos].map((todo) => {
          if (todo.id !== action.payload.id) {
            return todo;
          }
          return {
            ...todo,
            content: action.payload.newTodo,
          };
        }),
      };
  }
};
export default todoReducer;
