import React from 'react'
import clsx from 'clsx'
import style from './homehorror.module.scss'
const HomeHorror = () => {
  return (
    <div className={clsx(style.horror)}>
          <div className={clsx(style.member)}>
            <h3 className={clsx(style.member_heading)}>Member</h3>
            <div className={clsx(style.member_list)}>
              <div className={clsx(style.info)}>
                <div className={clsx(style.info_avt)}>
                  <img src="https://picsum.photos/id/237/200/300" alt="" />
                </div>
                <div className={clsx(style.info_name)}>Van Tuan</div>
              </div>
              <div className={clsx(style.works)}>Leader Team</div>
            </div>
          </div>
        </div>
  )
}

export default HomeHorror
