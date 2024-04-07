import React from "react";
import "./Banner.css";
import yoda from "../../../images/yoda.png";
import { Roll } from "react-awesome-reveal";

export default function Banner() {
  return (
    <div className="bannerparent container-fluid">
      <div className="d-flex row">
        <div className="d-flex col-12 col-xl-6 align-items-center justify-content-center">
          
            <div className="headingban m-4">
              WELCOME TO <span className="starwar">STAR WARS</span> DUNIYA
            </div>
          
        </div>

        <div className="d-flex col-12 col-xl-6 justify-content-center mt-3 mb-4">
          <img src={yoda} className="yoda" alt="" style={{objectFit: "fill "}}/>
        </div>
      </div>
      
    </div>
  );
}
