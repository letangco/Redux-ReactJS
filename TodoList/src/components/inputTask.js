import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import * as action from '../actions/index';
function InputTask() {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState('');
  function onHandleChangeTask(event) {
    setTaskName(event.target.value);
    console.log(taskName)
  }

  function onSubmit(event){
    event.preventDefault();
    dispatch(action.onAddTask(taskName));
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