import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App Component Tests', () => {
  it('Component renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.props.className).toBe('App');
    expect(tree.children[0].type).toBe('header');
    expect(tree.children[1].props.className).toBe('container');
  });
});
