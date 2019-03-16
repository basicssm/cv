import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/title.jsx';
import Subtitle from './components/subtitle.jsx';
import Paragraph from './components/paragraph.jsx';

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
        <Paragraph text={this.state.bio} typing/>
      </div>
    );
  }
}

export default App;
