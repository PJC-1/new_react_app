import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(){

    super();

    this.state = {
      val: 0,
      red: 0,
      green: 0,
      blue: 0
    }

    this.update = this.update.bind(this)
    this.updateTwo = this.updateTwo.bind(this)
  }

  updateTwo(e){
    this.setState({val: this.state.val +1 })
  }

  componentWillMount(){
    console.log('mounting')
  }

  update(e){

    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    })
  }

  // here we are going to return a another component named Button.
  render(){
    console.log('rendering!')
    return (
      <div>
        <button onClick={this.updateTwo}>{this.state.val}</button>
        <Button> I <Heart/> tacos </Button>
        <br />
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

  componentDidMount(){
    console.log('mounted')
  }

  componentWillUnmount(){
    console.log('bye!')
  }
}

class Wrapper extends React.Component {
  constructor(){
    super();
  }
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    )
  }
}

class Button extends React.Component {
  render(){
    return <button>{this.props.children}</button>
  }
}

class Slider extends React.Component {
  render(){
    return (
      <div>
        <input ref="inp" type="range" min="0" max="255" onChange={this.props.update} />
      </div>
    );
  }
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

export default Wrapper
