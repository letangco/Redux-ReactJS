import * as types from '../constants/actionTypes';

var initialState = '';

var reducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.ACTION:{
            console.log(action.type);
            return state;
        }
    
        default:
            return state;
    }
}
export default reducer;