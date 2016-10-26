import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(){
    //super provides the context for 'this' within our component
    super();
    //we can now set the state within an object, this is basically like the defualts
    //you can access the values of the state is by interpolating it like the this.props
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }
  //were using an update to manage our txt's state
  //our custom method takes an event as an argument
  update(e){
    //this.setState is how we set a new state
    //e.target.value is the value that we are going to pass into the key 'txt'
    this.setState({txt: e.target.value})
  }
  render(){
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
      </div>
    );
  }
}

export default App
