import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handelNewTaskChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveUp(index) {
    if(index!=0){
          let temp = tasks;
    [temp[index-1],temp[index]] = [temp[index],temp[index-1]];
    setTasks([...temp])  
    }

  }

  function moveDown(index) {
    let temp = tasks;
    if(index!=(tasks.length-1)){
        [temp[index+1], temp[index]] = [temp[index], temp[index+1]];
        setTasks([...temp])
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div className="input-controls">
        <input
          type="text"
          value={newTask}
          onChange={handelNewTaskChange}
          placeholder="Enter new task"
        />
        <button onClick={addTask}>AddTask</button>
      </div>

      <div className="saved-list">
        {tasks.map((task, index) => (
          <div className="saved-item">
            <span className="task">{task}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => moveUp(index)}>MoveUp</button>
            <button onClick={() => moveDown(index)}>MoveDown</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
