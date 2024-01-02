"use client";
import React from "react";
import Slider from "react-slick";
import styles from "@/_styles/components/SlidersCSS/SliderSectionSix.module.css";
import Image from "next/image";
import mahindraLogo from "@/_assets/blogImg.png";
import Time from "@/_assets//Icons/Time.svg";
import slideArrowIconRight from "@/_assets/Icons/slideArrowIconRight.svg";
import classNames from "classnames";
const SliderSectionSix = () => {
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
              <div key={item} className={styles.slideMainWrp}>
                <div className="container">
                  <div className={styles.sliderWrp}>
                    <div className={classNames("row", styles.row)}>
                      <div className="col-12">
                        <div className={styles.Slidecard}>
                          <div className={styles.card_Img}>
                            {/* <Image src={mahindraLogo} alt="" /> */}
                            <img src={"https://images.hindustantimes.com/img/2023/02/04/1600x900/shah_rukh_khan_asksrk_1675495200645_1675495200817_1675495200817.jpg"} alt="" />
                            {/* <img src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"} alt="" /> */}
                          </div>
                          <div className={styles.card_Text}>
                          <h6>Public Registerarion<span>  <Image src={Time} alt="" /> Dec 12, 2023</span></h6>
                            <p>
                              Find out how our Learners transformed their
                              careers after learning with us.Find how our
                              Learners transformed their careers
                            </p>
                            <a href="">Read More</a>
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

export default SliderSectionSix;
