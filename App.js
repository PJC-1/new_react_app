import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(){

    super();

    this.state = {
      val: 0,
      red: 0,
    }

    this.update = this.update.bind(this)
    this.updateTwo = this.updateTwo.bind(this)
  }

  updateTwo(e){
    this.setState({val: this.state.val +1 })
  }

  componentWillMount(){
    this.setState({m: 2})
  }

  update(e){
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
    })
  }

  // here we are going to return a another component named Button.
  render(){
    console.log('rendering!')
    return (
      <div>
        <button onClick={this.updateTwo}>{this.state.val * this.state.m}</button>
        <Button> I <Heart/> tacos </Button>
        <br />
        <NumInput ref="red" min={0} max={255} step={1} val={+this.state.red} label="Red" update={this.update} />
        <br />
      </div>
    );
  }

  // here wer are declaring inc (for increment), and set interval to update
  //every half second
  componentDidMount(){
    this.inc = setInterval(this.updateTwo,500)
  }

  //we need to clear the interval when we unmount because if we don't will
  //cause an error that says were are calling setState on a component that
  //been unmounted.
  componentWillUnmount(){
    clearInterval(this.inc)
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

class NumInput extends React.Component {
  render(){
    let label = this.props.label !== '' ? <label>{this.props.label} - {this.props.val}</label> : ''
    return (
      <div>
        <input ref="inp" type={this.props.type} min={this.props.min} max={this.props.max} step={this.props.step} onChange={this.props.update} />
        {label}
      </div>
    );
  }
}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
}
const Heart = () => <span className="glyphicon glyphicon-heart"></span>

export default Wrapper
