import React from 'react';
import ReactDOM from 'react-dom';
import MicroFrontEnd from './MicroFrontEnd';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MicroFrontEnd />, div);
  ReactDOM.unmountComponentAtNode(div);
});
