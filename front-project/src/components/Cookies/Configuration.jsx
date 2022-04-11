import React, { useState } from "react";
import "./Configuration.scss";
import { FormattedMessage  as T} from 'react-intl';
const Configuration = () => {
const [Save, setSave] = useState(true)
const handlesave=()=>{
setSave(false)
}

  return (
      Save &&
    <div className="configuration">
      <h2>
        <T id="Cookies1" />
      </h2>
      <p>
      <T id="Cookies2" />
      </p>
      <p>
      <T id="Cookies3" />
      </p>
      <p>
      <T id="Cookies4" />:
      </p>
      <div className="opciones">
        <div className="opcion">
          <p>+<T id="Cookies5" /></p>
          <div className="botones">
            <button><T id="Cookies.button.Reject" /></button>
            <button><T id="Cookies.button.Accept" /></button>
          </div>
        </div>
        <div className="opcion">
          <p>+<T id="Cookies6" /></p>
          <div className="botones">
            <button><T id="Cookies.button.Reject" /></button>
            <button><T id="Cookies.button.Accept" /></button>
          </div>
        </div>
        <div className="opcion">
          <p>+<T id="Cookies7" /></p>
          <div className="botones">
            <button><T id="Cookies.button.Reject" /></button>
            <button><T id="Cookies.button.Accept" /></button>
          </div>
        </div>
        <div className="opcion">
          <p>+<T id="Cookies8" /></p>
          <div className="botones">
            <button><T id="Cookies.button.Reject" /></button>
            <button><T id="Cookies.button.Accept" /></button>
          </div>
        </div>
        <div className="opcion">
          <p>+<T id="Cookies9" /></p>
          <div className="botones">
            <button><T id="Cookies.button.Reject" /></button>
            <button><T id="Cookies.button.Accept" /></button>
          </div>
        </div>
        
      </div>
      <button onClick={handlesave}><T id="Cookies10" /></button>
    </div>
  );
};

export default Configuration;
