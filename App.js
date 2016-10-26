import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(){
    //super provides the context for 'this' within our component
    super();

    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
    //you can cache here, so that you don't have to write out bind(this) later on.
    this.update = this.update.bind(this)
  }


  //we had to import ReactDOM to use findDOMNode, by finding this.refs.red and
  //getting it's value with .value
  //
  update(e){

    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    })
  }

  //this is going to updating the this.state.red...green...blue
  render(){
    return (
      <div>
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <br />
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <br />
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
        <br />
      </div>
    );
  }
}

//because refs wont work with stateless function components, we have to create
//a class component with the input and the event handler.
//since we are wrapping a div around the input, we need to add a ref to input or
//else the "this" will be reffering to the div.
//Thats why the argument in the findDOMNode is this.refs.red.refs.inp because
//you need to refference this.refs refs, which are refs.inp
class Slider extends React.Component {
  render(){
    return (
      <div>
        <input ref="inp" type="range" min="0" max="255" onChange={this.props.update} />
      </div>
    );
  }
}

// //we are creating another component, a stateless component that takes props and returns
// //the input field and h1
// //the child component should only take props.
// const Widget = (props) => {
//   return (
//     <div>
//       <input type="text" onChange={props.update} />
//       <h1>{props.txt}</h1>
//     </div>
//   );
// }

export default App
