import * as React from 'react';
import * as renderer from 'react-test-renderer';

import App from './App';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

describe('App', () => {
  it('snapshot test', async () => {
    const tree = renderer.create(
      <App skipLoadingScreen />,
    ).toJSON();
    await sleep(1);
    expect(tree).toMatchSnapshot();
  });
});
