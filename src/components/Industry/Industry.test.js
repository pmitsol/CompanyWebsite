import React from 'react';
import ReactDOM from 'react-dom';
import Industry from './Industry';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Industry />, div);
  ReactDOM.unmountComponentAtNode(div);
});