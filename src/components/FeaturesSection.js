import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Features from "./Features";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Features
          items={[
            {
              title: "Vision",
              description:
                "developing content",
              image: "/image/vegetables.jpg"
            },
            {
              title: "Mission",
              description:
                "developing content",
              image:
                "/image/apple.jpeg"
            },
            {
              title: "Philosophy",
              description:
                "developing content.",
              image: "/image/wheat.jpg"
            },
            {
              title: "Target",
              description:
                "developing content",
              image: "/image/forestry.jpg"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;
