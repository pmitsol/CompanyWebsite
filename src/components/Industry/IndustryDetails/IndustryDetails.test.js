import React from 'react';
import ReactDOM from 'react-dom';
import IndustryDetails from './IndustryDetails';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IndustryDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});