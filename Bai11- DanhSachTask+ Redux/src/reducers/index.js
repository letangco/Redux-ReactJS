import {combineReducers} from 'redux';
import task from './tasks';
const myReducer = combineReducers({
    task : task
});

export default myReducer;