import * as types from '../constants/actionTypes';
const data = JSON.parse(localStorage.getItem('todoList'));
// var initialState = data ? {data: data, sort:"all"} : {data: [],sort:"all"};
var initialState = data ? data : [{ sort: "all" }];


var reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TASK: {
            let updateState = state;
            updateState.push(action.task);
            localStorage.setItem('todoList', JSON.stringify(updateState));
            return [...updateState];
        }
        case types.RENDER_LIST_TASK: {
            // console.log('render: ', state)
            return state;
        }
        case types.DELETE_TASK: {
            console.log('delete: ', action.id);
            var indexDelete;
            for (let i = 1; i < data.length; i++) {
                if (action.id === data[i].id) {
                    console.log('da tim thay')
                    indexDelete = i;
                }
            }
            console.log(indexDelete)
            const confirmDlt = window.confirm('Do you want Delete task?');
            if (confirmDlt === true) {
                var cloneState = state;
                cloneState.splice(indexDelete, 1);
                localStorage.setItem('todoList', JSON.stringify(cloneState));
                return [...cloneState];
            }
            return state;
        }
        case types.HANDLE_CHANGE_STATUS: {
            var index;
            var value = action.id;
            // Tìm vị trí cần updates chỉnh sửa status
            for (var i = 1; i < state.length; i++) {
                if (state[i].id === value) {
                    index = i;
                }
            }
            if (index !== null) {
                var cloneTask = { ...state[index] };
                cloneTask.status = !cloneTask.status;
                // Copy phần tử tại index rồi sau đó cập nhật lại status tại vị trí index
                state[index] = {
                    ...state[index],
                    status: !state[index].status
                }
                localStorage.setItem('todoList', JSON.stringify(state));
                return [...state]
            }
            return { ...state };
        }

        case types.GET_ALL_TASK: {
            // Copy phần tử tại index rồi sau đó cập nhật lại status tại vị trí index
            state[0] = {
                ...state[0],
                sort: "all"
            }
            localStorage.setItem('todoList', JSON.stringify(state));
            return [...state]
        }
        case types.GET_ACTIVE_TASK: {
            // Copy phần tử tại index rồi sau đó cập nhật lại status tại vị trí index
            state[0] = {
                ...state[0],
                sort: "active"
            }
            localStorage.setItem('todoList', JSON.stringify(state));
            return [...state]
        }
        case types.GET_COMPLETE_TASK: {
            // Copy phần tử tại index rồi sau đó cập nhật lại status tại vị trí index
            state[0] = {
                ...state[0],
                sort: "complete"
            }
            localStorage.setItem('todoList', JSON.stringify(state));
            return [...state]
        }
        default:
            return state;
    }
}
export default reducer;