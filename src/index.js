import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { reducerInitStore } from './reducers/rootReducer'

import { addRecipe } from './actions/recipes'
import { addIngredient } from './actions/ingredients'

ReactDOM.render(
  <Provider store={reducerInitStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
)

reducerInitStore.dispatch(addRecipe('foobar'))
reducerInitStore.dispatch(addIngredient('foobar', 'eggs', 3))
window.store = reducerInitStore

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
