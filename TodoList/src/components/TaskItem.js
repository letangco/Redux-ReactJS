import React from 'react';
import { useDispatch } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete';
import *as actions from '../actions/index';
import '../App.css';
function TaskItem(props) {
    const dispatch = useDispatch();
    // const data  = useSelector(state => state.task);
    var task = props.task;
    const handleChangeStatus = () => {
        dispatch(actions.handleChangeStatus(task.id))
    };

    function onDeleteTask() {
        dispatch(actions.deleteTask(task.id));
    }
    return (
        <li>
            <div className="select_task">
                <Checkbox
                    checked={task.status}
                    onChange={handleChangeStatus}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </div>
            <div className="name_task">
                <p className={task.status === true ? "line_through" : ""}>{task.task}</p>
            </div>
            <div className="btn_delete_task">
                <button className="btn-delete-task" onClick={onDeleteTask}>
                    <DeleteIcon className="delete_task" fontSize="large" color="primary" />
                </button>
            </div>
        </li>
    );
}
export default TaskItem;



