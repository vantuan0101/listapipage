import React from "react";
import style from "./home.module.scss";
import clsx from "clsx";
import HomeImage from "./components/HomeImage/HomeImage";
import HomeHorror from "./components/HomeHorror/HomeHorror";
import HomeState from "./components/HomeState/HomeState";
import HomeFeature from "./components/HomeFeature/HomeFeature";
import HomeReview from "./components/HomeReview/HomeReview";
import HomeForm from "./components/HomeForm/HomeForm";
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

          <HomeImage
            columnGrid={{ item1: "1/4", item2: "2/5" }}
            rowGrid={{ item1: "1/3", item2: "2/6" }}
          />

          <HomeState />
        </div>
      </div>
      <HomeFeature />
      <HomeImage
        columnGrid={{ item1: "2/5", item2: "1/4" }}
        rowGrid={{ item1: "2/6", item2: "1/3" }}
      />
      <HomeReview />
      <HomeForm />
    </>
  );
};

export default Home;
