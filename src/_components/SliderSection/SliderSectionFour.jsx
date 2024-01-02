"use client";
import React from "react";
import Slider from "react-slick";
import styles from "@/_styles/components/SlidersCSS/SliderSectionFour.module.css";
import Image from "next/image";
import MAN from "@/_assets/MAN.png";
import slideArrowIconRight from "@/_assets/Icons/slideArrowIconRight.svg";
import classNames from "classnames";
const SliderSectionFour = () => {
  const settings = {
    dots: true,
    // infinite: true,
    slidesToShow: 2,
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
                          <div className={styles.card_Text}>
                            <h4>
                              A smooth career transition into the Data Science
                              domain{" "}
                            </h4>
                            <p className={styles.para}>
                              Being a non-IT person, I was ready to face a lot
                              of hiccups in my journey from architecture to Data
                              Science. However, Great Learning’swell-structured
                              curriculum, expert faculty, and program mentors
                              helped me get a clear hands-on idea of all
                              concepts. I got placed within 7 months in the Data
                              Science field.
                            </p>

                            <div className={styles.author_name}>
                              <h6>Rajeev Sukla </h6>
                              <p>Associate Business Analyst · Cotiviti</p>
                            </div>
                          </div>
                          <div className={styles.card_Img}>
                            <img src={"https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_11/story_12439/assets/1.jpeg?time=1667380586&size=*:900"} alt="" />
                            {/* <Image src={MAN} alt="" /> */}
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

export default SliderSectionFour;
