import { MemeSVGViewer } from "orsys-tjs-meme";
import { connect } from "react-redux";

function mstp(s,p) {
    return {
        ...p,
        meme:s.current,
        basePath:'/media/',
        image: s.ressources.images.find(i=>i.id===s.current.imageId)

    }
}
function mdtp() {
    return{}
}
export default connect(mstp,mdtp)(MemeSVGViewer)