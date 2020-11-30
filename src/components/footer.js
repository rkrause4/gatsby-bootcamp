import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import footerStyles from "./footer.module.scss";

const Footer = () => {
  const { author } = useSiteMetadata();
  return (
    <footer className={footerStyles.footer}>
      <p>Created by {author} &copy; 2020</p>
    </footer>
  );
};

export default Footer;
