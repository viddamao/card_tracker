import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './components/App'
import {fetchCategories , fetchCards} from './middleware/api'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
store.dispatch(fetchCategories())
store.dispatch(fetchCards(0))


render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root')
)