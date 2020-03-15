import React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';

import App from '../App';

describe('App snapshot', () => {
  jest.useFakeTimers();
  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  test('renders the loading screen', async () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the root without loading screen', async () => {
    const tree = renderer.create(<App skipLoadingScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
