import * as types from '../constants/actionTypes';
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

export const deleteTask = (id)=>{
    return {
        type: types.DELETE_TASK,
        id:id
    }
}
export const handleChangeStatus = (id)=>{
    return {
        type: types.HANDLE_CHANGE_STATUS,
        id:id
    }
}

export const onHandleGetOnTask = ()=>{
    return {
        type: types.GET_ALL_TASK
    }
}
export const onHandleGetActiveTask =()=>{
    return  {
        type: types.GET_ACTIVE_TASK
    }
}
export const onHandleGetCompleteTask =()=>{
    return  {
        type: types.GET_COMPLETE_TASK
    }
}