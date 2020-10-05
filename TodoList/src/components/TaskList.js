import React from 'react';
import '../App.css';
import TaskItem from './TaskItem';
function TaskList() {
    
    return (
        <div className="item_task">
            <ul>
                <TaskItem />
            </ul>
        </div>
    );
}
export default TaskList;



