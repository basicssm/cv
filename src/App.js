import React, { Component } from 'react';
import Components from './components';

const { Title, Subtitle, Paragraph } = Components;

class App extends Component {
  constructor(props){
      super(props);

      this.state = {
        ...props.user
      }
  }
  render() {
    return (
      <div className="App dark">
        <Title text={this.state.name} cursor/>
        <Subtitle text={this.state.job}/>
        <Paragraph texts={this.state.bio} typewriter/>
      </div>
    );
  }
}

export default App;
