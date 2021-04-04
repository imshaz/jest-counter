
import React , {Component} from "react"
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
  }
  render(){

    return (
      <div data-test="app" className="App">
       <h1> Counter app </h1>
      <div>current counter is </div>
      <button>Increment</button>
     
    </div>
  );
}
}

export default App;
