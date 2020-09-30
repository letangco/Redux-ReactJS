import status from './status';
import sort from './sort';
import {combineReducers} from 'redux';

const myReducer = combineReducers({
    status: status,
    sort: sort
});
// var initialState = {
//     status: false,
//     sort:{
//         by: 'name',
//         value: 1
//     }
// }

// // Thực hiện công việc thay đổi status
// var action = {
//     type: 'TOGGLE_STATUS'
// };
// // Thực hiện công việc sắp xếp tên từ z->a
// var sortAction = {
//     type: 'SORT_NAME',
//     sort: {
//         by:'name',
//         value: -1
//     }
// }

// var myReducer = (state = initialState, action) =>{
//     if(action.type === 'TOGGLE_STATUS'){
//         return{
//             ...state,
//             status : !state.status
//         }
//     }
//     if(action.type ==='SORT_NAME'){
        
//         return {
//             ...state,
//             sort : {
//                 by: action.sort.by,
//                 value: action.sort.value
//             }
//         }
        
//     }
//     return state;
// }

export default myReducer;