import * as types from '../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('tasks'));

// Tương đưng như Task = [] ở App.js
var initialState = data? data : [];

var myReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.LIST_ALL:{
            return state;
        }
        default:
            return state;
    }
}

export default myReducer;