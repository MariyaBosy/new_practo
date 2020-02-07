import React, { Component } from 'react';

import './App.css';
import './components/Button.css';
import Button from './components/Button';
import Display from './components/Display';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleDecimalClick=this.handleDecimalClick.bind(this);
    this.handleEqualClick=this.handleEqualClick.bind(this);
    this.clearDisplay=this.clearDisplay.bind(this);
    // this.add=this.add.bind(this);
    this.state = {
      input: "",
      output: ""
    }
    
    }
    
    handleEqualClick(data)
  {
    let result=eval(this.state.input);
    this.setState({input:" "});
    this.setState({output : result})
    

  };
  
  
  handleButtonClick (data) {
    if(this.props.className === 'operator')
    {
    this.setState({output:""}); 
    this.setState({input : this.state.output + this.state.input + data});}
    else
    {
      this.setState({output:""}); 
      this.setState({input : this.state.input + data});}

    };

  handleDecimalClick(data) {
    this.setState({ output: "" });
    this.setState({ input: this.state.output + this.state.input + data });
  };

  clearDisplay(data){
  this.setState({input :" "});
  this.setState({output:""}); 
  };
  add()
  {
    eval('this.state.input');
  };
  
  render(){
  return (
    <div className="App">
    
      <div className="Calculator">
      
      <h2>Calculator</h2>
      
      <Display><ul style={{listStyleType:"none"}}>
      <li >{this.state.input}</li>
      
      <li style={{fontSize:"35px"}}>{this.state.output}</li></ul></Display>
      
      
      <div className="row">
          <Button className="special" handleButtonClick={this.clearDisplay}>AC</Button>
          <Button className="special" handleButtonClick={this.handleButtonClick}>-</Button>
          <Button className="special" handleButtonClick={this.handleButtonClick}>%</Button>
          <Button className="operator" handleButtonClick={this.handleButtonClick}>/</Button>
          </div>

        <div className="row">
          <Button className="number" handleButtonClick={this.handleButtonClick}>7</Button>
          <Button className="number" handleButtonClick={this.handleButtonClick}>8</Button>
          <Button className="number" handleButtonClick={this.handleButtonClick}>9</Button>
          <Button className="operator" handleButtonClick={this.handleButtonClick}>*</Button>
        </div>

        <div className="row">
          <Button className="number" handleButtonClick={this.handleButtonClick}>4</Button>
          <Button className="number" handleButtonClick={this.handleButtonClick}>5</Button>
          <Button className="number" handleButtonClick={this.handleButtonClick}>6</Button>
          <Button className="operator" handleButtonClick={this.handleButtonClick}>-</Button>
        </div>

        <div className="row">
          <Button className="number" handleButtonClick={this.handleButtonClick}>1</Button>
          <Button className="number" handleButtonClick={this.handleButtonClick}>2</Button>
          <Button className="number" handleButtonClick={this.handleButtonClick}>3</Button>
          <Button className="operator" handleButtonClick={this.handleButtonClick}>+</Button>
        </div>

        <div className="row">
          <Button className="zero" handleButtonClick={this.handleButtonClick}>0</Button>
          <Button className="dot" handleButtonClick={this.handleDecimalClick}>.</Button>
          <Button className="operator" handleButtonClick={this.handleEqualClick}>=</Button>
          
        </div>

      </div>
    </div>
  );
}
}
export default App;
