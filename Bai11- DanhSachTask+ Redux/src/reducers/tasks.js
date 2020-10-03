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
        case types.TOGGLE_FORM: {
            return state;
        }
        case types.OPEN_FORM: {
            return state;
        }
        case types.CLOSE_FORM: {
            return state;
        }
        case types.UPDATE_STATUS_TASK: {
            console.log(action);
            var index;
            var value = action.id;
            // Tìm vị trí cần updates chỉnh sửa status
            for (var i = 0; i < state.length; i++) {
                if (state[i].id === value) {
                    console.log("vị trí: " + i);
                    index = i;
                }
            }
            console.log(index);
            if (index !== null) {
                var cloneTask = {...state[index]};
                cloneTask.status = !cloneTask.status;
                // state[index] = cloneTask;

                // Copy phần tử tại index rồi sau đó cập nhật lại status tại vị trí index
                state[index] ={
                    ...state[index],
                    status: !state[index].status
                }
                localStorage.setItem('tasks', JSON.stringify(state));
                return [...state]
            }
            return state;
        }
        default:
            return state;
    }
}

export default myReducer;