import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill } from 'react-icons/bs'; // Add this line for the icon
import { BsFillTrashFill } from 'react-icons/bs'; // Import trash can icon
import './App.css'; // Import the CSS file for styles

function Home() {
    const [todos, setTodos] = useState([]); // Initialize state

    useEffect(() => {
        axios.get('http://localhost:3001/get')  // Fetch todos from the server
        .then(result => setTodos(result.data))
        .catch(err => console.log(err));  // Handle errors if any
    }, []);

    const handleEdit = (id) => {
        axios.put(`http://localhost:3001/update/${id}`)  // Correct string interpolation
        .then(result => location.reload())
        .catch(err => console.log(err));  // Handle errors if any
    };
const handleDelete = (id)=> {
    axios.delete(`http://localhost:3001/delete/${id}`)  // Correct string interpolation
    .then(result => location.reload())
    .catch(err => console.log(err));  // Handle errors if any
}
        return (
        <div className="home">
            <h2>TodoList-App</h2>
            <Create />
            {
                todos.length === 0 
                ? <div><h2>No Record</h2></div>  // If no todos, show "No Record"
                : todos.map((todo, index) => ( // Iterate over todos to display them
                    <div key={index} className='task'> 
                        <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                            {/* Conditional rendering for task completion */}
                            {todo.done 
                                ? <BsFillCheckCircleFill className="icone" />
                                : <BsCircleFill className="icone" />
                            }
                            <p className={todo.done ? "line_through" : ""}>{todo.task}</p>  {/* Display the task */}
                        </div>
                        <div>
                            <span><BsFillTrashFill className="icone"  onClick={
                                () => handleDelete(todo._id)}/></span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Home;
