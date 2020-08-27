import React from "react";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./components/HomePage";
import AboutYou from "./components/AboutYou";
import { NameContext } from "./context/NameContext";
import StartPage from "./components/StartPage";

function App() {
  let [firstName, setFirstName] = useState();
  let [lastName, setLastName] = useState();

  return (
    <div>
      <Switch>
        <NameContext.Provider
          value={{ firstName, setFirstName, lastName, setLastName }}
        >
          <Route path="/">
            <StartPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/about-you">
            <AboutYou />
          </Route>
        </NameContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
