"use client";
import React from "react";
import Slider from "react-slick";
import styles from "@/_styles/components/SlidersCSS/SliderSectionFive.module.css";
import Image from "next/image";
import mahindraLogo from "@/_assets/mahindraLogo.jpg";
import slideArrowIconRight from "@/_assets/Icons/slideArrowIconRight.svg";
import classNames from "classnames";
const SliderSectionFive = () => {
  const settings = {
    dots: true,
    // infinite: true,
    slidesToShow: 4,
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
              <div key={item} className={styles.slideMainWrp}>
                <div className="container">
                  <div className={styles.sliderWrp}>
                    <div className={classNames("row", styles.row)}>
                      <div className="col-12">
                        <div className={styles.Slidecard}>
                          <div className={styles.card_Img}>
                            <Image
                              src={
                                mahindraLogo
                              }
                              alt=""
                            />
                          </div>
                          <div className={styles.card_Text}>
                            <p>
                              Find out how our Learners transformed their
                              careers after learning with us.Find how our
                              Learners transformed their careers
                            </p>
                            <span>09 Oct 2023</span>
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

export default SliderSectionFive;
