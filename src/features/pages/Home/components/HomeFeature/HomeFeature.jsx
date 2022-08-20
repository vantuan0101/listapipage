import React from "react";
import style from "./homefeature.module.scss";
import clsx from "clsx";
import { FaCode } from "react-icons/fa";
const HomeFeature = () => {
  return (
    <div className={clsx(style.feature)}>
      <div className={clsx(style.feature_contain)}>
        <div className={clsx(style.feature_cover)}>
          <div className={clsx(style.feature_heading)}>
            <div className={clsx(style.heading_top)}>Top Feature</div>
            <div className={clsx(style.heading_build)}>Build apps fast.</div>
            <div className={clsx(style.heading_foot)}>
              Building self-hosted, customizable, and performant content API has
              never been easier.
            </div>
          </div>

          <div className={clsx(style.feature_items)}>
            <div className={clsx(style.feature_item)}>
              <div className={clsx(style.feature_icon)}>
                <div className={clsx(style.icon_i)}>
                  <FaCode />
                </div>
                <h3 className={clsx(style.icon_name)}>RESTful or GraphQL</h3>
              </div>
              <div className={clsx(style.feature_info)}>
                <p>
                  Consume the API from any client (React, Vue, Angular), mobile
                  apps or even IoT devices, using REST or GraphQL.
                </p>
              </div>
            </div>
            <div className={clsx(style.feature_item)}>
              <div className={clsx(style.feature_icon)}>
                <div className={clsx(style.icon_i)}>
                  <FaCode />
                </div>
                <h3 className={clsx(style.icon_name)}>RESTful or GraphQL</h3>
              </div>
              <div className={clsx(style.feature_info)}>
                <p>
                  Consume the API from any client (React, Vue, Angular), mobile
                  apps or even IoT devices, using REST or GraphQL.
                </p>
              </div>
            </div>
            <div className={clsx(style.feature_item)}>
              <div className={clsx(style.feature_icon)}>
                <div className={clsx(style.icon_i)}>
                  <FaCode />
                </div>
                <h3 className={clsx(style.icon_name)}>RESTful or GraphQL</h3>
              </div>
              <div className={clsx(style.feature_info)}>
                <p>
                  Consume the API from any client (React, Vue, Angular), mobile
                  apps or even IoT devices, using REST or GraphQL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeature;
