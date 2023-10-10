// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count: 0}
  onMangoIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }
  onBananaIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          Bob ate {count} mangoes {count} bananas
        </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
          alt="mango"
        />
        <button className="button" onClick={this.onMangoIncrement}>
          Eat Mango
        </button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
          alt="banana"
        />
        <button className="button" onClick={this.onBananaIncrement}>
          Eat Banana
        </button>
      </div>
    )
  }
}

export default FruitsCounter
