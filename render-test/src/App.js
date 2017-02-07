import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let childRenderingCount = 0;
const Child = ({ foo }) => {
  console.log('childRenderingCount', ++childRenderingCount);
  return <div>{ foo.random.toString() }</div>;
}

let buttonRenderingCount = 0;
const Button = ({ onClick }) => {
  console.log('buttonRenderingCount', ++buttonRenderingCount);
  return <button onClick={onClick}>change state!</button>
}

let appRenderingCount = 0;
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { foo: { random: Math.random() } };

    this.onClick = this.onClick.bind(this);
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.foo !== nextState.foo) {
      return true;
    }
    return false;
  }

  onClick () {
    // this.setState({ foo: { random: Math.random() } });
    this.setState({ foo: this.state.foo });
  }

  render() {
    console.log('appRenderingCount', ++appRenderingCount);
    return (
      <div className="App">
        <Child foo={this.state.foo} />
        <Button onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
