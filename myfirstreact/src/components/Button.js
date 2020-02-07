import React from 'react';

import './Button.css';
import { Component } from 'react';

class Button extends Component {
  // constructor(props) {
  //   super(props);  // why is it done ?
    
    
    
  //   this.handleOnClick = this.handleOnClick.bind(this); // this
  // }

  // handleOnClick(data){

  //   let handleButtonClick = this.props.handleButtonClick;
  //   handleButtonClick(data);
  //   this.props.handleButtonClick(data);
  //   }
  
  render() {
    
    return (
      <div>
        <button className={this.props.className} onClick={ () => this.props.handleButtonClick(this.props.children)}>{this.props.children}</button></div>)
       
  }
}
export default Button;
