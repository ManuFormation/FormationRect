import React from 'react';

import Button from "./components/Button/Bouton";
//import ButtonStyle from "./components.Button.module.css"
import './App.css';

function App() {
  // comment js
  /* coment multiligne */



  return (
    <div className="App">
      {/* commentaire  */}
     DEMAT BREIZH
     <hr/>
     <Button action={()=>{
       alert("le bouton est cliké");
     }} 
     type="button"
     >Hello</Button>

     <Button > <div>TOTO</div><div>titi</div> </Button> 

     <Button style={{fontWeigth:900,fontSize:'x-large'}}> hello<hr/>de lu </Button>

     <Button bgColor='tomato' color="black">hello<hr/>de lu </Button>

     <Button>Wild child</Button>  
    </div>
  );
}

export default App;
