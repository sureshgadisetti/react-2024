import React, { useState } from "react";

function TodoList() {
    const [todos,setTodos] = useState([]);
    const [inputValue,setInputValue] = useState('');

    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!inputValue.trim()) return;
        const newTodo ={
          id: new Date().getTime(),
           text:inputValue,
           completed:false
        }
        setTodos([...todos,newTodo]);
        setInputValue('');
    }
    const handleToggleComplete = (id)=>{
      const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    }
    const handleDelete =(id)=>{
      const filteredTodos = todos.filter(todo => todo.id !==id)
      setTodos(filteredTodos);
    }
    return (
      <div className="container">
        <h1 className="mt-4 mb-4">Todo List</h1>
        <form className="mb-4 row" onSubmit={handleSubmit}>
          <div className="form-group col-11">
            <input
              type="text"
              className="form-control"
              placeholder="Add a new todo"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
         <div className="col-1">
         <button type="submit" className="btn btn-primary">Add</button>
         </div>
        </form>
        <ul className="list-group">
          {todos.map(
            todo =>(
             <li key={todo.id} className={`list-group-item ${todo.completed ? 'border-success' : ''}`}>
                <span className="d-flex align-items-center p-2 justify-content-between">
                <span className="d-flex align-items-center">
                <input
                type="checkbox"
                className="form-check-input"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
              />
              <label className="form-check-label">
                  {todo.text}
              </label>
                </span>
              
              <button onClick={()=>handleDelete(todo.id)}  className="btn btn-danger btn-sm float-right">Delete</button>
              </span>
                
             </li> 
            )
          )}
          </ul>
      </div>
    );
  }
  
  export default TodoList;