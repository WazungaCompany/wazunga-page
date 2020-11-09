import React, { PureComponent } from "react"
import 'bulma/css/bulma.min.css';
import ScrollAnimation from "react-animate-on-scroll";
import Solutions from '../assets/servicesC.js';
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


export default class services extends PureComponent {
  componentWillUnmount() {
    this.mounted = false;
    window.onresize = () => null;
  }
  render() {
    return (
      <div>
        <div className="div-bg">
          <div className="section-3">
            <ScrollAnimation animateIn="fadeInUp" duration={1.5} animateOnce="true">
              <p className="paragraph-6 responseT">
                <b style={{ "font-family": "Roboto Mono , monospace", "textAlign": "left" }}>Servicios</b>
              </p>
              <p className="paragraph-7">
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay="1000" animateIn="fadeInUp" duration={1.5} animateOnce="true">
              <div className="div-block-87">
                <Solutions />
              </div>
            </ScrollAnimation>

            <div className="div-responsive" style={{ "margin-bottom": "10px" }}>
              <Slide {...fadeProperties} >
                <img alt="service1" src={"https://i.ibb.co/17ctSvW/computadora.png"} style={{ "width": "190px", height: "190px", "margin-top": "20px" }} />
                <img alt="service2" src={"https://i.ibb.co/DfkW3Qy/ui.png"} style={{ "width": "190px", height: "190px", "margin-top": "20px" }} />
                <img alt="service3" src={"https://i.ibb.co/QrmZtwJ/nub.png"} style={{ "width": "190px", height: "190px", "margin-top": "20px" }} />
                <img alt="service4" src={"https://i.ibb.co/TB62cw2/analisis.png"} style={{ "width": "190px", height: "190px", "margin-top": "20px" }} />
                <img alt="service5" src={"https://i.ibb.co/b53fgx1/vision.png"} style={{ "width": "190px", height: "190px", "margin-top": "20px" }} />
                <img alt="service6" src={"https://i.ibb.co/V3MW1tp/ordenador.png"} style={{ "width": "190px", height: "190px", "margin-top": "20px" }} />
              </Slide>
            </div>

            <ScrollAnimation delay="1000" animateIn="fadeIn" duration={1.5} animateOnce="true">
              <button className="btn-1" style={{ "font-family": "Roboto Mono", "margin-top": "20px" }}>Contactanos</button>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    )
  }
}