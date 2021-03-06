import React, { Component } from 'react';


class Search extends Component{
  constructor (props)
  {
    super(props);
    this.state ={
      // Cung ten name = keyword cua input  
      keyword: ''
    }
  }
  onChange =(event)=>{
    var target = event.target;
    var name = target.name;
    var value= target.value;
    this.setState({
      [name]: value
    });
  }
  onSearch =()=>{
    // console.log(this.state);
    this.props.onSearch(this.state.keyword);
  }
  render(){
    return (
            <div> 
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                  <input type = "text" name="keyword" value = {this.state.keyword} onChange = {this.onChange} className="form-control" placeholder="Nhập từ khóa...">
          
                  </input>
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick = {this.onSearch}>
                      <span className= "fa fa-search mr-5"></span>
                      Tìm
                    </button>
                  </span>
                </div>
              </div>
            </div>
    );
  }

  
}

export default Search;
