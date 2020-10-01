import React, { Component } from 'react';
import {connect} from 'react-redux';
// Import action của redux
import *as actions from '../actions/index';
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: true
    }
  }
  // Khi taskform được mở lên thì sẽ gọi hàm componentWillMount/ Hàm này gọi duy nhất 1 lần
  componentWillMount() {
    if (this.props.taskEditing) {
      this.setState({
        id: this.props.taskEditing.id,
        name: this.props.taskEditing.name,
        status: this.props.taskEditing.status
      });
    }
  }
  //Khi muốn Edit khi đang mở form thêm công việc, thì componentWillReceiveProps đang thực hiện
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    // Gọi lại taskEditing bên App.js trong thẻ TaskForm
    if (nextProps && nextProps.taskEditing) {
      console.log("thêm = > sửa");
      this.setState({
        id: nextProps.taskEditing.id,
        name: nextProps.taskEditing.name,
        status: nextProps.taskEditing.status
      });
    } else if (nextProps.taskEditing == null) {
      console.log("sửa = > thêm");
      this.setState({
        id: '',
        name: '',
        status: ''
      });
    }
  }
  closeForm() {
    this.props.onToggleForm();
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === 'status') {
      value = target.value === 'true' ? true : false ;
      // console.log(1)
    }
    this.setState({
      [name]: value
    });
  }
  onSubmit = (event) => {
    event.preventDefault();
    // Go store Redux to get data
    this.props.onAddTask(this.state);
    // Xóa dữ liệu đã thêm
    this.onClear();
    // Đóng form khi thêm mới công việc
    this.props.onToggleForm();
  }
  onClear = () => {
    this.setState({
      name: '',
      status: true
    })
  }
  render() {
    var id = this.state.id;
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">{id !== "" ? "Cập nhật công việc" : "Thêm công việc"}
              <button type="button" className="fa fa-times-circle text-right" onClick={() => this.closeForm()}></button>
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Tên: </label>
                <br />
                <input type="text" className="input input-default" name="name" value={this.state.name} onChange={this.onChange}></input>
                <br />
                <label>Trạng thái: </label>
                <br />
                <select className="form-control" name="status" value={this.state.status} onChange={this.onChange}>
                  <option value={true}>Kích hoạt</option>
                  <option value={false}>Ẩn</option>
                </select>
                <br />
              </div>
              <div className="text-center">
                {/* button phai de type = submit*/}
                <button type="submit" className="btn btn-warning">
                  <span className="fa fa-plus mr-5"> </span>
                       Lưu lại
                    </button>
                <button type="button" className="btn btn-danger" onClick={this.onClear}>
                  <span className="fa fa-close mr-5"> </span>
                       Hủy bỏ
                    </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }


}

// State của thằng Component, return về 1 cái object

const mapStateToProps = (state) =>{
  return {
    task : state.task
  };
};

// action và dispatch để gọi lên reducer lên phân tích
const mapDispatchToProps = (dispatch, props)=>{
  return {
    // task là một công việc cần thêm vào từ component
    // chuyển mapDispatchToProps sang props của component
    onAddTask :(task) =>{
      // truyền cái action vào
      dispatch(actions.addTask(task));
    },
    onToggleForm: ()=>{
      dispatch(actions.toggleForm());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
