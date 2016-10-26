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
  //were using an update to manage our txt's state
  //our custom method takes an event as an argument
  update(e){

    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    })
  }

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

class Slider extends React.Component {
  render(){
    return (
        <input ref="inp" type="range" min="0" max="255" onChange={this.props.update} />
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
