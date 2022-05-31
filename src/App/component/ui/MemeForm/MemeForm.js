import React from "react";
import styles from "./MemeForm.module.css";

 
const MemeForm  = (props) => {
  return (
       <div data-testid="MemeForm" className={styles.MemeForm}>
        <form >
          <h1>Titre</h1>
          <input
            type="text"
            id="f_titre"
            placeholder="saisir titre"
            value={props.meme.titre}
             />
          <hr />
          <h2>Image</h2>
          <select

          >
            <option value="-1">Aucune</option>

          </select>
          <hr />
          <h2>text</h2>
          <input
            type="text"
            value={props.meme.text}

          />
          <div className={styles.half}>
            <div>
              <label htmlFor="f_x">x:</label>
              <br />
              <input
                type="number"
                className={styles.smallInput}
                value={props.meme.f_x}

              />
            </div>
            <div>
              <label htmlFor="f_y">y:</label>
              <br />
              <input
                type="number"
                className={styles.smallInput}
                value={props.meme.f_y}
              />
            </div>
          </div>
          <hr />
          <label htmlFor="f_color">Couleur</label>
          <input
            type="color"
            id="f_color"
            value={props.meme.f_color}

          />
          <div className={styles.half}>
            <div>
              <label htmlFor="f_sz">font-size:</label>
              <br />
              <input
                type="number"
                className={styles.smallInput}
                
                min={0}
                value={props.meme.f_sz}

              />
            </div>
            <div>
              <label htmlFor="f_fw">font-weight:</label>
              <br />
              <input
                type="number"
                className={styles.smallInput}
                min="100"
                step="100"
                max="900"
                value={props.meme.f_fw}


              />
            </div>
          </div>
          <div className={styles.half}>
            <div>
              <label htmlFor="f_underline">underline:</label>
              <br />
              <input
                id="f_underline"
                type="checkbox"
                value={props.meme.f_underline}

              />
            </div>
            <div>
              <label htmlFor="f_italic">italic:</label>
              <br />
              <input
                id="f_italic"
                type="checkbox"
                value={props.meme.f_italic}

              />
            </div>
          </div>
          <div className={styles.half}>

          </div>
        </form>
      </div>
  );
};
export default MemeForm;