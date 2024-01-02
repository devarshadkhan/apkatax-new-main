"use client";
import React from "react";
import Slider from "react-slick";
import styles from "@/_styles/components/SlidersCSS/SliderSectionTwo.module.css";
import Image from "next/image";
import SlideImg from "@/_assets/SlideImg.png";
import slideArrowIconRight from "@/_assets/Icons/slideArrowIconRight.svg";
import classNames from "classnames";
const SliderSectionTwo = () => {
  const settings = {
    // className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    
    // dotsClass: classNames(styles.slick_dots, styles.slick_thumb),
    // autoplaySpeed: 2000,
    // autoplay: true,
    // speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  // const settingsNoModules = {
  //   dots: true,
  //   infinite: true,
  //   // speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   // autoplay: true,
  //   autoplaySpeed: 3000,
  //   // dotsClass: "button__bar",
  //   arrows: true,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  // };

  // const settingsWithModules = {
  //   ...settingsNoModules,
  //   // dotsClass: styles.button__bar
  // };

  const itemsArray = Array.from({ length: 10 }, (_, index) => index);

  return (
    <>
      <Slider {...settings}  >
        {itemsArray.map((item) => {
          return (
            <>
              <div key={item}>
                <div className={styles.sliderWrp}>
                  <div className="container">
                    <div className={classNames("row", styles.row)}>
                      <div className="col-md-4">
                        <div className={styles.leftContent}>
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
                          <p>
                            Grow your professional network with peer
                            interactions, sessions with industry leaders, and
                            get access to a dedicated
                          </p>
                       
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className={styles.leftContent}>
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
                          <p>
                            Grow your professional network with peer
                            interactions, sessions with industry leaders, and
                            get access to a dedicated
                          </p>
                       
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className={styles.leftContent}>
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
                          <p>
                            Grow your professional network with peer
                            interactions, sessions with industry leaders, and
                            get access to a dedicated
                          </p>
                       
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default SliderSectionTwo;
