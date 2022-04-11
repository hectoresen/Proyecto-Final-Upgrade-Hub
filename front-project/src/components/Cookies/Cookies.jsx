import React, { useState } from "react";
import { FormattedMessage  as T} from 'react-intl';
import './Cookies.scss'
import Configuration from "./Configuration";
const Cookies = () => {

const [message,setMessage]=useState(true)
const [configuration,setConfiguration]=useState(false)

const quitMessage=()=>{
setMessage(false)
}
const handleConfiguration =()=>{
    setMessage(false)
    setConfiguration(true)

}

  return (
      <>
     <div className="message">

  { message &&
    <div className="contenedor__cookies" >
      <div className="texto">
          <h1><T id="Cookies11" /></h1>
        <p>
        <T id="Cookies12" />
        </p>
        <p>
          <strong>
          <T id="Cookies13" />
          </strong>
        </p>
        <p>
        <T id="Cookies14" />
        </p>
      </div>
      <div className="botones">
          <button onClick={handleConfiguration}><T id="Cookies15" /></button>
          <button onClick={quitMessage}><T id="Cookies.button.Accept" /></button>
      </div>
    </div>
      }
      </div>
      <div >
{configuration && (
 <Configuration/>
) 

}
      </div>
      </>

  
  );
};

export default Cookies;
