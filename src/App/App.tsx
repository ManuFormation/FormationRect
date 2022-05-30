import React from 'react';

import Button from './components/Button/Bouton'
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
     <Button> hello<hr/>de lu </Button>
     <Button>Wild child</Button>  
    </div>
  );
}

export default App;
