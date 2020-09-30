const {createStore} = require('redux');
const reducer = require('./reducers/combine');
// const initialState = {
//     products: {
//         items: []
//     },
//     cart: {
//         items: [],
//         total: 0
//     }
// };

const initProductState = {
    item:[]
};
const productReducer=(state = initProductState, action)=>{
    return state;
};
const initCartState = {
    items: [],
    total: 0
};
const cartReducer = (state = initCartState,action)=>{
    return state;
}

// const reducer = (state = initialState,action) =>{
//     switch(action.type){
//         case 'ADD_TO_CART':
//         case 'REMOVE_FROM_CART':
//         case 'FETCH_PRODUCTS_SUCCESS':
//         case 'FETCH_PRODUCTS_FAIL':
//         default: 
//             return state;
        
//     }
// }



const store = createStore(reducer);
console.log(store.getState());