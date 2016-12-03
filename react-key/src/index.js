import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const data = {
  'first': ['apple', 'banana', 'cat'],
  'two': ['data', 'ear', 'friend'],
  'third': ['gift', 'height', 'iterator'],
};

const List = ({
  item
}) => (
  <li>{item}<input type='text'/></li>
)

class App extends Component {

  constructor (props) {
    super(props);
    this.state = { key: 'first' };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (value) {
    return () => this.setState({ key: value });
  }

  render () {
    return (
      <div>
        <aside>
          <ul>
            <li onClick={this.handleClick('first')}>first</li>
            <li onClick={this.handleClick('two')}>two</li>
            <li onClick={this.handleClick('third')}>third</li>
          </ul>
        </aside>
        <ul>
          {
            data[this.state.key].map((item, index) =>
              <li key={index}>{item}<input type='text'/></li>)
          }
        </ul>
      </div>
    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
