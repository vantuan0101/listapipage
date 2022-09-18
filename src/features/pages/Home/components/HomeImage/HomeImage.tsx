import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import style from './homeimage.module.scss'
import { Masonry } from 'masonic'
import ImageCard from '../../../../../components/Masonry/ImageCard'
import docsApi from '../../../../../api/docsApi'
import { IGetDocs } from '../../../../../interface'

const HomeImage = () => {
  const [data, setData] = useState<IGetDocs[]>([])
  useEffect(() => {
    const result = async () => {
      const res = await docsApi.getAll()
      setData(res.data)
    }
    result()
  }, [])

  return (
    <div className={clsx(style.demo)}>
      <div className={clsx(style.demo_items)}>
        <Masonry
          items={data}
          columnGutter={8} // Set khoảng cách giữa các column
          columnWidth={300} // Set chiều rộng tối thiểu là 300px
          overscanBy={5} // Giá trị để render trước khi scroll tới
          render={ImageCard} // Grid item của component
        />
        {/* <ParallaxBanner
          style={{
            aspectRatio: "2 / 1",
            gridColumn : checkDevice.isTablet ? columnGrid.item1 : 'unset',
            gridRow: checkDevice.isDesktop ? rowGrid.item1 : 'unset',
          }}
          className={clsx(style.demo_item_1)}
        >
          <ParallaxBannerLayer
            image="https://picsum.photos/id/237/200/300"
            speed={8}
            easing="easeInOutCubic"
          />
        </ParallaxBanner>
        <ParallaxBanner
          style={{
            aspectRatio: "2 / 1",
            gridColumn: checkDevice.isTablet ? columnGrid.item2 : 'unset',
            gridRow: checkDevice.isDesktop ? rowGrid.item2  : 'unset',
          }}
          className={clsx(style.demo_item_2)}
        >
          <ParallaxBannerLayer
            image="https://picsum.photos/id/237/200/300"
            speed={8}
            easing="easeInOutCubic"
          />
        </ParallaxBanner>
        <ParallaxBanner
          style={{
            aspectRatio: "2 / 1",
            gridColumn: checkDevice.isTablet ? columnGrid.item1 : 'unset',
            gridRow: checkDevice.isDesktop ? rowGrid.item1 : 'unset',
          }}
          className={clsx(style.demo_item_3)}
        >
          <ParallaxBannerLayer
            image="https://picsum.photos/id/237/200/300"
            speed={8}
            easing="easeInOutCubic"
          />
        </ParallaxBanner> */}
      </div>
    </div>
  )
}

export default HomeImage
