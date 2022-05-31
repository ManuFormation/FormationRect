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
  { id: 1, name: "Catwomen", h: 500, w: 500, url: "cat.jpg" },
  { id: 2, name: "Superman", h: 500, w: 500, url: "super.jpg" },
  { id: 3, name: "Wonderwomen", h: 500, w: 500, url: "wonder.jpg" },
];
class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { currentMeme: emptyMeme, images: [] };
  }
  render() {
    return (
      <div className="App" data-testid="App">
        <Header />
        <NavBar />
        <FlexLayout>
          <MemeSVGViewer image={undefined} meme={this.state.currentMeme} />
          <MemeForm
            meme={this.state.currentMeme}
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
