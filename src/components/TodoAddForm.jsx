import { useState } from "react";
export default function TodoAddForm(){

    const [newItem, setNewItem] = useState("");


    function handleSubmit(e){
        // prevent page refresh
        e.preventDefault()
    
        setTodos(currentTodos => {
          return [
          ...currentTodos, {id:crypto.randomUUID(), title: newItem, completed: false}
          ]
        })
        setNewItem("");
      }

    return <form onSubmit={handleSubmit} className="new-item-form" action="">
    <div className="form-row">
      <label htmlFor="item">New Item
        <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
      </label>
    </div>
    <button className="button">Add</button>
  </form>
}