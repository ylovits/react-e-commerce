import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="container mb-4 pb-2 pl-4 pr-4 bg-light">
      <div className="grid">
        <div className="column-xs-12">
          <p className="copyright">
            &copy; Copyright 2019{" "}
            <a
              href="https://github.com/ylovits"
              title="Ylovits"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ylovits
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
