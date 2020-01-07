import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionButton from "./SectionButton";
import "./HeroSection.scss";

function HeroSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <div className="columns is-vcentered is-desktop">
          <div className="column is-5-desktop has-text-centered-touch">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={3}
            />
            <div className="brand-icon">
              <img
                className="FooterComponent__logo"
                src={props.logo}
                alt="Logo"
              />
            </div>
            <h1>{props.motto}</h1>
          </div>
          <div className="column is-1" />
          <div className="column">
            <figure className="HeroSection__image image">
              <p>
                Gacs started under the leadership of Comr. Iregebu Frank in
                2019.This vision was engineered to revolutionize the
                agricultural Sector to feed the nation. ...
              </p>
              {/* <div className="imageAni" style={{ width:"730px",height:"30rem"}}></div>
              {/* <img src={props.image} alt="Illustration" /> */}
            </figure>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
