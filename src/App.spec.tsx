import React from 'react';
import TestRenderer from 'react-test-renderer';

import App from './App';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

describe('App', () => {
  it('snapshot test', async () => {
    const tree = TestRenderer.create(
      <App skipLoadingScreen />,
    ).toJSON();
    await sleep(1);
    expect(tree).toMatchSnapshot();
  });
});
