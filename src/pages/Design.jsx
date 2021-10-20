import React from "react";
import {Fade, Zoom} from 'react-reveal'


function Design(){
    return(
        <div
      className="app-index"
      style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/concrete.png')`,
          backgroundSize: "fill",
      }}>

        </div>
    )
}
    
export default Design