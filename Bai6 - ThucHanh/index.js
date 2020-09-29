const {createStore} = require('redux');
// const store  = createStore();

const actions = [
    {type: 'CHANGE_SPEED' , payload: 3},
    {type: 'TURN_OFF'},
    {type: 'TURN_ON'}
];

const turnOff =()=> ({
    type: 'TURN_OFF'
});
const turnOn = ()=>({
    type: 'TURN_ON'
});
const changeSpeed =(speed)=> ({
    type: 'CHANGE_SPEED',
    payload: speed
});


const initialState = {
    speed: 0,
    lastSpeed: 1
};

// reduce(actions, (state, action)=>{
//     if (action.type ==='CHANGE_SPEED'){
//         return {
//             ...state,
//             speed: action.payload
//         };
//     }
//     if(action.type === 'TURN_OFF'){
//         return {
//             ...state,
//             speed: 0,
//             lastSpeed: state.speed
//         }
//     }
//     if(action.type === 'TURN_ON'){
//         return {
//             ...state,
//             speed: state.lastSpeed
//         }
//     }
// }, initialState);


// Lấy initial State hiện đang có
const reducer = (state =initialState, action)=>{
    console.log(action);
    if (action.type ==='CHANGE_SPEED'){
        return {
            ...state,
            speed: action.payload
        };
    }
    if(action.type === 'TURN_OFF'){
        return {
            ...state,
            speed: 0,
            lastSpeed: state.speed
        }
    }
    if(action.type === 'TURN_ON'){
        return {
            ...state,
            speed: state.lastSpeed
        }
    }
    return state;
}

const store = createStore(reducer);
// Trả về một state ban đầu
console.log(store.getState());
// Truyền một cái action vào trong state
store.dispatch(changeSpeed(3));

store.dispatch(changeSpeed(2));
console.log(store.getState());
store.dispatch({type: 'TURN_OFF'});
console.log(store.getState());
store.dispatch({type: 'TURN_ON'});
console.log(store.getState());
store.dispatch({type: 'TURN_OFF'});
// Thay đổi State
console.log(store.getState());

