import React from 'react'
import clsx from "clsx";
import style from "./headerdocs.module.scss";
import { Link } from "react-router-dom";
const HeaderDocs = () => {
  return (
    <div className={clsx(style.header)} >  
      <div className={clsx(style.contain)}>
        <a href="/" className={clsx(style.logo)}>Logo</a>
        <div className={clsx(style.docs )}>
          <div className={clsx(style.docs_items)}>
            <div className={clsx(style.docs_item)}>
              <Link to="/docs" className={clsx(style.docs_links )}>
                Docs
              </Link>
             
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default HeaderDocs
