import {combineReducers} from 'redux';
import task from './tasks';
import isDisplayForm from './isDisplayForm';
const myReducer = combineReducers({
    task : task,
    isDisplayForm: isDisplayForm
});

export default myReducer;