import React from 'react';
import {render} from 'react-dom';


class Title extends React.Component {
  render () {
    return <h1>{this.props.title}</h1>
  }
}

class Text extends React.Component {
  render () {
    return <p>{this.props.text}</p>;
  }
}



class App extends React.Component {
  render () {
    return <div>
      <Title title="titlle"/>
      <Text text="loooong text"/>
      <Text text="Another loooong text"/>
      </div>
  }
}

render(<App/>, document.getElementById('root'));
