import ConnectedMemeSVG from "./component/ui/ConnectedMemeSVG/ConnectedMemeSVG";
import React, { useEffect } from "react";
import FlexLayout from "./component/layout/FlexLayout/FlexLayout";
import Footer from "./component/ui/Footer/Footer";
import Header from "./component/ui/Header/Header";
import { ConnectedMemeForm } from "./component/ui/MemeForm/MemeForm";
import Navbar from "./component/ui/Navbar/Navbar";
import { Route, Routes, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import _store, { ACTIONS_CURRENT } from "./store/store";
import { MemeInterface } from "orsys-tjs-meme";

interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {
  return (
    <div className="App" data-testid="App">
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              Home ..
              <br />
              Bienvenu
            </div>
          }
        />
        <Route path="/editor" element={<MemeEditor />} />
        <Route path="/editor/:id" element={<MemeEditor />} />
      </Routes>
      <Footer />
    </div>
  );
};

const MemeEditor = (props: any) => {
  const dispatch = useDispatch();
  const params = useParams();
const memes =useSelector((state:any) => state.ressources.memes)
  useEffect(() => {
    if (undefined !== params.id) {
      dispatch({
        type: ACTIONS_CURRENT.UPDATE_CURRENT,
        value: _store
          .getState()
          .ressources.memes.find(
            (m: MemeInterface) => m.id === Number(params.id)
          ),
      });
    } else {
      dispatch({ type: ACTIONS_CURRENT.CLEAR_CURRENT });
    }
  }, [params, dispatch, memes]);
  return (
    <FlexLayout>
      <ConnectedMemeSVG />
      <ConnectedMemeForm />
    </FlexLayout>
  );
};
export default App;
