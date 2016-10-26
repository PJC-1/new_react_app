import React from 'react';
class App extends React.Component {
  constructor(){
    //super provides the context for 'this' within our component
    super();
    //we can now set the state within an object, this is basically like the defualts
    //you can access the values of the state is by interpolating it like the this.props
    this.state = { txt: '' }
    //you can cache here, so that you don't have to write out bind(this) later on.
    this.update = this.update.bind(this)
  }
  //were using an update to manage our txt's state
  //our custom method takes an event as an argument
  update(e){
    //this.setState is how we set a new state
    //e.target.value is the value that we are going to pass into the key 'txt'
    this.setState({txt: e.target.value})
  }
  //in the render we have parentheses and a div that wrap the whole thing
  //so that we only have one node.
  //we created an input field, and to trigger the update we add a 'onChange'
  //event, and call this.update, and bind that to this.
  //note that the 'this' in the render is the same 'this' in context of our App component

  //the App component is rendering the Widget component, so App is the parent and
  //Widget is the child component.
  //owner-ownee relationship, the parent component is also known as the composite component
  //using JSX we set the props txt to this.state.txt and the update to this.update
  //this is updating the state.txt of the parent component
  render(){
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update} />
      </div>
    );
  }
}

//we are creating another component, a stateless component that takes props and returns
//the input field and h1
//the child component should only take props.
const Widget = (props) => {
  return (
    <div>
      <input type="text" onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  );
}

export default App
