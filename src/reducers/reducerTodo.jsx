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

    case "COPLATED":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.todoId) {
            return todo;
          }
          return {
            ...todo,
            isComplated: action.payload.isChecked,
          };
        }),
      };

    case "DELETE":
      return {
        todos: [...state.todos].filter((todo) => todo.id !== action.id),
      };

    case "UPDATE":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.todoId) {
            return todo;
          }
          return {
            ...todo,
            content: action.payload.newValue,
          };
        }),
      };

    case "DELETE_ALL":
      return {
        todos: [],
      };
  }
};
export default todoReducer;
