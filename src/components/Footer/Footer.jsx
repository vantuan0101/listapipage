import React from "react";
import clsx from "clsx";
import style from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={clsx(style.main)}>
      <div>© 2022</div>
      <div>Policy</div>
      <div>License</div>
      <div>Terms</div>
    </div>
  );
};

export default Footer;
