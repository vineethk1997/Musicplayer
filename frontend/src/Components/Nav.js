import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import "../style/Nav.css";


const Nav = ({ setLibraryStatus, libraryStatus }) => {
  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <nav>
      <h1>Music </h1>
      <button
        className={libraryStatus ? "library-active" : ""}
        onClick={openLibraryHandler}
      >
        Library
        <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
    </nav>
  );
};

export default Nav;


//<FontAwesomeIcon icon="fa-thin fa-music" />