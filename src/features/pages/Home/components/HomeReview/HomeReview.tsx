import React, { useEffect, useState } from "react";
import clsx from "clsx";
import style from "./homereview.module.scss";
import SliderField from "../../../../../components/SliderField/SliderField";
const HomeReview = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(():void => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);
  return (
    <div className={clsx(style.main)}>
      <div className={clsx(style.contain)}>
        <div className={clsx(style.header)}>
          <div className={clsx(style.header_heading)}>REviews</div>
          <div className={clsx(style.header_foot)}>
            here's what people have to say about us.
          </div>
        </div>
        <ul className={clsx(style.items)}>
          {isMobile ? (
            <SliderField>
              <div className={clsx(style.items_col)}>
                <li className={clsx(style.item)}>
                  <div className={clsx(style.item_heading)}>
                    <div className={clsx(style.heading_avt)}>
                      <img src="https://picsum.photos/id/237/200/300" alt="" />
                    </div>
                    <div className={clsx(style.heading_name)}>Name</div>
                  </div>
                  <div className={clsx(style.item_about)}>
                    <p>
                      Strapi has turned out to be a great choice so far:
                      technical setup was really quick, and in a few days we
                      were able to have a drafted site up & running, leveraging
                      Strapi main functionalities.
                    </p>
                  </div>
                </li>
              </div>
              <div className={clsx(style.items_col)}>
                <li className={clsx(style.item)}>
                  <div className={clsx(style.item_heading)}>
                    <div className={clsx(style.heading_avt)}>
                      <img src="https://picsum.photos/id/237/200/300" alt="" />
                    </div>
                    <div className={clsx(style.heading_name)}>Name</div>
                  </div>
                  <div className={clsx(style.item_about)}>
                    <p>
                      Strapi has turned out to be a great choice so far:
                      technical setup was really quick, and in a few days we
                      were able to have a drafted site up & running, leveraging
                      Strapi main functionalities.
                    </p>
                  </div>
                </li>
              </div>
              <div className={clsx(style.items_col)}>
                <li className={clsx(style.item)}>
                  <div className={clsx(style.item_heading)}>
                    <div className={clsx(style.heading_avt)}>
                      <img src="https://picsum.photos/id/237/200/300" alt="" />
                    </div>
                    <div className={clsx(style.heading_name)}>Name</div>
                  </div>
                  <div className={clsx(style.item_about)}>
                    <p>
                      Strapi has turned out to be a great choice so far:
                      technical setup was really quick, and in a few days we
                      were able to have a drafted site up & running, leveraging
                      Strapi main functionalities.
                    </p>
                  </div>
                </li>
              </div>
            </SliderField>
          ) : (
            <>
              <div className={clsx(style.items_col)}>
                <li className={clsx(style.item)}>
                  <div className={clsx(style.item_heading)}>
                    <div className={clsx(style.heading_avt)}>
                      <img src="https://picsum.photos/id/237/200/300" alt="" />
                    </div>
                    <div className={clsx(style.heading_name)}>Name</div>
                  </div>
                  <div className={clsx(style.item_about)}>
                    <p>
                      Strapi has turned out to be a great choice so far:
                      technical setup was really quick, and in a few days we
                      were able to have a drafted site up & running, leveraging
                      Strapi main functionalities.
                    </p>
                  </div>
                </li>
              </div>
              <div className={clsx(style.items_col)}>
                <li className={clsx(style.item)}>
                  <div className={clsx(style.item_heading)}>
                    <div className={clsx(style.heading_avt)}>
                      <img src="https://picsum.photos/id/237/200/300" alt="" />
                    </div>
                    <div className={clsx(style.heading_name)}>Name</div>
                  </div>
                  <div className={clsx(style.item_about)}>
                    <p>
                      Strapi has turned out to be a great choice so far:
                      technical setup was really quick, and in a few days we
                      were able to have a drafted site up & running, leveraging
                      Strapi main functionalities.
                    </p>
                  </div>
                </li>
              </div>
              <div className={clsx(style.items_col)}>
                <li className={clsx(style.item)}>
                  <div className={clsx(style.item_heading)}>
                    <div className={clsx(style.heading_avt)}>
                      <img src="https://picsum.photos/id/237/200/300" alt="" />
                    </div>
                    <div className={clsx(style.heading_name)}>Name</div>
                  </div>
                  <div className={clsx(style.item_about)}>
                    <p>
                      Strapi has turned out to be a great choice so far:
                      technical setup was really quick, and in a few days we
                      were able to have a drafted site up & running, leveraging
                      Strapi main functionalities.
                    </p>
                  </div>
                </li>
              </div>
              <div className={clsx(style.items_col)}>
                <li className={clsx(style.item)}>
                  <div className={clsx(style.item_heading)}>
                    <div className={clsx(style.heading_avt)}>
                      <img src="https://picsum.photos/id/237/200/300" alt="" />
                    </div>
                    <div className={clsx(style.heading_name)}>Name</div>
                  </div>
                  <div className={clsx(style.item_about)}>
                    <p>
                      Strapi has turned out to be a great choice so far:
                      technical setup was really quick, and in a few days we
                      were able to have a drafted site up & running, leveraging
                      Strapi main functionalities.
                    </p>
                  </div>
                </li>
              </div>
              <div className={clsx(style.items_col)}>
                <li className={clsx(style.item)}>
                  <div className={clsx(style.item_heading)}>
                    <div className={clsx(style.heading_avt)}>
                      <img src="https://picsum.photos/id/237/200/300" alt="" />
                    </div>
                    <div className={clsx(style.heading_name)}>Name</div>
                  </div>
                  <div className={clsx(style.item_about)}>
                    <p>
                      Strapi has turned out to be a great choice so far:
                      technical setup was really quick, and in a few days we
                      were able to have a drafted site up & running, leveraging
                      Strapi main functionalities.
                    </p>
                  </div>
                </li>
              </div>
              <div className={clsx(style.items_col)}>
                <li className={clsx(style.item)}>
                  <div className={clsx(style.item_heading)}>
                    <div className={clsx(style.heading_avt)}>
                      <img src="https://picsum.photos/id/237/200/300" alt="" />
                    </div>
                    <div className={clsx(style.heading_name)}>Name</div>
                  </div>
                  <div className={clsx(style.item_about)}>
                    <p>
                      Strapi has turned out to be a great choice so far:
                      technical setup was really quick, and in a few days we
                      were able to have a drafted site up & running, leveraging
                      Strapi main functionalities.
                    </p>
                  </div>
                </li>
              </div>
              {/* <div className={clsx(style.items_col)}>
                <li className={clsx(style.item)}>
                  <div className={clsx(style.item_heading)}>
                    <div className={clsx(style.heading_avt)}>
                      <img src="https://picsum.photos/id/237/200/300" alt="" />
                    </div>
                    <div className={clsx(style.heading_name)}>Name</div>
                  </div>
                  <div className={clsx(style.item_about)}>
                    <p>
                      Strapi has turned out to be a great choice so far:
                      technical setup was really quick, and in a few days we
                      were able to have a drafted site up & running, leveraging
                      Strapi main functionalities.
                    </p>
                  </div>
                </li>
                <li className={clsx(style.item)}>
                  <div className={clsx(style.item_heading)}>
                    <div className={clsx(style.heading_avt)}>
                      <img src="https://picsum.photos/id/237/200/300" alt="" />
                    </div>
                    <div className={clsx(style.heading_name)}>Name</div>
                  </div>
                  <div className={clsx(style.item_about)}>
                    <p>
                      Strapi has turned out to be a great choice so far:
                      technical setup was really quick, and in a few days we
                      were able to have a drafted site up & running, leveraging
                      Strapi main functionalities.
                    </p>
                  </div>
                </li>
                <li className={clsx(style.item)}>
                  <div className={clsx(style.item_heading)}>
                    <div className={clsx(style.heading_avt)}>
                      <img src="https://picsum.photos/id/237/200/300" alt="" />
                    </div>
                    <div className={clsx(style.heading_name)}>Name</div>
                  </div>
                  <div className={clsx(style.item_about)}>
                    <p>
                      Strapi has turned out to be a great choice so far:
                      technical setup was really quick, and in a few days we
                      were able to have a drafted site up & running, leveraging
                      Strapi main functionalities.
                    </p>
                  </div>
                </li>
              </div>
              <div className={clsx(style.items_col)}>
                <li className={clsx(style.item)}>
                  <div className={clsx(style.item_heading)}>
                    <div className={clsx(style.heading_avt)}>
                      <img src="https://picsum.photos/id/237/200/300" alt="" />
                    </div>
                    <div className={clsx(style.heading_name)}>Name</div>
                  </div>
                  <div className={clsx(style.item_about)}>
                    <p>
                      Strapi has turned out to be a great choice so far:
                      technical setup was really quick, and in a few days we
                      were able to have a drafted site up & running, leveraging
                      Strapi main functionalities.
                    </p>
                  </div>
                </li>
                <li className={clsx(style.item)}>
                  <div className={clsx(style.item_heading)}>
                    <div className={clsx(style.heading_avt)}>
                      <img src="https://picsum.photos/id/237/200/300" alt="" />
                    </div>
                    <div className={clsx(style.heading_name)}>Name</div>
                  </div>
                  <div className={clsx(style.item_about)}>
                    <p>
                      Strapi has turned out to be a great choice so far:
                      technical setup was really quick, and in a few days we
                      were able to have a drafted site up & running, leveraging
                      Strapi main functionalities.
                    </p>
                  </div>
                </li>
                <li className={clsx(style.item)}>
                  <div className={clsx(style.item_heading)}>
                    <div className={clsx(style.heading_avt)}>
                      <img src="https://picsum.photos/id/237/200/300" alt="" />
                    </div>
                    <div className={clsx(style.heading_name)}>Name</div>
                  </div>
                  <div className={clsx(style.item_about)}>
                    <p>
                      Strapi has turned out to be a great choice so far:
                      technical setup was really quick, and in a few days we
                      were able to have a drafted site up & running, leveraging
                      Strapi main functionalities.
                    </p>
                  </div>
                </li>
              </div>
              <div className={clsx(style.items_col)}>
                <li className={clsx(style.item)}>
                  <div className={clsx(style.item_heading)}>
                    <div className={clsx(style.heading_avt)}>
                      <img src="https://picsum.photos/id/237/200/300" alt="" />
                    </div>
                    <div className={clsx(style.heading_name)}>Name</div>
                  </div>
                  <div className={clsx(style.item_about)}>
                    <p>
                      Strapi has turned out to be a great choice so far:
                      technical setup was really quick, and in a few days we
                      were able to have a drafted site up & running, leveraging
                      Strapi main functionalities.
                    </p>
                  </div>
                </li>
                <li className={clsx(style.item)}>
                  <div className={clsx(style.item_heading)}>
                    <div className={clsx(style.heading_avt)}>
                      <img src="https://picsum.photos/id/237/200/300" alt="" />
                    </div>
                    <div className={clsx(style.heading_name)}>Name</div>
                  </div>
                  <div className={clsx(style.item_about)}>
                    <p>
                      Strapi has turned out to be a great choice so far:
                      technical setup was really quick, and in a few days we
                      were able to have a drafted site up & running, leveraging
                      Strapi main functionalities.
                    </p>
                  </div>
                </li>
                <li className={clsx(style.item)}>
                  <div className={clsx(style.item_heading)}>
                    <div className={clsx(style.heading_avt)}>
                      <img src="https://picsum.photos/id/237/200/300" alt="" />
                    </div>
                    <div className={clsx(style.heading_name)}>Name</div>
                  </div>
                  <div className={clsx(style.item_about)}>
                    <p>
                      Strapi has turned out to be a great choice so far:
                      technical setup was really quick, and in a few days we
                      were able to have a drafted site up & running, leveraging
                      Strapi main functionalities.
                    </p>
                  </div>
                </li>
              </div> */}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HomeReview;
