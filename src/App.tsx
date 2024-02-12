/**
 * @format
 */

import React from 'react'
import { MainNavigator } from './navigators'
import { store } from './store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  )
}

export default App
