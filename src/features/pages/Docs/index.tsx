import React from 'react'
import style from './docs.module.scss'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import DocsSideBar from './components/DocsSideBar/DocsSideBar'
import ContentDocs from './components/ContentDocs/ContentDocs'
const DocPages = () => {
  return (
    <div className={clsx(style.main)}>
      <div className={clsx(style.contain)}>
        <DocsSideBar />
        <ContentDocs />
      </div>
    </div>
  )
}

export default DocPages
