import {Component} from 'react' // 1 at component {} braces missed - rectified

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onDecrement = () => {
    // 2 at this function state is directly updated - rectified
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }

  onIncrement = () => {
    // 3 at this function state is directly updated  - rectified
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    // 4,5 event handlers are arranged reversly like Incre to decre and decre to incre
    const {count} = this.state
    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        <button className="button" onClick={this.onIncrement} type="button">
          Increase
        </button>
        <button className="button" onClick={this.onDecrement} type="button">
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
// identifed Total 5 Errors and Rectified - UI is expected
