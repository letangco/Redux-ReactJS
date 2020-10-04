import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as action from '../actions/index';
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: '', // trùng tên với name của input
      filterStatus: 2 // trùng tên với name của select
    };
  }

  onOpenForm = (value) => {
    alert("Open edit")
    this.props.onOpenFormApp(value);
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
    var filter = {
      name: name === 'filterName' ? value : this.state.filterName,
      status: name === 'filterStatus' ? value : this.state.filterStatus
    }
    this.props.onFilterTable(filter);
  }
  resetFilter = ()=>{
    this.props.onResetFilterTask();
  }
  render() {
    // Lay task từ store
    var tasks = this.props.todos;
    var filterTable = this.props.filterTable;
    var filterName = this.state.filterName;
    var filterStatus = this.state.filterStatus;
    // Chức năng filter onTable

    if (filterTable) {
      if (filterTable.name) {
        tasks = tasks.filter((task1) => {
          return task1.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1;
        });
      }
      tasks = tasks.filter((task1) => {
        if (filterTable.status === 2) {
          return task1;
        }
        else {
          return task1.status === (filterTable.status === 1 ? true : false);
        }
      });
    }

    var elmTasks = tasks.map((task, index) => {
      return <TaskItem key={task.id} index={index} task={task} onOpenForm={this.onOpenForm} />
    })
    return (
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
              <td>
              </td>
              <td>
                <input type="text" className="input input-default" name="filterName" value={filterTable.name} onChange={this.onChange}></input>
              </td>
              <td>
                <select className="form-control" name="filterStatus" value={filterTable.status} onChange={this.onChange} >
                  <option value={2} >Tất cả</option>
                  <option value={1} >Kích hoạt</option>
                  <option value={0} >Ẩn</option>
                </select>
              </td>
              <td className='text-center'>
                <button type="button" className="btn btn-primary" onClick={this.resetFilter}>
                  <span className="fa fa-trash mr-5"></span>Reset
                  </button>
              </td>
            </tr>
            {elmTasks}

            {/* <TaskItem />
                <TaskItem /> */}

          </tbody>
        </table>
      </div>
    );
  }
}
// State này ở trên store
const mapStateToProps = (state) => {
  return {
    // gọi lại state.task là cái key của reducer index.js
    // Đặt tên tasks cần phải giống với props gọi ở trên.
    todos: state.task,
    filterTable: state.filterTable
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilterTable: (filter) => {
      dispatch(action.filterTask(filter));
    },
    onResetFilterTask: ()=>{
      dispatch(action.resetFilterTask());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);