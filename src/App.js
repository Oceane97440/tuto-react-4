import React, { Component } from 'react';
import Modal from './components/Modal'
import Ref from './components/Ref';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.refComp = React.createRef();
    this.state = {
      show: false
    }
  }


  /* modalshow = () => {
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
   }*/

  handleClik = () => {
    this.refComp.current.addFocus()
  }
  render() {
    //afficher ou non la modal
    const modal = this.state.show ? (<Modal close={this.modalhide} />) : null

    return (
      <div className="App">
        {/* <p>Composent app</p>
          <button onClick={this.modalshow}> Afficher la modal</button>
         {modal} */}
        <Ref ref={this.refComp} />
        <button onClick={this.handleClik}>Ok</button>

      </div>
    );
  }
}




export default App;
