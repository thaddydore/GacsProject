import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import "./Slide.scss";
import CenteredColumns from "./CenteredColumns";

function Slide() {
  return (
    <Section >
    <CenteredColumns>
    <div className="container">
      {/* <div className="columns is-vcentered is-desktop"> */}
      {/* <div className="column is-5-desktop has-text-centered-touch"> */}
      <div id="landing-header">
        <ul class="slideshow">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
    </CenteredColumns>
    </Section>
  );
}

export default Slide;
