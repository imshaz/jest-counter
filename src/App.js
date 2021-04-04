
import React , {Component} from "react"
import './App.css';


class App extends Component {
  constructor(props){
    super(props)

    this.state={
      counter:0
    }
  }
  render(){
    const {counter}= this.state
    return (
      <div data-test="app" className="App">
       <h1> Counter app </h1>
      <h3 data-test="counter-display">current counter is {counter}</h3>
      <button data-test="increment-btn">Increment</button>     
    </div>
  );
}
}

export default App;
