import { createContext, React, useState } from "react";
export const context = createContext();

export default function ContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isDone, setIsDone] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const addTask = () => {
    if (inputValue != '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  }

  const handleClick = (event) => {
    event.target.parentNode.parentNode.style = "outline-style:solid;outline-color:rgb(54, 114, 136);text-decoration:line-through;"
    event.currentTarget.style = "background-color:grey;"
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  return (
    <div>
      <context.Provider value={{ tasks, setTasks, inputValue, setInputValue, isDone, setIsDone, handleInputChange, addTask, handleClick, deleteTask }}>
        {children}
      </context.Provider>
    </div>
  )
}
