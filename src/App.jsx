import React from 'react';
import { hot } from 'react-hot-loader/root';
import Article from './Article';

const App = props => {
  return (
    <div>
      <Article />
    </div>
  );
};

export default hot(App);
