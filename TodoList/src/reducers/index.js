import {combineReducers} from 'redux';
import task from './tasks';
// Trả về các state để sử dụng
const reducer = combineReducers({
    task: task
});

export default reducer;