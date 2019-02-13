import { combineReducers, createStore, applyMiddleware } from 'redux'
import { recipesReducer } from './recipesReducer'
import { ingredientsReducer } from './ingredientsReducer'
import { loggingMiddleware } from '../middleware/logging'

const rootReducer = combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer
})

export const reducerInitStore = createStore(
  rootReducer,
  undefined,
  applyMiddleware(
    loggingMiddleware
  )
)