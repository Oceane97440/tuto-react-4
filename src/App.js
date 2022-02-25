import React, { Component } from 'react';
import Modal from './components/Modal'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  
  modalshow = () => {
    this.setState({
      show: true

    })
  }

  modalhide = () => {
    this.setState({
      show: false

    })
  }

  modalhide = () => {
    this.setState({
      show: false

    })
  }

  render() { 
    const modal = this.state.show ? (<Modal close={this.modalhide}/> ) : null

    return ( 
        <div className="App">
          <p>Composent app</p>
          <button onClick={this.modalshow}> Afficher la modal</button>
         {modal}
        </div>
     );
  }
}
 


export default App;
