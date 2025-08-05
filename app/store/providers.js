'use client';

import { Provider } from 'react-redux';
import { makeStore } from './store';

const store = makeStore();

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}