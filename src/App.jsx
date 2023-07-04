import "./App.css";
import Form from "./componenents/Form";
import TodoProvide from "./context/todoContext";
import todoReducer, { initialState } from "./reducers/reducerTodo";

function App() {
  return (
    <TodoProvide todoReducer={todoReducer} initialState={initialState}>
      <div>
        <Form />
      </div>
    </TodoProvide>
  );
}

export default App;
