import React from "react";
import IndexPage from "./index";
import { Switch, Route, Router } from "./../util/router.js";
import { ProvideAuth } from "./../util/auth.js";
import AboutPage from '../components/AboutPage'
import TechTeamSection from "../components/TechTeamSection";
import Contact from "../components/Contact";


function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/leadership" component={TechTeamSection} />
          {/* <Route exact path="/contact" component={Contact} /> */}
          <Route
            component={({ location }) => {
              return (
                <div
                  style={{
                    padding: "50px",
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  The page <code>{location.pathname}</code> could not be found.
                </div>
              );
            }}
          />
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
