import React from 'react';

let Mixin = InnerComponent => class extends React.Component {
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
    return <InnerComponent update={this.update} {...this.state} {...this.props} />
  }
  componentDidMount(){
    console.log('mounted')
  }
}

const Button = (props) => <button onClick={props.update}>{props.txt} - {props.val}</button>

let ButtonMixed = Mixin(Button)

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
      <div>
        <ButtonMixed txt="Button" />
      </div>
    );
  }
  componentDidMount(){
    console.log('mounted')
  }
}

App.defaultProps = { txt: 'button' }
export default App
