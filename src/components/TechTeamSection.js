import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import TechTeam from "./TechTeam";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import { useRouter } from "./../util/router.js";

function TechTeamSection(props) {
  const router = useRouter();
  return (
    <>
      <Navbar
        color="success"
        spaced={true}
        logo="/image/back.png"
        buttonOnClick={() => {
          router.push("/indexpage");
        }}
      />
      <Section color={props.color} size={props.size}>
        <div className="container">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            centered={true}
            size={3}
          />
          <TechTeam
            people={[
              {
                avatar: "image/frank2.jpeg",
                name: "Iregbu Frank",
                role: "National Director"
              },
              {
                avatar: "/image/forestry.jpg",
                name: "mr ",
                role: "Unknown"
              },
              {
                avatar: "/image/apple.jpeg",
                name: "mr ",
                role: "Unknown"
              }
              // {
              //   avatar: "https://i.pravatar.cc/150?img=5",
              //   name: "Niomi Clay",
              //   role: "Software Engineer"
              // },
              // {
              //   avatar: "https://i.pravatar.cc/150?img=6",
              //   name: "Tim Wesley",
              //   role: "Software Engineer"
              // },
              // {
              //   avatar: "https://i.pravatar.cc/150?img=7",
              //   name: "Shawn David",
              //   role: "Marketing"
              // },
              // {
              //   avatar: "https://i.pravatar.cc/150?img=8",
              //   name: "Ian Gold",
              //   role: "Marketing"
              // },
              // {
              //   avatar: "https://i.pravatar.cc/150?img=10",
              //   name: "Ali Pine",
              //   role: "Software Engineer"
              // }
            ]}
          />
        </div>
      </Section>
      <Footer
        color="light"
        size="medium"
        logo="/image/gacs.jpeg"
        description="Repositioned to feed the nation"
      />
    </>
  );
}

export default TechTeamSection;
