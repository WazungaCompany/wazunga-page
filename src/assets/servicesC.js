import React, { PureComponent } from "react";

class SolutionC extends PureComponent {
  render() {
    return (
      <div>
        <div className="div-block-14">
          <img
            className="svg-3"
            style = {{"width": "120px", height: "150px" ,marginRight:"90px", marginLeft: "90px"}}
            src={require("../assets/icon/Web.png")}
            alt="Web Developer"
          />
          <img
            className="svg-3"
            style = {{"width": "120px", height: "150px" ,marginRight:"90px", marginLeft: "0px"}}
            src={require("../assets/icon/Mobile.png")}
            alt="Mobile Developer"
          />
          <img
            className="svg-3"
            style = {{"width": "120px", height: "150px" ,marginRight:"90px", marginLeft: "0px"}}
            src={require("../assets/icon/DataBase.png")}
            alt="Data Base"
          />
          <img
          
            className="svg-3"
            style = {{"width": "120px", height: "150px" ,marginRight:"90px", marginLeft: "0px"}}
            src={require("../assets/icon/DataAnalytics.png")}
            alt="Data Analytics"
          />
           <img
            className="svg-3"
            style = {{"width": "120px", height: "150px" ,marginRight:"90px", marginLeft: "0px"}}
            src={require("../assets/icon/Vision.png")}
            alt="Computer Vision"/>
            
            <img
            className="svg-3"
            style = {{"width": "120px", height: "150px" ,marginRight:"90px", marginLeft: "0px"}}
            src={require("../assets/icon/SoftwareE.png")}
            alt="Software Daveloper"
          />
        </div>
      </div>
    )
  }
}

export default SolutionC