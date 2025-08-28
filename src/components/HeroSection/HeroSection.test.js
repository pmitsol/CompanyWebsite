import React from 'react';
import ReactDOM from 'react-dom';
import HeroSection from './HeroSection';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeroSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});