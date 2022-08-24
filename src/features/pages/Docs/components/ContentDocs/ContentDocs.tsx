import React, { Fragment } from 'react'
import style from './contentdocs.module.scss'
import clsx from 'clsx'
import ScrollSpy from 'react-ui-scrollspy'
// import ScrollSpy from '../../../../../components/Scrollspy/Scrollspy'
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

const test = data.reduce((acc: Array<AccProps>, curr: DataProps) => {
  const checkItem = acc?.findIndex((item) => item?.id === curr?.parentId)
  // console.log(curr)
  if (checkItem === -1) {
    acc = [...acc, { ...curr, items: [] }]
  } else{
    acc[checkItem].items = [...acc[checkItem]?.items, curr]
  }
  
  // if (acc[checkItem].items) {
  //   acc[checkItem].items = [...acc[checkItem]?.items, curr]
  // } else {
  //   acc[checkItem].items = [curr]
  // }
    return acc
}, [])
console.log(test)
const ContentDocs = () => {
  return (
    <div className={clsx(style.docs)}>
      {/* Docs */}
      
        {test?.map((item) => (
      <ScrollSpy key={item.id} scrollThrottle={100}  >
          <Fragment >
          
          <div id={item.slug}  className={clsx(style.items)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
            Tempore, vero!
          </div>
          {item?.items?.length > 0 ? item?.items?.map((item) => (
              <div id={item.slug} key={item.id} className={clsx(style.items)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
            Tempore, vero!
          </div>
            )) : ''}
            </Fragment>
      </ScrollSpy>
        ))}
    </div>
  )
}

export default ContentDocs
