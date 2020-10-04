import {combineReducers} from 'redux';
import task from './tasks';
import isDisplayForm from './isDisplayForm';
import search from './search';
import filterTable from './filterTable';
// Trả về các state để sử dụng
const myReducer = combineReducers({
    task : task,
    isDisplayForm: isDisplayForm,
    search:  search,
    filterTable: filterTable
});

export default myReducer;