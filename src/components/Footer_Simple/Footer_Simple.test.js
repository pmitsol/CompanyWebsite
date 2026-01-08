import React from 'react';
import ReactDOM from 'react-dom';
import Footer_Simple from './Footer_Simple';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer_Simple />, div);
  ReactDOM.unmountComponentAtNode(div);
});