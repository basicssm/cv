import React, { Component } from 'react';

import '../basic.scss';

class Paragraph extends Component {
  constructor(props) {
   super(props);
   this.state = {
     text: props.text,
     typing: props.typing
   };
 }

  render() {
    return (
      <p className={ this.state.typing ? 'typewriter' :'' }>
        { this.state.text }
      </p>
    );
  }
}

export default Paragraph;
