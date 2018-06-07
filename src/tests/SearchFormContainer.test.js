import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import SearchFormContainer from '../Components/CustomComponents/SearchFormContainer';

// Did not use SnapShot testing as it's available in v22 of Jest and is not shipped with this version of create-react-app
describe('SearchFormContainer tests', () => {
  const shallowRenderer = new ShallowRenderer();
  shallowRenderer.render(
    <SearchFormContainer
      city={'Lusaka'}
      handleSubmit={() => 'handle submit'}
      handleCityChange={() => 'handle city change'}
    />,
  );
  const result = shallowRenderer.getRenderOutput();

  it('Renders correctly', () => {
    expect(result.props.children.length).toBe(2);
    expect(result.props.className).toBe('form-inline');
    expect(result.props.onSubmit).toEqual(expect.any(Function));
  });
});
