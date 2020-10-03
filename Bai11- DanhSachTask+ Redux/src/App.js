import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { v4 as uuidv4 } from "uuid";
import {connect} from 'react-redux';
import * as action from './actions/index';
// import DemoRandom from './components/random';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskEditing: null,
      filter: {
        name: '',
        status: 2
      },
      // filterName: '',
      // filterStatus: '2',
      keyword: '',
      sortBy: '',
      sortValue: null
    }
    this.onGenerateData = this.onGenerateData.bind(this);
  }

  onGenerateData() {
    var tasks = [
      {
        id: uuidv4(),
        name: 'Learn C/C++',
        status: true
      },
      {
        id: uuidv4(),
        name: 'Learn Java',
        status: false
      },
      {
        id: uuidv4(),
        name: 'Learn React',
        status: true
      }
    ];
    // console.log(tasks);
    // Xuat hiện bất động bộ khi ấn lưu giá trị
    this.setState({
      tasks: tasks
    }, () => { console.log(this.state.tasks) });
    // Lưu vào storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  // ComponentWillMount khi F5 trang thì nó sẽ được gọi đầu tiên và được gọi duy nhất 1 lần
  onToggleForm = () => {
    // if (this.state.isDisplayForm === true && this.state.taskEditing !== null) {
    //   this.setState({
    //     isDisplayForm: true,
    //     taskEditing: null
    //   });
    // } else {
    //   this.setState({
    //     isDisplayForm: !this.isDisplayForm,
    //     taskEditing: null
    //   });
    // }
    this.props.onToggleForm();
    console.log(this.props.isDisplayForm);
  }
  onCloseForm = () => {
    this.props.onToggleForm();
  }
  // onShowForm = () => {
  //   this.setState({
  //     isDisplayForm: true
  //   });
  // }
  onSubmit = (data) => {
    var { tasks } = this.state;
    if (data.id === '') {
      data.id = uuidv4();
      tasks.push(data);
    }
    else {
      // Editing
      var index;
      for (var i = 0; i < this.state.tasks.length; i++) {
        if (this.state.tasks[i].id === data.id) {
          console.log("vị trí: " + i);
          // console.log(1);
          index = i;
        }
      }
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
      taskEditing: null
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(data);
  }
  // onAppChangeStatus = (value) => {
  //   console.log(value);
  //   // console.log(this.state.tasks.id);
  //   var index;
  //   for (var i = 0; i < this.state.tasks.length; i++) {
  //     if (this.state.tasks[i].id === value) {
  //       console.log("vị trí: " + i);
  //       // console.log(1);
  //       index = i;
  //     }
  //   }
  //   console.log(index);
  //   var task = this.state.tasks;
  //   if (index !== null) {
  //     task[index].status = !task[index].status;
  //     this.setState({
  //       tasks: task
  //     });
  //     localStorage.setItem('tasks', JSON.stringify(task));
  //   }
  // }
  onDeleteItemApp = (value) => {
    console.log(value);
    var index;
    var i;
    for (i = 0; i < this.state.tasks.length; i++) {
      if (this.state.tasks[i].id === value) {
        index = i;
        console.log("position: " + index);
        // this.state.tasks.splice(index,1);

      }
    }
    const r = window.confirm("Do you want to Delete Item?");
    if (r === true) {
      var tasks = this.state.tasks;
      if (index !== null) {
        tasks.splice(index, 1);
        this.setState({
          tasks: tasks
        });
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
      this.onCloseForm();
    }


  }
  // onOpenFormApp = (value) => {
  //   // console.log(value);
  //   this.onToggleForm();
  //   var i = 0;
  //   var index = 0;
  //   for (i; i < this.state.tasks.length; i++) {
  //     if (this.state.tasks[i].id === value) {
  //       index = i;
  //     }
  //   }
  //   var tasks = this.state.tasks;
  //   var taskEditing1 = tasks[index];
  //   // Bất đồng bộ
  //   this.setState({
  //     taskEditing: taskEditing1
  //   });

  // }
  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    })

  }
  onSearch = (value) => {
    console.log(value);
    this.setState({
      keyword: value.toLowerCase()
    });
  }

  onSort = (sortBy, sortValue) => {
    // console.log(sortBy, '-', sortValue);
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    }, () => console.log(this.state));
  }


  render() {
    var isDisplayForm = this.props.isDisplayForm;
    var taskEditing = this.state.taskEditing;
    // var filter = this.state.filter;
    // var keyword = this.state.keyword;
    var sortBy = this.state.sortBy;
    var sortValue = this.state.sortValue;
    // if (filter) {
    //   if (filter.name) {
    //     tasks = tasks.filter((task1) => {
    //       return task1.name.toLowerCase().indexOf(filter.name) !== -1;
    //     });
    //   }
    //   tasks = tasks.filter((task1) => {
    //     if (filter.status === 2) {
    //       return task1;
    //     }
    //     else {
    //       return task1.status === (filter.status === 1 ? true : false);
    //     }
    //   });
    // }


    // if (keyword) {
    //   tasks = tasks.filter((tasks) => {
    //     return tasks.name.toLowerCase().indexOf(keyword) !== -1;
    //   });
    // }
    // Sắp xếp theo name
    // if (sortBy === 'name') {
    //   tasks.sort((a, b) => {
    //     if (a.name > b.name) return sortValue;
    //     else if (a.name < b.name) return -sortValue;
    //     else return 0;
    //   });
    // }
    // else {
    //   tasks.sort((a, b) => {
    //     if (a.status > b.status) return -sortValue;
    //     else if (a.status < b.status) return sortValue;
    //     else return 0;
    //   });
    // }

    var elmTaskForm = isDisplayForm === true ?
      <TaskForm taskEditing={taskEditing}  /> : '';
    return (
      <div className="container">
        <div className="text-center">
          <h1>QUẢN LÝ CÔNG VIỆC</h1>
        </div>
        <div className="row">
          {/* <TaskForm /> */}
          {elmTaskForm}

          <div className={isDisplayForm === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
              <span className="fa fa-plus mr-5"></span>
              Thêm công việc
            </button>
            <button type="button" className="btn btn-success" onClick={this.onGenerateData}>
              <span className="fa fa-plus mr-5"></span>
              GenerateData
            </button>
            <Control onSearch={this.onSearch} onSort={this.onSort} sortBy={sortBy} sortValue={sortValue} />

            <br />
            <TaskList
              // tasks={tasks}
              onDeleteItemApp={this.onDeleteItemApp}
              onOpenFormApp={this.onOpenFormApp}
              onFilter={this.onFilter}
            />
          </div>
        </div>
        {/* <DemoRandom /> */}

      </div>
    );
  }
}

// State là giá trị của store true/false
const mapStateToProps = (state) =>{
  return {
    isDisplayForm: state.isDisplayForm
  };
}

const mapDispatchToProps =(dispatch, props)=>{
  return  {
    onToggleForm : ()=>{
      dispatch(action.toggleForm());
    },
    onCloseForm: () =>{
      dispatch(action.closeForm());
    },
    onOpenForm : ()=>{
      dispatch(action.openForm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
