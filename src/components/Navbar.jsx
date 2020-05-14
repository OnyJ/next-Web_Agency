import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LanguagesContext } from "../contexts/LanguagesContext";
// Images
import flagFr from "../images/flag_fr.png";
import flagEn from "../images/flag_en.png";

const Navbar = () => {
  const { language, setLanguage } = useContext(LanguagesContext);
  const switchLanguage = () =>
    language === "fr" ? setLanguage("en") : setLanguage("fr");

  useEffect(() => localStorage.setItem("Agency-language", language));

  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/works">Works</Link>
      <br />

      {language === "fr" ? (
        <img
          onClick={switchLanguage}
          src={flagFr}
          alt="French flag"
          className="flag pointer"
        />
      ) : (
        <img
          onClick={switchLanguage}
          src={flagEn}
          alt="English flag"
          className="flag pointer"
        />
      )}
    </nav>
  );
};

export default Navbar;
