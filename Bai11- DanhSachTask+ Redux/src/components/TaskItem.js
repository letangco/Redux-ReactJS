import React, {Component } from 'react';
import {connect} from 'react-redux';
import *as actions from '../actions/index';
class TaskItem extends Component{
    ChangeStatus(){
        this.props.onUpdateStatus(this.props.task.id);
        
    }
    deleteItem = ()=>
    {
        this.props.onDeleteTask(this.props.task.id);
        // console.log(this.props.task.id);
        // console.log(1);
    }
    openForm = () =>{
        this.props.onOpenForm(this.props.task.id);
        this.props.onToggleEditTask(this.props.task.id);
    }
    render()
    {
        var task = this.props.task;
        var index = this.props.index;
        return(
            <tr>
                  <td>{index+1}</td>
                    <td>{task.name}</td>
                    <td>
                        <div className="text-center">
                        <span className={task.status === true ? 'label label-success' : 'label label-danger'} 
                        onClick = {() => this.ChangeStatus()}>{task.status ===true ? 'Kích hoạt' : 'Ẩn'}</span>
                        </div>
                    </td>
                    <td>
                        <div className= "text-center">
                        <button type="button" className="btn btn-warning" onClick = {this.openForm}>
                            <span className="fa fa-edit"></span>Sửa
                        </button>
                        <button type="button" className="btn btn-danger" onClick = {this.deleteItem}>
                            <span className="fa fa-trash mr-5"></span>Xóa
                        </button>
                        </div>
                    </td>
            </tr>
        );
    }
}

const matchStateToProps = (state)=>{
    return {
        
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onUpdateStatus : (id)=>{
            dispatch(actions.UpdateStatus(id));
        },
        onDeleteTask: (id) =>{
            dispatch(actions.deleteTask(id));
        },
        onToggleEditTask :(id)=>{
            dispatch(actions.onToggleEditTask(id));
        }
    }
}

export default connect(matchStateToProps,mapDispatchToProps)(TaskItem);