"use client";
import Mainheader from "@/_components/Header/Main-header/Mainheader";
import React, { useEffect, useMemo } from "react";
import SubHeader from "@/_components/Header/Sub-header/SubHeader";
import styles from "@/_styles/Blog/Blog.module.css";
import Form from "@/_components/Form/Form";
import Image from "next/image";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import Facebook from "@/_assets/Icons/Blog_icons/facebook.svg";
import Linkedin from "@/_assets/Icons/Blog_icons/linkedin.svg";
import Twitter from "@/_assets/Icons/Blog_icons/twitter.svg";
import Whatsapp from "@/_assets/Icons/Blog_icons/whatsapp.svg";
import Instagram from "@/_assets/Icons/Blog_icons/instagram.svg";
import Telegram from "@/_assets/Icons/Blog_icons/telegram.svg";
// import linkdein from "@/_assets/Blog-Social-Icons/linkdein.svg";
// import mail from "@/_assets/Blog-Social-Icons/mail.svg";
// import telegram from "@/_assets/Blog-Social-Icons/telegram.svg";
// import whatsapp from "@/_assets/Blog-Social-Icons/whatsapp.svg";
// import twitter from "@/_assets/Blog-Social-Icons/twitter.svg";
import BlogBG from "@/_assets/blogBG.png";
import Footer from "@/_components/Footer/Footer";
import classNames from "classnames";
import { reverseString } from "@/_utils/Helper";
import Link from "next/link";

const Blog = () => {
  const sdfsd = reverseString("Arshad Khan");
  const itemsArray = Array.from({ length: 6 }, (_, index) => index);
  useEffect(() => {
    console.log("SERVICES COMPONENT MOUNT");
  }, []);
  const memoizedForm = useMemo(() => <Form />, []);

  return (
    <>
      <Mainheader />
      <SubHeader />

      <div className={styles.blog_wrp_main}>
        <div className={styles.bgImg}>
          <Image src={BlogBG} />
        </div>
        <div className={classNames("container", styles.container)}>
          <div className={classNames("row", styles.row)}>
            <div className="col-12">
              <div className={styles.bannerContent}>
                <h2>Missed filing your ITR?</h2>
                <p>You Can Still File it on ApkaTax in just minutes </p>
                <a href="">File Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.blog_content}>
        <div className={classNames("container-fluid", styles.container_fluid)}>
          <div className="row">
            <div className="col-12 col-md-2">
              <div className={styles.browseByTopic}>
                <h6>BROWSE BY TOPICS</h6>

                <ul>
                  <li>
                    <a href="">Income Tax e-Filing</a>
                  </li>
                  <li>
                    <a href="">Last Date To File ITR For 2022-23</a>
                  </li>
                  <li>
                    <a href="">Income Tax Slabs FY 2023-24</a>
                  </li>
                  <li>
                    <a href="">
                      Which Is Better: Old vs New Tax Regime For Salaried
                      Employees?
                    </a>
                  </li>
                  <li>
                    <a href="">House Property</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="breadcum">
                <Breadcrumb>
                  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
              </div>

              <div className={styles.mian_blog_content}>
                <h3>Tax on Blogging Income Under the Income Tax Act</h3>
                <div className={styles.updated_date_content}>
                  <p>Updated on: Jan 13th, 2022 | 7 min read</p>
                  <div className={styles.social_images}>
                    <div className={styles.imgd}>
                      <a href="">
                        {" "}
                        <Image src={Whatsapp} />
                      </a>
                    </div>
                    <div className={styles.imgd}>
                      <a href="">
                        {" "}
                        <Image src={Telegram} />
                      </a>
                    </div>
                    <div className={styles.imgd}>
                      <a href="">
                        {" "}
                        <Image src={Facebook} />
                      </a>
                    </div>
                    <div className={styles.imgd}>
                      <a href="">
                        {" "}
                        <Image src={Instagram} />
                      </a>
                    </div>
                    <div className={styles.imgd}>
                      <a href="">
                        {" "}
                        <Image src={Twitter} />
                      </a>
                    </div>
                    <div className={styles.imgd}>
                      <a href="">
                        {" "}
                        <Image src={Linkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2 text-enda">
              <div className={styles.browseByTopic}>
                <h6>CONTENTS</h6>

                <ul>
                  <li>
                    <a href="">Income Tax e-Filing</a>
                  </li>
                  <li>
                    <a href="">Last Date To File ITR For 2022-23</a>
                  </li>
                  <li>
                    <a href="">Income Tax Slabs FY 2023-24</a>
                  </li>
                  <li>
                    <a href="">
                      Which Is Better: Old vs New Tax Regime For Salaried
                      Employees?
                    </a>
                  </li>
                  <li>
                    <a href="">House Property</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;

{
  /* <svg class="inline-block" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="6" x2="19" y2="6" stroke="#9092A3" stroke-width="2" stroke-linecap="round"></line><line x1="5" y1="12" x2="19" y2="12" stroke="#9092A3" stroke-width="2" stroke-linecap="round"></line><line x1="5" y1="18" x2="19" y2="18" stroke="#9092A3" stroke-width="2" stroke-linecap="round"></line></svg> */
}


