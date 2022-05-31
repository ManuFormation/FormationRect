import React, { Component } from 'react';
import Button from './components/Button/Bouton';


class App extends Component {
  render() {
    return <div className='App' style={{textAlign:'center'}}>
        Valeur compterur 1

       <hr />

      <Button bgColor='tomato'> decr +1</Button>
      <Button bgColor='yellow'> inc -1</Button>
              </div>
    
  }
}

export default App;