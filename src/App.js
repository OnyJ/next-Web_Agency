import React, { useState, createContext } from "react";
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
import { IntlProvider } from "react-intl";
import textFr from "./languages/fr";
import textEn from "./languages/en";
// Context
import { LanguagesContext } from "./contexts/LanguagesContext";
// to format studycases
import { flattenMessages } from "./components/utils";

const texts = {
  fr: textFr,
  en: textEn,
};

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("Agency-language") || "fr"
  );

  return (
    // video way to format studycases
    <IntlProvider locale={language} messages={flattenMessages(texts[language])}>
      {/* <IntlProvider locale={language} messages={texts[language]}> */}
      <Router>
        <LanguagesContext.Provider value={{ language, setLanguage }}>
          <Navbar />
        </LanguagesContext.Provider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/works">
            <Works />
          </Route>
        </Switch>
      </Router>
    </IntlProvider>
  );
}

export default App;
