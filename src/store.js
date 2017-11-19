import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
//import {routerMiddleware} from 'react-router-redux'
// import logger from 'redux-logger'

import rootReducer from './reducers'


export default function configStore(history){

//  const routerMiddleware = routerMiddleware(history)
  const middlewares =[thunk, /*routerMiddleware, logger*/]
  const enhancers = [applyMiddleware(...middlewares)]

  const composeEnhancers =
    typeof window ==='object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
      : compose

const store = createStore(
      rootReducer,
      composeEnhancers(...enhancers)
      )

  return store
}
