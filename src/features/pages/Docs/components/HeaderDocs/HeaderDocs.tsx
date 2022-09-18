import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import style from './headerdocs.module.scss'
import { Link } from 'react-router-dom'
import { FcExpand, FcMenu } from 'react-icons/fc'
import { useSelector } from 'react-redux'
import { FaTimes } from 'react-icons/fa'
import { IDocsResult } from '../../interface'
import docsApi from '../../../../../api/docsApi'
import { AxiosResponse } from 'axios'
import logo from '../../../../../assets/image/logo.svg'
const HeaderDocs = () => {
  const [isShow, setIsShow] = useState(false)
  const [data, setData] = useState<IDocsResult[]>([])
  const { user } = useSelector((state: any) => state.user)
  useEffect(() => {
    const result: () => Promise<void> = async () => {
      const res: AxiosResponse<any, any> = await docsApi.getAll()
      setData(res.data)
    }
    result()
  }, [])
  console.log(data)
  // console.log(user)
  const hanleClickMenu = () => {
    setIsShow(!isShow)
  }
  return (
    <div className={clsx(style.header)}>
      <div className={clsx(style.contain)}>
        <div className={clsx(style.menu)}>
          <FcMenu onClick={() => hanleClickMenu()} />
        </div>
        <a href="/" className={clsx(style.logo)}>
          <img src={logo} alt="Need Api" />
        </a>
        <div className={clsx(style.docs, isShow && style.docs_active)}>
          {isShow && <div className="overlay"></div>}
          <div className={clsx(style.docs_items)}>
            <div className={clsx(style.docs_close)}>
              <FaTimes onClick={() => hanleClickMenu()} />
            </div>
            <div className={clsx(style.docs_item)}>
              <a href="/docs" className={clsx(style.docs_links)}>
                Documents
              </a>
              <ul className={clsx(style.docs_item_name)}>
                {data?.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`/docs/${item?.slug}`}
                      className={clsx(style.docs_links_item)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {user ? (
              <div className={clsx(style.docs_account)}>
                <div className={clsx(style.docs_account_user)}>
                  <div className={clsx(style.docs_account_image)}>
                    <img
                      src="https://picsum.photos/id/237/200/300"
                      alt={`${user.firstName + user.lastName}`}
                    />
                  </div>
                  <div className={clsx(style.docs_account_name)}>
                    {user.firstName + user.lastName}
                  </div>
                  <FcExpand />
                </div>
                <ul className={clsx(style.docs_account_tools)}>
                  <li>
                    <Link to="/account/me" className={clsx(style.docs_links)}>
                      Tài khoản
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/account/logout"
                      className={clsx(style.docs_links)}
                    >
                      Đăng xuất
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div className={clsx(style.docs_items, style.docs_auth)}>
                <div className={clsx(style.docs_item, style.docs_signup)}>
                  <Link to="/auth/register" className={clsx(style.docs_links)}>
                    Đăng ký
                  </Link>
                </div>
                <div className={clsx(style.docs_item, style.docs_login)}>
                  <Link to="/auth/login" className={clsx(style.docs_links)}>
                    Đăng nhập
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderDocs
