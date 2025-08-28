import React from 'react';
import ReactDOM from 'react-dom';
import AboutUs from './AboutUs';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutUs />, div);
  ReactDOM.unmountComponentAtNode(div);
});