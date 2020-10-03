
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
    };
};

export const toggleForm =()=>{
    return {
        type: types.TOGGLE_FORM
    };
};
export const openForm =()=>{
    return {
        type: types.OPEN_FORM
    };
};
export const closeForm =()=>{
    return {
        type: types.CLOSE_FORM
    };
};
// Cần truyền vào tham số là id cần được cập nhật
export const UpdateStatus =(id)=>{
    return {
        type: types.UPDATE_STATUS_TASK,
        id: id
    }
}

export const deleteTask = (id)=>{
    return {
        type: types.DELETE_TASK,
        id:id
    }
}