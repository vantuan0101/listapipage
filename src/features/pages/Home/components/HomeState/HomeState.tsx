import React from "react";
import clsx from "clsx";
import style from "./homestate.module.scss";
const HomeState = () => {
  return (
    <div className={clsx(style.state)}>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit porro eos
        dolorum eius itaque placeat odio et fuga! Fuga vero nemo accusamus nam
        labore rem, praesentium consectetur nostrum aliquid facere!
      </span>
    </div>
  );
};

export default HomeState;
