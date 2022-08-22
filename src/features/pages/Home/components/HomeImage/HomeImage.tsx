import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import style from "./homeimage.module.scss";

interface GridItemProps{
    columnGrid: {
      item1:string;
      item2:string;
    } ;
    rowGrid:{
      item1:string;
      item2:string;
    };
}
const HomeImage = ({columnGrid,
  rowGrid}:GridItemProps) => {
  const [checkDevice, setCheckDevice] = useState({
    isTablet: false,
    isDesktop: false,
  });
  useEffect(() => {
    if (window.innerWidth >= 768 && window.innerWidth <= 991) {
      setCheckDevice({
        isTablet: true,
        isDesktop: false,
      });
    } else if (window.innerWidth >= 992) {
      setCheckDevice({
        isTablet: false,
        isDesktop: true,
      });
    }
  }, []);
  return (
    <div className={clsx(style.demo)}>
      <div className={clsx(style.demo_items)}>
        <ParallaxBanner
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
        </ParallaxBanner>
      </div>
    </div>
  );
};

export default HomeImage;
