import React,{Component} from "react";
import  ReactDOM  from "react-dom";


class Modal extends Component {


   constructor(props) {
        super(props);
        
        //creation element à la volé
       this.popUpContainer = document.createElement('div');
       document.body.appendChild(this.popUpContainer);
      }

     componentWillUnmount(){
          console.log('je suis dans componentWillUnmount delete div')
        document.body.removeChild(this.popUpContainer)

      }
    

    render() { 
       return ReactDOM.createPortal(
            
            <div className="modal" onClick={this.props.close}>
                <div>
                    Je suis une modal 
                    <button>Fermer</button>
                </div>
            </div>
            ,
           // document.getElementById('second-root')
            this.popUpContainer
          );
    }
}
 
export default Modal;