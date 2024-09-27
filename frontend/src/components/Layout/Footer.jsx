import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By CodeWithVeerX.</div>
      <div>
        <Link
          to={"https://www.facebook.com/viramsingh.sisodiya.562"}
          target="_blank"
        >
          <FaFacebookF />
        </Link>
        <Link to={"https://github.com/viramsingh"} target="_blank">
          <FaGithub />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/viram-singh-sisodiya-2730aa225"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link
          to={"https://www.instagram.com/viramsinghsisodiya_/"}
          target="_blank"
        >
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
