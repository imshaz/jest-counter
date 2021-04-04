import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: {
        countLessThanZero: "",
      },
    };
  }

  increment = () => {
    this.setState((prevState, props) => {
      if (prevState.counter === 0) {
        return {
          error: { countLessThanZero: "" },
          counter: prevState.counter + 1,
        };
      }
      return { counter: prevState.counter + 1 };
    });
  };
  decrement = () => {
    this.setState((prevState, props) => {
      if (prevState.counter !== 0) {
        return { counter: prevState.counter - 1 };
      } else {
        this.setState({
          error: { countLessThanZero: "Counter cannot be less than zero" },
        });
      }
    });
  };
  render() {
    const {
      counter,
      error: { countLessThanZero },
    } = this.state;
    return (
      <div data-test="app" className="App">
        <h1> Counter app </h1>
        <h3 data-test="counter-display">current counter is {counter}</h3>
        <h6>{countLessThanZero}</h6>
        <button onClick={() => this.increment()} data-test="increment-btn">
          Increment
        </button>

        <button
          data-test="decrement-btn"
          onClick={() => this.decrement()}
          data-test="decrement-btn"
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
