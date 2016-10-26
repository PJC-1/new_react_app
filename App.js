import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  render(){
    return <div>{this.props.txt}</div>
  }
}

// stateless function component,
// constant variable called App, that is equal to a
// function that returns our JSX.
// const App = () => <h1>This also works</h1>

// export default App

ReactDOM.render(
  <App txt="this is the props text" />,
  document.getElementById('app')
);
