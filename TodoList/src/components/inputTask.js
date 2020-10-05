import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from 'react-redux';
import * as action from '../actions/index';
import { v4 as uuidv4 } from 'uuid';
function InputTask() {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState('');
  const [statusTask] = useState(false);
  function onHandleChangeTask(event) {
    setTaskName(event.target.value);
  }

  function onSubmit(event){
    event.preventDefault();
    var newTask = {
      id: uuidv4(),
      task: taskName,
      status: statusTask
    }
    dispatch(action.onAddTask(newTask));
    setTaskName('');
  }
  return (
    <div className="input_task">
      <div className="select_all">
        <FontAwesomeIcon icon={faChevronDown} size='2x' />
      </div>
      <form className="editText" onSubmit={onSubmit}> 
        <input className="" placeholder="What needs to be done?" value={taskName} onChange={onHandleChangeTask} />
      </form>
    </div>
  )
}
export default InputTask;