function reducer(arr, callbackFuction, initValue){
    if (initValue === undefined || initValue ===''){
        console.log("Initial Value is Error!!!");
        initValue = arr[0];
        arr = arr.slice(1);
    }
    for (const item of arr) {
        initValue = callbackFuction(initValue , item);
    }
    return initValue;
}

// console.log(reducer([1,2,3,4,5,6], (sum, num)=>{
//     return sum+num
// },1));

const actions = [
    {type: 'CHANGE_SPEED', payload: 3},
    {type: 'TURN_OFF'},
    {type: 'TURN_ON'}
];

const initState = {
    speed: 0,
    lastSpeed: 1
};

console.log(
    reducer(actions, (state, action)=>{
        if (action.type ==='CHANGE_SPEED'){
            return{
                ...state,
                speed: action.payload
            };
        }
        if(action.type==='TURN_OFF'){
            return {
                ...state,
                speed: 0,
                lastSpeed: state.speed
            }
        }
        if(action.type ==='TURN_ON'){
            return {
                ...state,
                speed: state.lastSpeed
            }
        }
    }, initState)
);

