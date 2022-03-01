import React, { Component } from "react";

class Ref extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    
        //methode qui permet de recupérer les proprieter d'un element (au lieux du getElementbyId pas conseillier)
        //il s'agit de la methode qui respect le dom react
        this.myTittle = React.createRef();
        console.log(this.myTittle);

        this.myInput  = React.createRef();

    }
  

  /*  update = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        //au lieux de e.target.value pour accèder au proprieter et methode on utilise current
        this.myTittle.current.style.color='red'
    }

    componentDidMount(){
        this.myInput.current.focus()
    }

    showRef = (e) => {
        //on accède direct à la value du input
        console.log(this.myInput.current.value)
    }*/

    addFocus = (e) => {
        //on accède direct à element focus
        this.myInput.current.focus()

    }

    render() {
        return (
            <div>
                {/* <h1 ref={this.myTittle}>Valeur: {this.state.value}</h1> */}
                {/* <input ref={this.myInput} type="text" value={this.state.value} onChange={this.update} /> */}
                <input ref={this.myInput} type="text" />
            </div>
        );
    }
}

export default Ref;