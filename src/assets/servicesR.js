import React, { PureComponent } from "react";
import 'bulma/css/bulma.min.css';
import '../assets/css/Wazunga.css'
import { Slide } from 'react-slideshow-image';
import '../assets/css/orproducts.css';
import '../assets/css/responsive.css';
import '../assets/css/Wazunga.css';

const fadeProperties = {
    duration: 2000,
    transitionDuration: 1000,
    infinite: true,
    indicators: false,
    arrows: false,
    pauseOnHover: false,
}

class SolutionR extends PureComponent {
  render() {
    return (
        <div className="div-responsive" style={{ "marginBottom": "10px" }}>
              <Slide {...fadeProperties} >
                <img alt="service1" src={"https://i.ibb.co/17ctSvW/computadora.png"} style={{ width: "190px", height: "190px", marginTop: "20px" }} />
                <img alt="service2" src={"https://i.ibb.co/DfkW3Qy/ui.png"} style={{ width: "190px", height: "190px", marginTop: "20px" }} />
                <img alt="service3" src={"https://i.ibb.co/QrmZtwJ/nub.png"} style={{ width: "190px", height: "190px", marginTop: "20px" }} />
                <img alt="service4" src={"https://i.ibb.co/TB62cw2/analisis.png"} style={{ width: "190px", height: "190px", marginTop: "20px" }} />
                <img alt="service5" src={"https://i.ibb.co/b53fgx1/vision.png"} style={{ width: "190px", height: "190px", marginTop: "20px" }} />
                <img alt="service6" src={"https://i.ibb.co/V3MW1tp/ordenador.png"} style={{ width: "190px", height: "190px", marginTop: "20px" }} />
              </Slide>
        </div>
    )
  }
}

export default SolutionR;