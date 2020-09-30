var initialState = {
    by: 'name',
    value: 1
}

var myReducer = (state = initialState, action) => {
    if (action.type === 'SORT_NAME') {
        return {
            ...state,
            // sort: {
                by: action.sort.by,
                value: action.sort.value
            // }
        }
    }
    return state;
}

export default myReducer;