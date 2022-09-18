import React from 'react'
import clsx from 'clsx'
import style from './imagecard.module.scss'
interface ItemProps {
  name: string
  // image: string
}

const ImageCard = ({ data }: { data: ItemProps }) => {
  return (
    <div className={clsx(style.card)}>
      <img
        className={clsx(style.img)}
        alt="kitty"
        src="https://picsum.photos/200/300"
      />
      <span children={data.name} />
    </div>
  )
}

export default ImageCard
