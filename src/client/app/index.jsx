import React from 'react';
import {render} from 'react-dom';

import 'sass/main.scss';

class Title extends React.Component {
  render () {
    return <h1>{this.props.title}</h1>;
  }
}

class Text extends React.Component {
  render () {
    return <p>{this.props.text}</p>;
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class App extends React.Component {
  render () {
    return <div className="container">
      <Title title="titlle" />
      <Text text="loooong text" />
      <Text text="Another loooong text" />
      <Clock />
      </div>
  }
}

render(<App/>, document.getElementById('root'));
