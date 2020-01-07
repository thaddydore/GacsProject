import React from "react";
import Navbar from "./../components/Navbar";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import VideoSection from "./../components/VideoSection";
import ContentCardsSection from "./../components/ContentCardsSection";
import TeamBiosSection from "./../components/TeamBiosSection";
import Footer from "./../components/Footer";
import { useRouter } from "./../util/router.js";
import Slide from "../components/Slide";
import TechTeamSection from "../components/TechTeamSection";
import './index.scss'

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <div className="all">
        <Navbar
          color="success"
          spaced={true}
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRokX2SOtVrLxNQTs-DIA9cxinfJ2FMbfp_ASnjurzGsevTylX&s"
        />
        <Slide />

        <HeroSection
          color="light"
          size="medium"
          subtitle=""
          image="/image/dennis.jpg"
          title="Graduates of Agriculture Cooperative Society"
          logo="/image/gacs.jpeg"
          motto="Repositioned to feed the nation"
        />

        <FeaturesSection color="success" size="medium" title="" subtitle="" />

        <VideoSection
          color="light"
          size="medium"
          title="Youths in agriculture"
          subtitle=""
          embedUrl="https://www.youtube.com/embed/E1NGLbjxBa8"
        />

        <TeamBiosSection
          color="white"
          size="medium"
          title="Meet an Agriculturist"
          subtitle=""
        />
        <ContentCardsSection
          color="success"
          size="medium"
          title="Global News"
          subtitle=""
        />

        <Footer
          color="light"
          size="medium"
          logo="/image/gacs.jpeg"
          description="Repositioned to feed the nation"
        />
      </div>
    </>
  );
}

export default IndexPage;
