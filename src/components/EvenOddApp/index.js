import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state

    const displayText = count % 2 === 0 ? 'even' : 'odd'

    return (
      <div className="app-container">
        <div className="counter-container">
          <h1 className="count">Count {count}</h1>
          <p className="number-category">Count is {displayText}</p>
          <button
            onClick={this.onIncrement}
            type="button"
            className="increment-button"
          >
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
