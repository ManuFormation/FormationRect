import {
  emptyMeme,
  ImageInterface,
  MemeInterface,
  MemeSVGViewer,
} from "orsys-tjs-meme";
import React from "react";
import FlexLayout from "./component/layout/FlexLayout/FlexLayout";

import Footer from "./component/ui/Footer/Footer";
import Header from "./component/ui/Header/Header";
import MemeForm from "./component/ui/MemeForm/MemeForm";
import NavBar from "./component/ui/Navbar/Navbar";
interface IAppProps {}
interface IAppState {
  currentMeme: MemeInterface;
  images: Array<ImageInterface>;
}

const images: Array<ImageInterface> = [
  { id: 0, name: "Batman", h: 500, w: 500, url: "bat.jpg" },
  { id: 1, name: "Catwoman", h: 1460, w: 830, url: "cat.jpg" },
  { id: 2, name: "Superman", h: 500, w: 500, url: "super.jpg" },
  { id: 3, name: "Wonderwoman", h: 500, w: 500, url: "wonder.jpg" },
];
class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { currentMeme: emptyMeme, images: images };
  }
  render() {
    return (
      <div className="App" data-testid="App">
        <Header />
        <NavBar />
        <FlexLayout>
          <MemeSVGViewer image={
            this.state.images.find(e=>e.id===this.state.currentMeme.imageId)
           } meme={this.state.currentMeme} basePath='/media/' />
          <MemeForm
            meme={this.state.currentMeme}
            images={this.state.images}
            onMemeChange={(meme: MemeInterface) => {
              this.setState({ currentMeme: meme });
            }}
          />
        </FlexLayout>
        <Footer />
      </div>
    );
  }
}

export default App;
