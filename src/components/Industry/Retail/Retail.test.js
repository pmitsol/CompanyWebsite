import React from 'react';
import ReactDOM from 'react-dom';
import Retail from './Retail';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Retail />, div);
  ReactDOM.unmountComponentAtNode(div);
});