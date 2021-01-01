/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux'
import AppRouter from './AppRouter'
import Store from './Store'

export default function App() {
  return (
    <Provider store={Store}>
      <AppRouter />
    </Provider>
  );
}
