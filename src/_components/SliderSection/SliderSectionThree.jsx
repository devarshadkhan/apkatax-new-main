"use client";
import React from "react";
import Slider from "react-slick";
import styles from "@/_styles/components/SlidersCSS/SliderSectionThree.module.css";
import Image from "next/image";
import SlideImg from "@/_assets/SlideImg.png";
import slideArrowIconRight from "@/_assets/Icons/slideArrowIconRight.svg";
import classNames from "classnames";
const SliderSectionThree = () => {
  const settings = {
    dots: true,
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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
                      <div className="col-12">
                        <div className={styles.Slidecard}>
                          <div className={styles.card_Img}>
                            <img
                              src="https://cdn-prod.medicalnewstoday.com/content/images/articles/326/326898/a-female-wondering-about-her-anatomy.jpg"
                              alt=""
                            />
                          </div>
                          <div className={styles.card_Text}>
                          <h6>Dr Amrita Singh </h6>
                            <p>
                              Frontend developer
                            </p>
                          </div>
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

export default SliderSectionThree;
