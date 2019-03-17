import React, { Component } from 'react';

import '../basic.scss';

class Paragraph extends Component {
  constructor(props) {
   super(props);
   this.state = {
     texts: props.texts,
     typewriter: props.typewriter ? 'typewriter' : ''
   };
 }

  render() {
    return this.state.texts.map(text => {
      return <p className={ this.state.typewriter }>
        { text }
      </p>
    });
  }
}

export default Paragraph;
