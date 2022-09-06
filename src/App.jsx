import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useGetTodosQuery, useDeleteTodoMutation, useAddTodoMutation, useUpdateTodoMutation } from "./services/pokemon";

function App() {
  // properties from our hook
  const { data, error, isLoading } = useGetTodosQuery();

  console.log(data);

  // destruction methods form our hooks
  const [deletePost] = useDeleteTodoMutation();
  const [addTodo] = useAddTodoMutation()
  const [updateTodo] = useUpdateTodoMutation()

  return (
    <div className="App">
      <ul>
        {data?.map(({ id, title }) => (
          <li key={id}>
            {title} <button onClick={() => deletePost({id})}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
