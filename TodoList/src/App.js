import React, { Component } from 'react';
import *as action from './actions/index';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header';
import InputTask from './components/inputTask';
import TaskList from './components/TaskList';
import Control from './components/Control';
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
        <Header />

        <InputTask />

        <TaskList />

        <Control />
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

