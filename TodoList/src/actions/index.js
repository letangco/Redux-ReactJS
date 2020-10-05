import * as types from '../constants/actionTypes';

export const onAction1 = ()=>{
    return {
        type: types.ACTION
    }
}

export const onAddTask = (task)=>{
    return {
        type: types.ADD_TASK,
        task: task
    }
}

export const renderListTask = (tasks) => {
    return {
        type: types.RENDER_LIST_TASK
    }
}