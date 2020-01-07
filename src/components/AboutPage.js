import React from "react";
import Navbar from "./../components/Navbar";
import VideoSection from "./../components/VideoSection";
import Footer from "./../components/Footer";
import { useRouter } from "./../util/router.js";
import './AboutPage.scss'



function IndexPage(props) {
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
      <div className="ab">
      <div style={{fontSize:30, textAlign:"center"}}>
          <h1 style={{ marginBottom:150, marginTop:150}}>COMING SOON!</h1>
      </div>
      </div>

      <Footer
        color="light"
        size="medium"
        logo="/image/gacs.jpeg"
        description="Repositioned to feed the nation"
      />
    </>
  );
}

export default IndexPage;
