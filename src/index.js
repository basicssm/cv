import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const user = {
  name: 'Sergio Sánchez',
  job: 'Fullstack developer',
  bio: [
    'Last login: Wed Nov  9 20:27:52 on console',
    'Sergios-MacBook:~ sergio$ cd Desktop/',
    'Sergios-MacBook:Desktop sergio$ git clone https://github.com/basicssm/cv.git',
    'Cloning into \'cv\'...',
    'remote: Counting objects: 1189, done.',
    'remote: Total 1189 (delta 0), reused 0 (delta 0), pack-reused 1189',
    'Receiving objects: 100% (1189/1189), 655.85 KiB | 315.00 KiB/s, done.',
    'Resolving deltas: 100% (602/602), done.',
    'Checking connectivity... done',
    'Sergios-MacBook:Desktop sergio$'
  ],
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
