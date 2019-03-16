import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const user = {
  name: 'Sergio Sánchez',
  job: 'Fullstack developer',
  bio: 'Lorem impusn isquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
  linkedin: 'sergiosanchezmorillo',
  instagram: 'srgsnxz',
  twitter: 'basic_10',
  skills: [
    {
      name: 'javascript',
      level: '99',
      image: ''
    },
    {
      name: 'php',
      level: '99',
      image: ''
    }
  ]
};

ReactDOM.render(<App user={user}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
