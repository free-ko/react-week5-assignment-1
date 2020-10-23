import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getByText } = render((
    <App />
  ));

  expect(getByText('서울')).not.toBeNull();
  expect(getByText('대전')).not.toBeNull();
  expect(getByText('대구')).not.toBeNull();
  expect(getByText('부산')).not.toBeNull();
  expect(getByText('광주')).not.toBeNull();
  expect(getByText('강원도')).not.toBeNull();
  expect(getByText('인천')).not.toBeNull();

  expect(getByText('한식')).not.toBeNull();
  expect(getByText('중식')).not.toBeNull();
  expect(getByText('일식')).not.toBeNull();
  expect(getByText('양식')).not.toBeNull();
  expect(getByText('분식')).not.toBeNull();
});
