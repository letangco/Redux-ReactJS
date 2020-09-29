const {createStore,combineReducers} = require('redux');

const initialState = {
    products: {
        items: []
    },
    cart: {
        items: [],
        total: 0
    }
};

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
        case 'REMOVE_FROM_CART':
        case 'FETCH_PRODUCTS_SUCCESS':
        case 'FETCH_PRODUCTS_FAIL':
        default: 
            return state;
        
    }
}