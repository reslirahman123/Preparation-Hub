import React, { useRef, useState } from 'react'

const TodoList = () => {
    const [TodoList, setTodoList] = useState(['apple', 'banana']);

    const inputRef= useRef();

    const handleAddtodo = (e) => {
        e.preventDefault()
        const value = inputRef.current.value;
        setTodoList((prev) => ([...prev, value]));
        inputRef.current.value = '';
    }
    const handleDeleteTodo = (index) => {
        const filterTodoList = TodoList.filter((_, i) => i !== index)
       setTodoList(filterTodoList)
    }

    return (
        <>
            <form onSubmit={handleAddtodo}>
                <input type='text' ref={inputRef} />
                <button>Add Here</button>
            </form>

            <ul>
                {TodoList.map((todo, index) => (
                    <div key={index}>
                        <li>{todo}</li>
                        <span onClick={() => handleDeleteTodo(index)}>Delete</span>
                    </div>
                ))}
            </ul>
        </>

    )
}

export default TodoList