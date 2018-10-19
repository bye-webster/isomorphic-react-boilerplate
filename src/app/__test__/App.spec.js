import React from 'react';
import App from '@app/App';
import 'jest-styled-components';
import { shallowWithTheme } from '@src/tests/shallow';

describe('Root App Component', () => {
  it('Component matches previous snapshot.', () => {
    const app = shallowWithTheme(<App />, {});

    expect(app).toMatchSnapshot();
  });
});
