import React from 'react';

import Button from './components/Button/Bouton'
import './App.css';
const buttonContent="Hello"

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
     }} content={buttonContent}
     type="button"
     >Hello</Button>
     <Button/>     
     <Button/>
     <Button/>    
    </div>
  );
}

export default App;
