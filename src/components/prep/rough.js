import React, { useState } from "react";

const TodoList = () => {
    const [todo, setTodo] = useState();
    const [todoList, setTodoList] = useState(["apple", "banana", 'lemon', 'Orange', 'WaterMelon']);

    const handleAddToDo = () => {
        // setTodoList([...todoList, todo])
        setTodoList((prev) => [...prev, todo]);
        setTodo("")
    };

    const handleChange = (e) => {
        console.log("eee", e.target.value)
        setTodo(e.target.value);

    };
    // 'apple' --> apple[2] ==> p


    // Lets say I want to delete the 3 rd element
    // 3 !=== 3  -> falsy value, so this wont get added
    const handleDeleteTodo = (index) => {
        console.log("index", index)
        // apple 0, orange  1, banana  2
        const filterTodoList = todoList.filter((_,i) => i !== index );
        console.log("filterTodoList", filterTodoList)
        setTodoList(filterTodoList);
    }

    const ulStyles = { width: '400px' }
    console.log("todoList", todoList)
    return (
        <div>
            <input type="text" placeholder="" onChange={handleChange} value={todo} />
            <button onClick={handleAddToDo}>Add here</button>
            <ul style={ulStyles}>
                {todoList.map((todo, index) => (
                    <div style={{ display: "flex", justifyContent: 'space-between' }} key={index}>
                        <li>{todo}</li>
                        <span onClick={() => handleDeleteTodo(index)}>Delete</span>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
