import React from "react";

const Footer = ({ length }) => {
  const today = new Date();
  return (
    <footer>
      <h2>{length} list {length <= 1 ? "item " : "items"} </h2>
      <p>copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
