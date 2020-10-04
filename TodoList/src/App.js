import React, { Component } from 'react';
import *as action from './actions/index';
import { connect } from 'react-redux';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    }
  }
  onAction = () => {
    this.props.onClickButtonAction()
    console.log(1)
  }
  handleChange = (event) => {
    this.setState({
      checked: event.target.checked
    });
  };
  render() {
    return (
      <div className="App">
        <header>
          <h1>todos</h1>
        </header>

        <div className="input_task">
          <div className="select_all">
            <FontAwesomeIcon icon={faChevronDown} size='2x' />
          </div>
          <div className="editText">
            <input className="" placeholder="What needs to be done?" />
          </div>
        </div>

        <div className="item_task">
          <ul>
            <li>
              <div className="select_task">
                <Checkbox
                  checked={this.state.checked}
                  onChange={this.handleChange}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </div>
              <div className="name_task">
                <p>Learning ReactJS</p>
              </div>
              <div className="btn_delete_task">
                <DeleteIcon className="delete_task" fontSize="large" color="primary"/>
              </div>
            </li>
            <li>
              <div className="select_task">
                <Checkbox
                  checked={this.state.checked}
                  onChange={this.handleChange}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </div>
              <div className="name_task">
                <p>Learning Redux</p>
              </div>
              <div className="btn_delete_task">
                <DeleteIcon className="delete_task" fontSize="large" color="primary"/>
              </div>
            </li>
            <li>
              <div className="select_task">
                <Checkbox
                  checked={this.state.checked}
                  onChange={this.handleChange}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </div>
              <div className="name_task">
                <p>Learning NodeJS</p>
              </div>
              <div className="btn_delete_task">
                <DeleteIcon className="delete_task" fontSize="large" color="primary"/>
              </div>
            </li>
          </ul>
        </div>
        {/* <button onClick={this.onAction}>onAction</button> */}
        <div className="info_task">
          <div className="total_quantity_task">
            <p>3 items left</p>
          </div>
          <div className="toggle_filter_task">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
          <div className="action_clear">
            <button>Clear Completed</button>
          </div>
        </div>


      </div>
    );
  }
}
// State là giá trị của store true/false
const mapStateToProps = (state) => {
  return {

  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClickButtonAction: () => {
      dispatch(action.onAction1());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

