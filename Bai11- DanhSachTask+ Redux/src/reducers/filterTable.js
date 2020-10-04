import * as types from '../constants/ActionTypes';
var initialState = {
    name: '',
    status: 2
};

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_TABLE:{
            action.filter.status = parseInt(action.filter.status,10);
            return action.filter;
        }
        case types.RESET_FILTER_TASK:{
            // var cloneFilter = {name:'',status:2}
            // state = cloneFilter;
            // return [...state];

            var cloneFilter = {...state};
            cloneFilter.name = ''
            cloneFilter.status = 2;
            console.log(cloneFilter);
            return {...cloneFilter}

        }
        default:
            return state;
    }
}

export default myReducer;