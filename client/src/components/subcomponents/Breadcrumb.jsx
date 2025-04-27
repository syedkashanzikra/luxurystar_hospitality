import React from "react";
import { Link } from "react-router-dom"; // if you are using react-router

const Breadcrumb = ({ title, paths = [] }) => {
  return (
    <div
      className="breadcrumb__area dark-green breadcrumb-space overflow-hidden position-relative z-1"
      data-background="assets/imgs/breadcrumb/breadcrumb.png"
    >
      <div className="breadcrumb__shapes">
        <img
          className="upDown"
          src="assets/imgs/breadcrumb/shape.png"
          alt="img not found"
        />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12">
            <div className="breadcrumb__content">
              <div className="breadcrumb__title-wrapper mb-15 mb-sm-10 mb-xs-5">
                <h1
                  className="breadcrumb__title color-white wow fadeInLeft animated"
                  data-wow-delay=".2s"
                >
                  {title}
                </h1>
              </div>
              <div
                className="breadcrumb__menu wow fadeInLeft animated"
                data-wow-delay=".4s"
              >
                <nav>
                  <ul>
                    {paths.map((path, index) => (
                      <li key={index} className={path.active ? "active" : ""}>
                        <span>
                          {path.link ? (
                            <Link to={path.link}>{path.label}</Link>
                          ) : (
                            path.label
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
