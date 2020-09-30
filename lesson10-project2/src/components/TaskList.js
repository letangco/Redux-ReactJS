import React, {Component } from 'react';
import TaskItem from './TaskItem';
class TaskList extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      filterName: '', // trùng tên với name của input
      filterStatus: 2 // trùng tên với name của select
    };
  }
  onChangeStatus = (value)=>{
    this.props.onAppChangeStatus(value);
    
  }
  onDeleteItem = (value) =>{
    this.props.onDeleteItemApp(value);
    // console.log(value);
  }
  onOpenForm = (value) =>{
    this.props.onOpenFormApp(value);
  }
  onChange =(event)=>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(name === 'filterName'? value: this.state.filterName,
                      name === 'filterStatus'? value: this.state.filterStatus
                      );
    // this.props.onFilter(name === 'filterName' ? value: this.state.filterName, name==="filterStatus" ? value :  this.state.filterStatus);
    this.setState({
      [name]: value
    });

  }
    render()
    {
      // var {tasks} = this.props;
      var tasks = this.props.tasks;
      var filterName = this.state.filterName;
      var filterStatus = this.state.filterStatus;
      var elmTasks = tasks.map((task,index)=>{
        return <TaskItem key={task.id} index={index} task = {task} onChangeStatus = {this.onChangeStatus} 
                          onDeleteItem = {this.onDeleteItem} onOpenForm = {this.onOpenForm}/>
      })
        return(
            <div className="row mt-15"> 
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Trạng thái</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <input type="text" className="input input-default" name="filterName" value={filterName} onChange = {this.onChange}></input>
                  </td>
                  <td>
                          <select className = "form-control" name ="filterStatus"  value = {filterStatus} onChange = {this.onChange}>
                            <option value={2} >Tất cả</option>
                            <option value = {1} >Kích hoạt</option>
                            <option value = {0} >Ẩn</option>
                          </select>
                  </td>
                  <td></td>
                </tr>
                {elmTasks }
                
                {/* <TaskItem />
                <TaskItem /> */}

                </tbody>
                </table>
          </div>  
        );
    }
}
export default TaskList;