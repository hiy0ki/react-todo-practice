import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Todo } from './Todo.js'

class SubText extends React.Component {
  render() {
    return (
      <p>{this.props.text}</p>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
        count: 0,
    }
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.handleClick.bind(this)}>+</button>
        <div>
          <SubText text='hogehoge' />
          <SubText text='huga' />
        </div>
        <Todo />
      </div>
    );
  }
}

export default App;
