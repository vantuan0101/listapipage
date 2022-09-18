import clsx from 'clsx'
import { IDocsResult } from '../../interface'
import style from './docsidebar.module.scss'

const DocsSideBar = ({ data }: { data: IDocsResult | undefined }) => {
  return (
    <aside className={clsx(style.sidebar)}>
      <ul className={clsx(style.sidebar_items)}>
        <li className={clsx(style.sidebar_item)}>
          <section className={clsx(style.sidebar_group)}>
            <a
              href={`/docs/${data?.slug}#${data?.slug}`}
              className={clsx(style.sidebar_heading)}
            >
              <div className="">{data?.name}</div>
            </a>
            <ul className={clsx(style.sidebar_group_items)}>
              {data?.CodeBlock?.map((item) => (
                <li key={item.id}>
                  <a
                    href={`/docs/${data?.slug}#${item.slug}`}
                    className={clsx(style.sidebar_link)}
                  >
                    <div className="">{item.title}</div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </li>
      </ul>
    </aside>
  )
}

export default DocsSideBar
