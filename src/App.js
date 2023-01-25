import './compenents/todo.css';
import TodoList from './compenents/TodoList';
import ContextProvider from './Contexts/context';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <TodoList/>
      </ContextProvider>
      
    </div>
  );
}

export default App;
