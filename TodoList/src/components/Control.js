import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import *as actions from '../actions/index';

function Control() {
    var dispatch =useDispatch();
    // Get data task from localStorage
    const data = useSelector(state => state.task);

    function onGetAllTask(){
        // console.log('GetaLLtASL')
        dispatch(actions.onHandleGetOnTask())
        dispatch(actions.renderListTask())
    }

    function onGetActiveTask (){
        dispatch(actions.onHandleGetActiveTask());
        dispatch(actions.renderListTask())
    }
    function onGetCompleteTask (){
        dispatch(actions.onHandleGetCompleteTask());
        dispatch(actions.renderListTask())
    }

    function spliceData(arr, sort){
        var newData=[];
        switch(sort){
            case "all":{
                for (let i=1; i<arr.length; i++){
                    if(arr[i].status===true|| arr[i].status===false){
                        newData.push(arr[i]);
                    }
                }
                break;
            }
            case "complete":{
                for (let i=1; i<arr.length; i++){
                    if(arr[i].status===true){
                        newData.push(arr[i]);
                    }
                }
                break;
            }
            case "active":{
                for (let i=1; i<arr.length; i++){
                    if(arr[i].status===false){
                        newData.push(arr[i]);
                    }
                }
                break;
            }
            default:
                break;
        }
        return newData;
    }

    return (
        <div className="info_task">
            <div className="total_quantity_task">
                <p>{parseInt(spliceData(data,data[0].sort).length)} items left</p>
            </div>
            <div className="toggle_filter_task">
                <button onClick = {onGetAllTask}>All</button>
                <button onClick = {onGetActiveTask}>Active</button>
                <button onClick = {onGetCompleteTask}>Completed</button>
            </div>
            <div className="action_clear">
                <button>Clear Completed</button>
            </div>
        </div>
    );
}

export default Control;

