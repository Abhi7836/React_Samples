import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center py-3">
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
