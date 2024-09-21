import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

function App() {

    const tasks_1:Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true },
        {id: 2, title: "JS", isDone: true },
        {id: 3, title: "React", isDone: true }
    ]

    const tasks_2:Array<TaskType> = [
        {id: 4, title: "Monitor", isDone: true },
        {id: 5, title: "Keyboard", isDone: false },
        {id: 6, title: "Mouse", isDone: true }
    ]


    return (
        <div className="App">
            <Todolist title={"What to learn"} tasks={tasks_1}/>
            <Todolist title={"What to buy"} tasks={tasks_2}/>
        </div>
    );
}

export default App;
