import {
  emptyMeme,
  ImageInterface,
  MemeInterface,
 } from "orsys-tjs-meme";
 import ConnectedMemeSvg from './component/ui/ConnectedMemeSVG/ConnectedMemeSVG';
import { IMeme } from "orsys-tjs-meme/dist/interfaces/common";
import React from "react";
import FlexLayout from "./component/layout/FlexLayout/FlexLayout";

import Footer from "./component/ui/Footer/Footer";
import Header from "./component/ui/Header/Header";
import MemeForm, { ConnectedMemeForm } from "./component/ui/MemeForm/MemeForm";
import NavBar from "./component/ui/Navbar/Navbar";
interface IAppProps {}
interface IAppState {
  currentMeme: MemeInterface;
  images: Array<ImageInterface>;
  memes: Array<IMeme>;
}

const images: Array<ImageInterface> = [
  { id: 0, name: "Batman", h: 770, w: 577, url: "bat.jpg" },
  { id: 1, name: "Catwoman", h: 1460, w: 821, url: "cat.jpg" },
  { id: 2, name: "Superman", h: 1280, w: 720, url: "super.jpg" },
  { id: 3, name: "Wonderwoman", h: 1200, w: 600, url: "wonder.jpg" },
];
class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { currentMeme: emptyMeme, images: [], memes: [] };
  }

  componentDidMount() {
    const timgs = fetch("http://localhost:8678/images").then((f) => f.json());
    const tmemes = fetch("http://localhost:8678/memes").then((f) => f.json());

   const all = Promise.all([timgs, tmemes]);
   
   const tout = new Promise((resolve) =>{
     setTimeout(resolve, 1000);
   })
   Promise.race([all,tout]).then((arr_arr) =>{
     if(!Array.isArray(arr_arr)){
       console.log('time declenché')
       return;
     }
     console.log(arr_arr);
     this.setState({ memes: arr_arr[1], images: arr_arr[0]});
   })    

  }
  render() {
    return (
      <div className="App" data-testid="App">
        <Header />
        <NavBar />
        <FlexLayout>
        < ConnectedMemeSvg
            image={undefined}           
          />
          <ConnectedMemeForm
            images={this.state.images}           
          />
        </FlexLayout>
        <Footer />
      </div>
    );
  }
}

export default App;
