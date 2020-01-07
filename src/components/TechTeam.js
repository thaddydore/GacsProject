import React from "react";
import CenteredColumns from "./CenteredColumns";
import Avatar from "./Avatar";
import "./TechTeam.scss";

function TechTeam(props) {
  return (
    <CenteredColumns>
      {props.people.map((person, index) => (
        <div className="column is-one-quarter has-text-centered" key={index}>
          <div className="TechTeam__person">
            <div className="TechTeam__avatar-wrapper">
              <Avatar image={person.avatar} alt={person.name} style={{width:150,height:150}} />
            </div>
            <div className="TechTeam__details">
              <p className="is-size-5">{person.name}</p>
              <p className="is-size-7 has-text-weight-semibold has-text-grey">
                {person.role}
              </p>
            </div>
          </div>
        </div>
      ))}
    </CenteredColumns>
  );
}

export default TechTeam;
