

import { MemeSVGViewer } from "orsys-tjs-meme";
import { connect } from "react-redux";

function mstp(s, p) {
  return {
    ...p,
    meme: s,
    basePath: "/media/"  
  };
}

function mdtp(){
    return{}
}

export default connect()(mstp);
