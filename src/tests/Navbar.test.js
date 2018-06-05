import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../Components/Navbar';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Navbar tests', () => {
  const shallowRender = new ShallowRenderer();
  shallowRender.render(
    <Navbar
      handleSubmit={() => 'handle submit'}
      handleCityChange={() => 'handle city change'}
      city={'Eldoret'}
    />,
  );
  const result = shallowRender.getRenderOutput();

  it('Renders correctly', () => {
    expect(result.type).toBe('nav');
    expect(result.props.children[2].props.handleSubmit).toEqual(
      expect.any(Function)
    );
    expect(result.props.children[2].props.handleCityChange).toEqual(
      expect.any(Function)
    );
    expect(result.props.children[2].props.city).toBe('Eldoret');
  });
});
