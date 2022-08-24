import React, { useRef } from 'react'
import clsx from 'clsx'
import style from './docsidebar.module.scss'
import { Link, NavLink } from 'react-router-dom'
interface DataProps {
  id: number
  title: string
  slug: string
  parentId: number
}
interface AccProps extends DataProps{
  items: Array<DataProps> 
}

const data: Array<DataProps> = [
  {
    id: 1,
    title: '🚀 Getting Started',
    slug: 'getting-started',
    parentId: 0,
  },
  {
    id: 2,
    title: '🚀 Introduction',
    slug: 'Introduction',
    parentId: 1,
  },
  {
    id: 3,
    title: '🚀 asbc',
    slug: 'asbc',
    parentId: 1,
  },
  {
    id: 4,
    title: '🚀 help',
    slug: 'help',
    parentId: 0,
  },
]

const DocsSideBar = () => {
  const test = data.reduce((acc: Array<AccProps>, curr: DataProps) => {
    const checkItem = acc?.findIndex((item) => item?.id === curr?.parentId)
    // console.log(curr)
    if (checkItem === -1) {
      acc = [...acc, { ...curr, items: [] }]
    } else{
      acc[checkItem].items = [...acc[checkItem]?.items, curr]
    }
    return acc
  }, [])

  return (
    <aside className={clsx(style.sidebar)}>
      Side BAr
      <ul className={clsx(style.sidebar_items)}>
        {test.map((item) => (
          <li key={item.id} className={clsx(style.sidebar_item)}>
            <section className={clsx(style.sidebar_group)}>
              <a href={`#${item.slug}`}  data-to-scrollspy-id={`${item.slug}`} className={clsx(style.sidebar_heading)}>
                <div className=''>{item.title}</div>
              </a>
              <ul className={clsx(style.sidebar_group_items)}>
                {item?.items?.map((item: any) => (
                  <li key={item.id}>
                    <a  data-to-scrollspy-id={`${item.slug}`}
                      href={`#${item.slug}`}
                      className={clsx(style.sidebar_link)}
                    >
                      <div  className=''>{item.title}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default DocsSideBar
