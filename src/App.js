import React, { useState } from "react";
import "./App.css";
// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
// Components
import Navbar from "./components/Navbar";
// Language
import { intlProvider } from "react-intl";
import textFr from "./languages/fr";
import textEn from "./languages/en";

const texts = {
  fr: textFr,
  en: textEn,
};

function App() {
  const [language, setLanguage] = useState("fr");

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
