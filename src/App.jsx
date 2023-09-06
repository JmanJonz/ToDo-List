// imports
  // react modules
    import { useState } from "react"
  // styles
    import "./static/css/styles.css"
import TodoAddForm from "./components/TodoAddForm";

export default function App(){
  // creting state for the App component
  const [todos, setTodos] = useState([]);

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo =>{
        if (todo.id === id){
          return { ...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
  <>
  <TodoAddForm/>
  <h1 className="header">Todo List</h1>
  <ul>
    {todos.length === 0 && "No Todos"}
    {todos.map(todo => {
      return <li key={todo.id}>
      <label>
        <input onChange={e => toggleTodo(todo.id, e.target.checked)} type="checkbox" checked={todo.completed} />
        {todo.title}
      </label>
      <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
    </li>
    })}
  </ul>
  </>
  )
}