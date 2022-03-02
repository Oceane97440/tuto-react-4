import React from "react";


//Methode forwardRef permet de passer d'un composent parant à enfant
const MyRefForward = React.forwardRef((propos,ref) => {
    console.log(propos)
    console.log(ref)

    return ( 
        <div>
            <h3>Methode RefForward</h3>
            <input ref={ref} type="text"/>
        </div>
     );
})
 
export default MyRefForward;