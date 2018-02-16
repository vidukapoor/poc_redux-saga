/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

const Counter = ({ value, onIncrement, onDecrement , onAsyncIncrement}) =>
      <div>
        <button onClick={onAsyncIncrement}>
          After one second
        </button>
        {' '}
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        <hr />
        <div>
          Clicked: {value} times
        </div>
      </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onAsyncIncrement: PropTypes.func.isRequired
}

export default Counter
