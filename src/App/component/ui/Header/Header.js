import React, { useEffect } from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

//const initialState = {};
const Header = (props) => {
 // const [state, setstate] = useState(initialState);
  useEffect(() => {
    console.log("Header monté");
  }, []);
  return (
    <div className={style.Header} data-testid="Header">
      <Link to="/">Home</Link> 
       | <Link to="/editor">New Meme</Link>
       | <Link to="/thumbnail">thumbnail</Link>
    </div>
  );
};

Header.propTypes = {};

export default Header;
