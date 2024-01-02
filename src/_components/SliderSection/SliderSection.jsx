"use client";
import React from "react";
import Slider from "react-slick";
import styles from "@/_styles/components/SlidersCSS/SliderSectionOne.module.css";
import Image from "next/image";
import SlideImg from "@/_assets/SlideImg.png";
import slideArrowIconRight from "@/_assets/Icons/slideArrowIconRight.svg";
import classNames from "classnames";
const SliderSection = () => {
  const settings = {
    dots: true,
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    customPaging: function (i) {
      return <div className={styles.dot}></div>;
    },
    dotsClass: styles.button__bar,
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
  }

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
      <Slider {...settings}>
        {itemsArray.map((item) => {
          return (
            <>
              <div key={item}>
                <div className={styles.sliderWrp}>
                  <div className="container">
                    <div className={classNames("row", styles.row)}>
                      <div className="col-md-6">
                        <div className={styles.leftContent}>
                          <h6>Stay With Connected </h6>
                          <h2>India’s Best Business Registered</h2>
                          <p>
                            Grow your professional network with peer
                            interactions, sessions with industry leaders, and
                            get access to a dedicated
                          </p>
                          <button>
                            Popular Services{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="16"
                              viewBox="0 0 32 16"
                              fill="none"
                            >
                              <path
                                d="M31.7071 8.70711C32.0976 8.31659 32.0976 7.68342 31.7071 7.2929L25.3431 0.928934C24.9526 0.53841 24.3195 0.53841 23.9289 0.928934C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM-8.74228e-08 9L31 9L31 7L8.74228e-08 7L-8.74228e-08 9Z"
                                fill="white"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <Image src={SlideImg} />
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

export default SliderSection;

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   console.log(className, style);
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         backgroundImage: `url(${slideArrowIconRight})`,
//       }}
//       // style={{ ...style, display: "block",backgroundImage: "url(" + { slideArrowIconRight } + ")"}}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }
