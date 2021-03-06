import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

// import { helloSaga } from './sagas'
import rootSaga  from './sagas'
import Counter from './Counter'
import reducer from './reducers'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

// const store = createStore(reducer);
const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onAsyncIncrement={() => action('ASYNC_INCREMENT')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
