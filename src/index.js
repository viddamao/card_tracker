import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import {requestCategories , requestCards} from './actions'
import reducer from './reducers'

const store = createStore(reducer)
store.dispatch(requestCategories())
store.dispatch(requestCards())


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)