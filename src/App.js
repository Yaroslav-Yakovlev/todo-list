import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import {useEffect, useState} from "react";

function App() {
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState([])

    useEffect(() => {
        filterHandler()
    }, [todos, status])

    const filterHandler = () => {
        if(status === 'completed') {
            setFilteredTodos(todos.filter(todo => todo.completed === true))
        }
        if (status === 'uncompleted' ) {
            setFilteredTodos(todos.filter(todo => todo.completed === false))
        }
        if (status === 'all') {
            setFilteredTodos(todos)
        }
    }

  return (
    <div className="App">
        <header>
            <h1>Todo List</h1>
        </header>

        <Form
            setStatus={setStatus}
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
        />
        <TodoList
            filteredTodos={filteredTodos}
            todos={todos}
            setTodos={setTodos}
        />
    </div>
  );
}

export default App;
