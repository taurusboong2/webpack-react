import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import './styles.scss';

const mountNode = document.getElementById('app');
ReactDOM.render(<App name="Jane" />, mountNode);
