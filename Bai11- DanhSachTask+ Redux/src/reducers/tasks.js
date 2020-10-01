import * as types from '../constants/ActionTypes';
import { v4 as uuidv4 } from "uuid";
var data = JSON.parse(localStorage.getItem('tasks'));

// Tương đưng như Task = [] ở App.js
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL: {
            return state;
        }
        case types.ADD_TASK: {
            // console.log(action);
            let updateState = state;
            let newTask = {
                id: uuidv4(),
                name: action.task.name,
                status: action.task.status
            }
            updateState.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...updateState];
        }
        default:
            return state;
    }
}

export default myReducer;