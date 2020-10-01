
import * as types from '../constants/ActionTypes';
export const listAll=()=>{
    return {
        type: types.LIST_ALL
    };
};

// Tham số là 1 cái task được gửi từ component
export const addTask =(task)=>{
    return {
        type:types.ADD_TASK,
        task:task
    }
}