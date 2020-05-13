import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguagesContext } from "../LanguagesContext";

const Navbar = () => {
  const { language, setLanguage } = useContext(LanguagesContext);
  const switchLanguage = () =>
    language === "fr" ? setLanguage("en") : setLanguage("fr");

  // useEffect(() => localStorage.setItem("language", language));

  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/works">Works</Link>
      <br />
      <div>{language}</div>
      <button onClick={switchLanguage}>Change language</button>
    </nav>
  );
};

export default Navbar;
