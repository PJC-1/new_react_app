import React from 'react';
class App extends React.Component {
  constructor(){
    super();
    this.update = this.update.bind(this)
    this.state = {val: 0}
  }
  update(e){
    this.setState({val: this.state.val + 1})
  }
  componentWillMount(){
    console.log('will mount')
  }
  render(){
    return (
      <button onClick={this.update}>{this.props.txt} - {this.state.val}</button>
    );
  }
  componentDidMount(){
    console.log('mounted')
  }
}

App.defaultProps = { txt: 'button' }
export default App
