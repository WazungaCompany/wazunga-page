import React, { PureComponent } from "react"
import 'bulma/css/bulma.min.css';
import ScrollAnimation from "react-animate-on-scroll";
import Solutions from '../assets/servicesC.js';
import Responsive from '../assets/servicesR.js';
import '../assets/css/Wazunga.css'
import '../assets/css/orproducts.css';
import '../assets/css/responsive.css';

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
                <b style={{ "fontFamily": "Roboto Mono , monospace", "textAlign": "left" }}>Servicios</b>
              </p>
              <p className="paragraph-7">
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay="1000" animateIn="fadeInUp" duration={1.5} animateOnce="true">
              <div className="div-block-87">
                <Solutions />
              </div>
            </ScrollAnimation>

            <div className="div-services">
              <Responsive />
            </div>

            <ScrollAnimation delay="1000" animateIn="fadeIn" duration={1.5} animateOnce="true">
              <button className="btn-1" style={{ "fontFamily": "Roboto Mono", "marginTop": "20px" }}>Contactanos</button>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    )
  }
}