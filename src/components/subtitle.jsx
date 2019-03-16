import React, { Component } from 'react';

import '../basic.scss';

class Subtitle extends Component {
  constructor(props) {
   super(props);
   this.state = {
     text: props.text
   };
 }

  render() {

    return (
      <h3 className="subtitle">
        { this.state.text }
      </h3>
    );
  }
}

export default Subtitle;
