import React, { Component } from 'react';
import Button from './components/Button/Bouton';


class App extends Component {
  render() {
    return <div className='App' style={{textAlign:'center'}}>
        Valeur compterur 1

       <hr/>

      <Button bgColor='tomato'> decrement -1</Button>
      <Button bgColor='yellow'> increment +1</Button>
              </div>
    
  }
}

export default App;