import React, { useEffect, useState } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import clsx from "clsx";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
const Header = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [changeBg, setChangeBg] = useState<boolean>(false);
  const handleClickMenu : ()=> void = () => {
    setIsShow(!isShow);
  };
  useEffect(() => {
   
    const res:any = window.addEventListener( "scroll", () => {
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
    <div className={clsx(style.header, changeBg && style.bgHeader)} >  
      <div className={clsx(style.contain)}>
        <a href="/" className={clsx(style.logo)}>Logo</a>
        <div className={clsx(style.docs, isShow && style.isActive )}>
          <div className={clsx(style.docs_items)}>
            <div
              className={clsx(style.btn_close, isShow && style.isActive)}
              onClick={handleClickMenu}
            >
              <FaTimes />
            </div>
            <div className={clsx(style.docs_item)}>
              <Link to="/docs/a" className={clsx(style.docs_links , changeBg && style.docsText)}>
                Docs
              </Link>
              <span className={clsx(style.docs_icon)}>
                <FaAngleDown />
              </span>
            </div>
          </div>
        </div>
        <div className={clsx(style.btn , changeBg && style.btn_bg)} >
          <Link to='/docs/a' className={clsx(style.btn_start)}>Get Start</Link>
          <span className={clsx(style.btn_mobile)} onClick={handleClickMenu}>
            <FaBars />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
