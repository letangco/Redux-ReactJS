import {createStore} from 'redux';
// import action
import {status, sort} from './actions/index';

import myReducer from './reducers/index';

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

const store = createStore(myReducer);

console.log('Default: ',store.getState());
// Gửi action lên cho reducer phân tích
store.dispatch(status());
store.dispatch(sort({by:'name',value:-1}));
console.log("Sort Action",store.getState());