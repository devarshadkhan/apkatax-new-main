// "use client";
import React from "react";
import SliderSection from "@/_components/SliderSection/SliderSection";
import styles from "@/_styles/client-component/HomePage.module.css";
import SliderSectionTwo from "@/_components/SliderSection/SliderSectionTwo";
import Image from "next/image";

import TrustPilot from "@/_assets/Icons/trustpilot.svg";
import rating from "@/_assets/Icons/rating_star.svg";
import LocationMap from "@/_assets/LocationMap.png";
import userImg from "@/_assets/userImg.jpg";
import classNames from "classnames";
import SliderSectionThree from "@/_components/SliderSection/SliderSectionThree";
import SliderSectionFour from "@/_components/SliderSection/SliderSectionFour";
import SliderSectionFive from "@/_components/SliderSection/SliderSectionFive";
import SliderSectionSix from "@/_components/SliderSection/SliderSectionSix";
import Faq from "@/_components/FAQ/Faq";
import { cardData } from "@/_utils/MockData";
const HomePage = () => {
 
  return (
    <>
      <div className={styles.sliderSec}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SliderSection />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.companyUSP}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className={styles.mainHeading}>Company USP</h1>
            </div>
            <div className="col-md-3 col-12">
              <div className={styles.box_one}>
                <div>
                  {" "}
                  <h4>92%</h4>
                </div>
                <div>
                  <p>Complete</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className={styles.box_two}>
                <div>
                  {" "}
                  <h4>92%</h4>
                </div>
                <div>
                  <p>Complete</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className={styles.box_three}>
                <div>
                  {" "}
                  <h4>92%</h4>
                </div>
                <div>
                  <p>Complete</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className={styles.box_four}>
                <div>
                  {" "}
                  <h4>92%</h4>
                </div>
                <div>
                  <p>Complete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.wrap_3}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Our Recognitions</h3>
            </div>
          </div>
        </div>
        <SliderSectionTwo />
      </div>

      <div className={styles.why_choose_wrp}>
        <div className={classNames("container", styles.container)}>
          <div className="row">
            <div className="col-12">
              <div className={styles.main_heading}>
                <h3> Why Choose ApkaTax ?</h3>
                <p>
                  Be ahead with Industry first
                  <span>Advantages</span>
                </p>
              </div>
            </div>

            {cardData.map((item) => {
              return (
                <>
                  <div className={classNames("col-12 col-md-3 ")}>
                    <div className={styles.Box1}>
                      <Image src={item.image} />
                      <h5>{item.heading}</h5>
                      <p>{item.para}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="meetPro_wrp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Meet Our top professionals</h3>

              <SliderSectionThree />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mapLocation}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center">Entrepreneurs Pan Across India</h3>
              <Image src={LocationMap} alt="Location Map" width={"100%"} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.secRatingPartner}>
        <div className={classNames("container", styles.container)}>
          <div className="row">
            <div className="col-md-4">
              <div className={styles.trustPoilot}>
                <Image src={TrustPilot} alt="" />
                <p>Trustpilot.com</p>

                <div className={styles.ratingSec}>
                  <span>
                    4.3 <Image src={rating} alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.trustPoilot}>
                <Image src={TrustPilot} alt="" />
                <p>Trustpilot.com</p>

                <div className={styles.ratingSec}>
                  <span>
                    4.3 <Image src={rating} alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className={styles.trustPoilot}>
                <Image src={TrustPilot} alt="" />
                <p>Trustpilot.com</p>

                <div className={styles.ratingSec}>
                  <span>
                    4.3 <Image src={rating} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.storyGrowth}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>Multiple Stories Of Growth</h4>
              <p>
                Find out how our Learners transformed their careers after
                learning with us.
              </p>
              <div>
                <button className={styles.btn}>get inspired</button>
              </div>
              <SliderSectionFour />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.downloadAppWrp}>
        <div className={classNames("container", styles.container)}>
          <div className={classNames("row", styles.row)}>
            <div className="col-12 col-md-8">
              <h5>10% Business Registered Every Year From Apkatax</h5>
              <p>
                Find out how our Learners transformed their careers after
                learning with us.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className={styles.btn_div}>
                <button>Download Button</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mediaSpotlight}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading">
                <h6>Featuerd in</h6>
                <h3>Media Spotlight</h3>
              </div>
              <SliderSectionFive />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.wrap_blog}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>Latest Blog From Apkatax</h4>
              <SliderSectionSix />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.buildingNation}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Building Nation Through Startup</h3>
            </div>
            <div className="col-12 col-md-6">
              <div className={styles.boxinf}>
                <h4>
                  <i>Building Nation Through</i> <span>Startup</span>
                </h4>
                <p>
                  Weekly mentorship sessions with Industry Experts along with
                  Personalized attention in small groups of 5-15 learners. Gain
                  Weekly mentorship sessions with Industry Experts along with
                  Personalized attention
                </p>

                <button>Know More </button>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <Image src={userImg} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.faq_wrp}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>FAQ's</h3>

              <div className="faqSec">
                {/* {cardData.map((item)=>{
                return (
                  <> */}
                <Faq item={cardData} />

                {/* </>
                )
              })} */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.pvtltd_wrp}>
        <div className="container">
        <div className={styles.bg_color}>
          <div className="row">
            <div className="col-12 col-md-6">
                <div className={styles.content}>
                <p>
                A Private Limited Company is a privately maintained small
                business existence which is one of the highly.
              </p>
              <button>See More</button>
                </div>
            </div>
            <div className="col-12 col-md-6">
             <div className={styles.ImgBox}> <img
                src="https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg"
                alt=""
              /></div>
             {/* <div className={styles.ImgBox}> <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/srk_responds_to_fan_who_wants_to_smoke_with_him_1-sixteen_nine.jpg?VersionId=OJgYhqZyIvQWgq0ylpYnExQovlipJaqA&size=690:388"
                alt=""
              /></div> */}
            </div>
          </div>
        </div></div>
      </div>
    </>
  );
};

export default HomePage;
