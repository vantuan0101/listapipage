import React, { useEffect, useState } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import clsx from "clsx";
import style from "./header.module.scss";
const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const [changeBg, setChangeBg] = useState(false);
  const handleClickMenu = () => {
    setIsShow(!isShow);
  };
  useEffect(() => {
    const res = window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setChangeBg(true);
      } else {
        setChangeBg(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", res);
    };
  }, []);
  return (
    <div className={clsx(style.header, changeBg && style.bgHeader)}>
      <div className={clsx(style.contain)}>
        <div className={clsx(style.logo)}>Logo</div>
        <div className={clsx(style.docs, isShow && style.isActive )}>
          <div className={clsx(style.docs_items)}>
            <div
              className={clsx(style.btn_close, isShow && style.isActive)}
              onClick={handleClickMenu}
            >
              <FaTimes />
            </div>
            <div className={clsx(style.docs_item)}>
              <a href="#" className={clsx(style.docs_links , changeBg && style.docsText)}>
                Docs
              </a>
              <span className={clsx(style.docs_icon)}>
                <FaAngleDown />
              </span>
            </div>
          </div>
        </div>
        <div className={clsx(style.btn , changeBg && style.btn_bg)} >
          <span className={clsx(style.btn_start)}>Get Start</span>
          <span className={clsx(style.btn_mobile)} onClick={handleClickMenu}>
            <FaBars />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
