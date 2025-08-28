import React from 'react';
import ReactDOM from 'react-dom';
import Healthcare from './Healthcare';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Healthcare />, div);
  ReactDOM.unmountComponentAtNode(div);
});