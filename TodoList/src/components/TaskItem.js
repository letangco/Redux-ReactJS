import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete';
import '../App.css';
function TaskItem() {
    const [checked, setChecked] = useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    // Get data task from localStorage
    const data = useSelector(state => state.task);
    console.log(data);
    var index = 1;
    var elmTask = data.map(item => {
        return <li key={index++}>
        <div className="select_task">
            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </div>
        <div className="name_task">
            <p>{item}</p>
        </div>
        <div className="btn_delete_task">
            <DeleteIcon className="delete_task" fontSize="large" color="primary" />
        </div>
    </li>
    });
    return (
        // <li>
        //     <div className="select_task">
        //         <Checkbox
        //             checked={checked}
        //             onChange={handleChange}
        //             inputProps={{ 'aria-label': 'primary checkbox' }}
        //         />
        //     </div>
        //     <div className="name_task">
        //         <p>Learning ReactJS</p>
        //     </div>
        //     <div className="btn_delete_task">
        //         <DeleteIcon className="delete_task" fontSize="large" color="primary" />
        //     </div>
        // </li>
        elmTask
    );
}
export default TaskItem;



