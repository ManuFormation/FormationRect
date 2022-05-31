import { emptyMeme, ImageInterface, MemeInterface, MemeSVGViewer } from 'orsys-tjs-meme';
import React from 'react';
import FlexLayout from './component/layout/FlexLayout/FlexLayout';

import Footer from './component/ui/Footer/Footer';
import Header from './component/ui/Header/Header';
import MemeForm from './component/ui/MemeForm/MemeForm';
import NavBar from './component/ui/Navbar/Navbar';
interface IAppProps{}
interface IAppState{
  currentMeme:MemeInterface,
  images:Array<ImageInterface>
}

class App extends React.Component<IAppProps,IAppState> {

  constructor(props:IAppProps){
   super(props)
   this.state={currentMeme:emptyMeme, images:[] };
  }
   render() {
    return <div className='App' data-testid="App">
       <Header/>
       <NavBar/>
       <FlexLayout>
         <MemeSVGViewer image={undefined} meme={this.state.currentMeme}/>
         <MemeForm meme={this.state.currentMeme}/>
       </FlexLayout>   
       <Footer/>
     
    </div>    
  }
}

export default App;