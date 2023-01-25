import React, { useContext, useState } from 'react';
import {context} from '../Contexts/context';


function TodoList() { 
  const {tasks, setTasks, inputValue, setInputValue, isDone, setIsDone, handleInputChange, addTask, handleClick, deleteTask} = useContext(context);

  return (
      <div className='todo_app'>
        <div className='add_todo'>
          <h1>Todo List App</h1>
          <div className='todo_list'>
            <input value={inputValue} onChange={handleInputChange} placeholder='Entrer une tâche' />
            <button id='ajouter' onClick={addTask}>Ajouter</button>  
          </div>
        </div>

        <div className='todo_container'>
          <h1>Todo List</h1>
          <ul>
            {tasks.map((task, i) => (
              <div className='todo'>
                  <div className='todo_title'>
                <li key={i}>
                    {task}
                </li>
                  </div>
                  <div className='todo_btn'>
                    <button onClick={handleClick}>Done</button>
                    <button id='delete' onClick={() => deleteTask(i)}>Delete</button>
                  </div>
                
              </div>
            ))}
          </ul>
        </div>
      </div>
  );
}

export default TodoList;
