import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completedHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }

    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'complete' : ''} `}>{text}</li>
            <button onClick={completedHandler} className='complete-button'>
                <i className="material-symbols-outlined">done</i>
            </button>
            <button onClick={deleteHandler} className='delete-button'>
                <i className="material-symbols-outlined">delete</i>
            </button>
        </div>
    );
};

export default Todo;