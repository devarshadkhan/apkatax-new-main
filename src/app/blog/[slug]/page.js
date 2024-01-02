"use client";
import Mainheader from "@/_components/Header/Main-header/Mainheader";
import React, { useEffect, useMemo } from "react";
import SubHeader from "@/_components/Header/Sub-header/SubHeader";
import styles from "@/_styles/Blog/Blog.module.css";
import Form from "@/_components/Form/Form";
import Image from "next/image";

import Facebook from "@/_assets/Blog-Social-Icons/facebook.svg";
import linkdein from "@/_assets/Blog-Social-Icons/linkdein.svg";
import mail from "@/_assets/Blog-Social-Icons/mail.svg";
import telegram from "@/_assets/Blog-Social-Icons/telegram.svg";
import whatsapp from "@/_assets/Blog-Social-Icons/whatsapp.svg";
import twitter from "@/_assets/Blog-Social-Icons/twitter.svg";
import Footer from "@/_components/Footer/Footer";
import classNames from "classnames";
import { reverseString } from "@/_utils/Helper";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";
import Faq from "@/_components/FAQ/Faq";
import { blogData, cardData } from "@/_utils/MockData";

const Blog = () => {
  // const pathname = usePathname()
  // console.log(pathname);
  // const searchParams = useSearchParams()
  // console.log(searchParams.get("slug"));
  const params = useParams();

  console.log(params);
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

      <div className={styles.service_wrp}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className={styles.blogImg}>
                <img
                  src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/srk_responds_to_fan_who_wants_to_smoke_with_him_1-sixteen_nine.jpg?VersionId=OJgYhqZyIvQWgq0ylpYnExQovlipJaqA&size=690:388"
                  alt=""
                />
              </div>
              <div className={styles.blog_readandupdate}>
                <p>
                  Posted By: <span>Arshad Khan, </span>
                  Reviewed By: <span>Pathaan Khan, </span>
                  Date 19 dec 2023 Reading time 2min
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <Form />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.blog_content}>
        <div className={classNames("container", styles.container)}>
          <div className="row">
            <div className="col-12 col-md-3">
              <div className={styles.rightPanel}>
                <h6>Share On Social media </h6>
                <div className={styles.social_icon}>
                  <ul>
                    <li>
                      <a href="">
                        <Image src={Facebook} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Image src={linkdein} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Image src={telegram} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Image src={mail} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Image src={twitter} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Image src={whatsapp} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={styles.listItem}>
                  <ul>
                    <li>
                      <Link href="/blog" scroll={false}>
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/regulation" scroll={false}>
                        Regulation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/basis-of-pvt-ltd-company"
                        scroll={false}
                      >
                        Basis of Pvt. Ltd. Company
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/eligibility" scroll={false}>
                        Eligibility
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/benefits" scroll={false}>
                        Benefits
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/how-can-apkaTax-assist-you"
                        scroll={false}
                      >
                        How Can ApkaTax Assist You?
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/faq" scroll={false}>
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5">
              <div className={styles.contentsec_blog}>
                <h3>{params.slug}</h3>

                {params.slug === "faq" ? (
                  <Faq item={cardData} />
                ) : (
                  <>
                    {/* <p key={params.slug}>{blogData.decs}</p> */}
                    <p> A non-governmental organization (NGO) is a philanthropic entity aimed at enhancing society's well-being. In India, Online NGO Registrations are basically of three types, which are Trusts, Societies, and Section 8 Companies. Collectively, these non-profit organizations, including Trusts, Societies, and Section 8 Companies, are referred to as NGOs. In India, they are also known by the terms 'Sangathan,' 'Sangh,' and 'Sangam.' All non-profit NGOs in India enjoy income tax exemption. It is important to differentiate them from non-profitable businesses, which are conventional companies not making a profit. In common understanding, NGOs engage in a broad range of activities solely for the benefit of society. These activities encompass environmental, social, advocacy, and human rights work, among others. NGOs actively strive to foster social or political change on a larger scale and play a vital role in societal development, community improvement, and citizen engagement.A non-governmental organization (NGO) is a philanthropic entity aimed at enhancing society's well-being. In India, Online NGO Registrations are basically of three types, which are Trusts, Societies, and Section 8 Companies. Collectively, these non-profit organizations, including Trusts, Societies, and Section 8 Companies, are referred to as NGOs. In India, they are also known by the terms 'Sangathan,' 'Sangh,' and 'Sangam.' All non-profit NGOs in India enjoy income tax exemption. It is important to differentiate them from non-profitable businesses, which are conventional companies not making a profit. In common understanding, NGOs engage in a broad range of activities solely for the benefit of society. These activities encompass environmental, social, advocacy, and human rights work, among others. NGOs actively strive to foster social or political change on a larger scale and play a vital role in societal development, community improvement, and citizen engagement.A non-governmental organization (NGO) is a philanthropic entity aimed at enhancing society's well-being. In India, Online NGO Registrations are basically of three types, which are Trusts, Societies, and Section 8 Companies. Collectively, these non-profit organizations, including Trusts, Societies, and Section 8 Companies, are referred to as NGOs. In India, they are also known by the terms 'Sangathan,' 'Sangh,' and 'Sangam.' All non-profit NGOs in India enjoy income tax exemption. It is important to differentiate them from non-profitable businesses, which are conventional companies not making a profit. In common understanding, NGOs engage in a broad range of activities solely for the benefit of society. These activities encompass environmental, social, advocacy, and human rights work, among others. NGOs actively strive to foster social or political change on a larger scale and play a vital role in societal development, community improvement, and citizen engagement.A non-governmental organization (NGO) is a philanthropic entity aimed at enhancing society's well-being. In India, Online NGO Registrations are basically of three types, which are Trusts, Societies, and Section 8 Companies. Collectively, these non-profit organizations, including Trusts, Societies, and Section 8 Companies, are referred to as NGOs. In India, they are also known by the terms 'Sangathan,' 'Sangh,' and 'Sangam.' All non-profit NGOs in India enjoy income tax exemption. It is important to differentiate them from non-profitable businesses, which are conventional companies not making a profit. In common understanding, NGOs engage in a broad range of activities solely for the benefit of society. These activities encompass environmental, social, advocacy, and human rights work, among others. NGOs actively strive to foster social or political change on a larger scale and play a vital role in societal development, community improvement, and citizen engagement.</p>
                  </>
                )}
              </div>
            </div>
            <div className="col-12 col-md-4">
              {/* <MemoizedForm /> */}
              {memoizedForm}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.authorDetail}>
        <div className={classNames("container", styles.container)}>
          <div className="row">
            <div className="col-12">
              <div className={styles.authorSec}>
                <div className={styles.authorImg}>
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                    alt=""
                  />
                </div>

                <div className={styles.userName}>
                  <h4>Author Bio</h4>
                  <h2>
                    <i>Arshad Khan</i>
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  sint iusto sapiente perferendis porro quae corrupti dicta!
                  Dolorem expedita iste et tenetur modi saepe amet eligendi,
                  odio error laborum sapiente?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.relatedBlog}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className={styles.heading}>Related Blogs</h3>
            </div>
            {itemsArray.map((e) => {
              return (
                <>
                  <div className="col-md-4 mb-3">
                    <div className={styles.blog_one}>
                    <img
                        src="https://c.ndtvimg.com/2023-06/li4e8eto_srk-_625x300_10_June_23.jpg"
                        alt=""
                      />
                      <div className={styles.blog_con}>
                        <h4>Section 8 Company Registration</h4>
                        <p>
                          A section 8 company is a non-profit organization
                          registered as a company under the companies act
                        </p>
                        <a href="">Read More</a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      {/* <h1>{sdfsd}</h1> */}
      {/* {reverseString()} */}

      <Footer />
    </>
  );
};

export default Blog;
