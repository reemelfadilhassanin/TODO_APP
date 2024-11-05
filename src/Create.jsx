import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styles
import axios from 'axios'

const Create = () => {
  const [task, setTask] = useState('')
  const handleAdd = () => {
axios.post('http://localhost:3001/add', {task:task})
.then(result => location.reload())
.catch(err => console.log(err))
  }
  return (
    <div className="create-form"> {/* Add the create-form class here */}
      <input type="text" placeholder='Add a new task'  onChange={(e) => setTask(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Create;