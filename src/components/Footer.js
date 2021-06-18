import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        {/* <div className="row"> */}
          {/* Column1 */}
          
          {/* Column2 */}
          
          {/* Column3 */}
         
        {/* </div> */}
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} ColLab| All rights reserved |
            Terms Of Service | IIIT Surat
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;