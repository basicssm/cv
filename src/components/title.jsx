import React, { Component } from 'react';
import Cursor from './cursor.jsx';

import '../basic.scss';

class Title extends Component {
  constructor(props) {
   super(props);
   this.state = {
     text: props.text,
     cursor: props.cursor
   };
 }

  render() {
    const cursorComponent = this.state.cursor ? <Cursor blink="true"/> : '';

    return (
      <h1 className="title">
        { this.state.text }
        { cursorComponent }
      </h1>
    );
  }
}

export default Title;
