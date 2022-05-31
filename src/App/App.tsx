import React, {} from 'react';
import Button from './components/Button/Bouton';
interface IAppState{
//message:'hello'|'good bye'|undefined , message present mais peut être vide
message?:'hello'|'good bye', //message si present prend une valeur obligatoire
counter:number,
}
interface IAppProps{}

class App extends React.Component<IAppProps,IAppState> {
  
  constructor(props:{}){
    super(props);
    this.state={message:'hello', counter:0}    
  }

  render() {
    return <div className='App' style={{textAlign:'center'}}>
        Valeur compteur : {this.state.counter}
        <hr/>
      <Button action={()=>{
        this.setState({counter:this.state.counter-1})      
      }} bgColor='tomato'> decrement-1</Button>
      
      <Button action={()=>{
        this.setState({counter:this.state.counter+1})     
      }} bgColor='skyblue'>increment+1</Button>
    </div>
    
  }
}

export default App;