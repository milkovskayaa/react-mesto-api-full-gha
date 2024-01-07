import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <footer className="footer">
      {location.pathname === "/my-profile" ? (
        <p className="footer__copyright">&copy; 2023 Mesto Russia</p>
      ) : (
        ""
      )}
    </footer>
  );
}

export default Footer;
