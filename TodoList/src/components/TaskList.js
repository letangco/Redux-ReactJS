import React from 'react';
import '../App.css';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';
function TaskList() {

    const data = useSelector(state => state.task);
    console.log(data[0].sort)
    // var elmTask = data.map(item => {
    //     console.log(item)
    //     return <TaskItem task={item} key={item.id} />
    // });
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
    // console.log(spliceData(data, data[0].sort))
    var elmTask = spliceData(data,data[0].sort).map(item => {
        console.log(item)
        return <TaskItem task={item} key={item.id} />
    });
    return (
        <div className="item_task">
            <ul>
                {elmTask}
            </ul>
        </div>
    );
}

export default TaskList;



