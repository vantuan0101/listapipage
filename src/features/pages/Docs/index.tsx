import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import docsApi from '../../../api/docsApi'
import ContentDocs from './components/ContentDocs/ContentDocs'
import DocsSideBar from './components/DocsSideBar/DocsSideBar'
import style from './docs.module.scss'
import { IDocsResult } from './interface'
const DocPages = () => {
  const [data, setData] = useState<IDocsResult>()
  let { slugApi } = useParams<{ slugApi: string }>()
  useEffect(() => {
    const result = async () => {
      if (slugApi) {
        const res = await docsApi.getOneByName(slugApi)
        setData(res.data)
      }
    }
    result()
  }, [])
  // console.log(data)
  return (
    <div className={clsx(style.main)}>
      <div className={clsx(style.contain)}>
        <DocsSideBar data={data} />
        <ContentDocs data={data} />
      </div>
    </div>
  )
}

export default DocPages
