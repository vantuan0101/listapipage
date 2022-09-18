import React from 'react'
import style from './home.module.scss'
import clsx from 'clsx'
import HomeImage from './components/HomeImage/HomeImage'
import HomeHorror from './components/HomeHorror/HomeHorror'
import HomeState from './components/HomeState/HomeState'
import HomeFeature from './components/HomeFeature/HomeFeature'
import HomeReview from './components/HomeReview/HomeReview'
import HomeForm from './components/HomeForm/HomeForm'
const Home = () => {
  return (
    <>
      <div className={clsx(style.home)}>
        <div className={clsx(style.contain)}>
          <div className={clsx(style.heading)}>
            <h1>List of those API Sharing</h1>
          </div>

          <HomeHorror />

          <HomeState />

          <HomeImage />

          <HomeState />
        </div>
      </div>
      <HomeFeature />

      <HomeReview />
      <HomeForm />
    </>
  )
}

export default Home
