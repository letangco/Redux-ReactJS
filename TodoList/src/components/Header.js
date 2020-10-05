// import { Button } from '@material-ui/core';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import *as action from '../actions/index';
function Header (){
    // const data = useSelector(state=>state.task)
    const dispatch = useDispatch();
    const onClickHandle =  () => {
        dispatch(action.onAction1())
    }
    return (
        // <div>
        //     <Button onClick={onClickHandle}>BUtton Hook </Button>
        // </div>
        <header>
          <h1>todos</h1>
        </header>
        );
};

export default Header;