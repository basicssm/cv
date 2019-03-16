import React, { Component } from 'react';
import '../basic.scss';

const cursorTypes = {
  line: '_',
  pipe: '|'
}

class Cursor extends Component {
  constructor(props) {
   super(props);
   this.state = {
     char: cursorTypes[props.type || 'line'],
     blink: props.blink ? 'blink' : ''
  };
 }


  render() {
    return (
      <span className={ this.state.blink }>{ this.state.char }</span>
    );
  }
}

export default Cursor;
