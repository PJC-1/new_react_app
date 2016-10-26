import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  render(){
    let txt = this.props.txt
    return <div>{txt}</div>
  }
}

// stateless function component,
// constant variable called App, that is equal to a
// function that returns our JSX.
// const App = () => <h1>This also works</h1>

// export default App

App.propTypes = {
  txt: React.PropTypes.string,
  //isRequired will need to be specified in the component
  cat: React.PropTypes.number.isRequired
}

//this is where you can declare default props which will
//be rendered if something else is not specified in the App component
App.defaultProps = {
  txt: 'this is the default txt'
}

ReactDOM.render(
  <App cat={5} txt="this is the props value" />,
  document.getElementById('app')
);
