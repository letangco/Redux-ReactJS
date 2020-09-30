import {v4 as uuidv4} from "uuid";
import React, { Component } from 'react';
class DemoRandom extends Component{

    GetRamdom()  {
        // var a=uuidv4();
        console.log(uuidv4());
        // console.log(a);
    }
    render()
    {
        return(
            <div>
               <button type="button" className="btn btn-primary" onClick = {this.GetRamdom}>Random</button> 
            </div>
        );
    }
}
export default DemoRandom;