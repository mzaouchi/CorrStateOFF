import React from 'react';
import './App.css';
import Person from './Components/Person'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      show : false
    }
  }

  render(){
    return(
      <div>
        <h1>Correction Checkpoint</h1>
        <button onClick={()=> this.setState({show : !this.state.show})}>Show</button>
        {
          this.state.show &&  <Person/>
        }
       
      </div>
    )
  }
}

export default App;
