const {combineReducers} = require('redux');
const cartReducer = require('./card');
const productReducer = require('./product');

const reducer = combineReducers({
    product: productReducer,
    card: cartReducer
});

module.exports = reducer;