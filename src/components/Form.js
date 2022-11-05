import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
    const inputTextHandler = (e) => {
        const {value} = e.target;
        setInputText(value)
    }

    const addTodosHandler = (e) => {
        e.preventDefault()
        if (!inputText) {
            return;
        }
        setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 100}])
        setInputText('')
    }

    const changeTodoStatus = (e) => {
        const {value} = e.target;
        setStatus(value)
    }

    return (
        <form>
            <input
                onChange={inputTextHandler}
                value={inputText}
                className='todo-input'
                type='text'
            />
            <button onClick={addTodosHandler} className='todo-button' type='submit'>add</button>

            <div className="select">
                <select onChange={changeTodoStatus} name='todos' className='filter-todo'>
                    <option value='all'>all</option>
                    <option value='completed'>completed</option>
                    <option value='uncompleted'>uncompleted</option>
                </select>
            </div>
        </form>

    );
};

export default Form;