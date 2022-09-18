import React, { useEffect, useState } from 'react'
import style from './homedoc.module.scss'
import clsx from 'clsx'
import { IDocsResult } from './interface'
import docsApi from '../../../api/docsApi'
import { AxiosResponse } from 'axios'
const HomeDoc = () => {
  const [data, setData] = useState<IDocsResult[]>([])
  useEffect(() => {
    const result: () => Promise<void> = async () => {
      const res: AxiosResponse<any, any> = await docsApi.getAll()
      setData(res.data)
    }
    result()
  }, [])
  console.log(data)
  return (
    <div className={clsx(style.main)}>
      <div className={clsx(style.contain)}>
        <aside className={clsx(style.sidebar)}>
          <ul className={clsx(style.sidebar_items)}>
            {data?.map((item) => (
              <li className={clsx(style.sidebar_item)} key={item.id}>
                <section className={clsx(style.sidebar_group)}>
                  <a
                    href={`/docs/${item?.slug}`}
                    className={clsx(style.sidebar_heading)}
                  >
                    <div className="">{item?.name}</div>
                  </a>
                </section>
              </li>
            ))}
          </ul>
        </aside>
        <div className={clsx(style.content)}>
          <h1 className={clsx(style.content_heading)}>
            Chào mừng đến với bình nguyên vô tận
          </h1>
        </div>
      </div>
    </div>
  )
}

export default HomeDoc
