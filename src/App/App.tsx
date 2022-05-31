import { MemeSVGViewer } from 'orsys-tjs-meme';
import { DummyMeme, IImage, IMeme } from 'orsys-tjs-meme/dist/interfaces/common';
import React from 'react';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import FlexLayout from './component/layout/FlexLayout/FlexLayout';
import Button from './component/ui/Button/Bouton';
import Header from './component/ui/Header/Header';
import MemeForm from './component/ui/MemeForm/MemeForm';
import NavBar from './component/ui/NavBar/NavBar';
interface IAppProps{}
interface IAppState{
  currentMeme:IMeme,
  images:Array<IImage>
}

class App extends React.Component<IAppProps,IAppState> {

  constructor(props:IAppProps){
   super(props)
   this.state={currentMeme:DummyMeme, images:[] };
  }
   render() {
    return <div className='App' data-testid="App">
       <Header/>
       <NavBar/>
       <FlexLayout>
         <MemeSVGViewer image={undefined} meme={this.state.currentMeme}/>
         <MemeForm/>
       </FlexLayout>   
     
    </div>    
  }
}

export default App;