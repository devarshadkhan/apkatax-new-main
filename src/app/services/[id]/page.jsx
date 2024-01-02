// "use client";
import React from "react";
// import React, { useEffect, useMemo, useState } from "react";
import Mainheader from "@/_components/Header/Main-header/Mainheader";
import SubHeader from "@/_components/Header/Sub-header/SubHeader";
import styles from "@/_styles/Services/Services.module.css";
import Adobe from "@/_assets/adobe.svg";
import Star from "@/_assets/star.svg";
import Share from "@/_assets/Icons/share.svg";
import Image from "next/image";
import classNames from "classnames";
import Footer from "@/_components/Footer/Footer";
import Facebook from "@/_assets/Blog-Social-Icons/facebook.svg";
import linkdein from "@/_assets/Blog-Social-Icons/linkdein.svg";
import mail from "@/_assets/Blog-Social-Icons/mail.svg";
import telegram from "@/_assets/Blog-Social-Icons/telegram.svg";
import whatsapp from "@/_assets/Blog-Social-Icons/whatsapp.svg";
import twitter from "@/_assets/Blog-Social-Icons/twitter.svg";
import Form from "@/_components/Form/Form";
import Link from "next/link";
import axios from "axios";
// import { useParams } from "next/navigation";
import { reverseString } from "@/_utils/Helper";
import axiosInstance from "@/_services-api/axios";
import Head from "next/head";
const Service = ({contentData }) => {
  console.log("contentData ",contentData );
  // const pathname = usePathname()
  // console.log(pathname);
  // const searchParams = useSearchParams()
  // console.log(searchParams.get("slug"));
  // const params = useParams();
  // const [contentData, setContentData] = useState([]);
  // console.log(contentData);
  const sdfsd = reverseString("Arshad Khan");
  const itemsArray = Array.from({ length: 6 }, (_, index) => index);
  // useEffect(() => {
  //   console.log("SERVICES COMPONENT MOUNT");
  // }, []);
  // const memoizedForm = useMemo(() => <Form />, []);

  // const _contentDataApi = async () => {
  //   await axiosInstance.get(`/screens`).then((res) => {
  //     setContentData(res.data.data);
  //   });
  // };

  // useEffect(() => {
  //   _contentDataApi();
  // }, []);


  //  const _contentDataApi = async () => {
  // //   await axiosInstance.get(`/screens`)
  // // };
  // // console.log("_contentDataApi",_contentDataApi);

  return (
    <>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
      </Head>
      <Mainheader />
      <SubHeader />

      <div className={styles.Service_Wrp}>
        <div className={styles.bgImg}>
          <img
            src="https://images.hindustantimes.com/img/2023/02/04/550x309/shah_rukh_khan_asksrk_1675495200645_1675495200817_1675495200817.jpg"
            alt=""
          />
        </div>
        <div className={styles.main_services}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.main_modal_box}>
                  <Image src={Adobe} alt="" />
                  <h3>
                    Build a successful career in Data Science and Business
                    Analytics
                  </h3>
                  <p>
                    <Image src={Star} /> 12,055 Ratings .{" "}
                    <span>12 month Online</span>
                  </p>
                  <div className={styles.btnBnager}>
                    <button>Register Now </button>
                    <button>Read More </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.service_wrp_content}>
        <div className={classNames("container", styles.container)}>
          <div className="row">
            <div className="col-12">
              <div className={styles.shared_Tile}>
                <h4>Notes</h4>
                <Image src={Share} />
              </div>
            </div>

            <div className="col-12">
              <div className={styles.headingContent}>
                <h3>
                  A non-governmental organization (NGO) is a philanthropic
                  entity aimed at enhancing.
                </h3>

                <p>
                  In India, Online NGO Registrations are basically of three
                  types, which are Trusts, Societies, and Section 8 Companies.
                  Collectively, these non-profit organizations, including
                  Trusts, Societies, and Section 8 Companies, are referred to as
                  NGOs. In India, they are also known by the terms 'Sangathan,'
                  'Sangh,' and 'Sangam.' All non-profit NGOs in India enjoy
                  income tax exemption. It is important to differentiate them
                  from non-profitable businesses, which are conventional
                  companies not making a profit. In common understanding, NGOs
                  engage in a broad range of activities solely for the benefit
                  of society. These activities encompass environmental, social,
                  advocacy, and human rights work, among others. NGOA
                  non-governmental organization (NGO) is a philanthropic entity
                  aimed at enhancing society's well-being. In India, Online NGO
                  Registrations are basically of three types, which are Trusts,
                  Societies, and Section 8 Companies. Collectively, these
                  non-profit organizations, including Trusts, Societies, and
                  Section 8 Companies, are referred to as NGOs. In India, they
                  are also known by the terms 'Sangathan,' 'Sangh,' and
                  'Sangam.' All non-profit NGOs in India enjoy income tax
                  exemption. It is important to differentiate them from
                  non-profitable businesses, which are conventional companies
                  not making a profit. In common understanding, NGOs engage in a
                  broad range of activities solely for the benefit of society.
                  These activities encompass environmental, social, advocacy,
                  and human rights work, among others. NGOA non-governmental
                  organization (NGO) is a philanthropic entity aimed at
                  enhancing society's well-being. In India, Online NGO
                  Registrations are basically of three types, which are Trusts,
                  Societies, and Section 8 Companies. Collectively, these
                  non-profit organizations, including Trusts, Societies, and
                  Section 8 Companies, are referred to as NGOs. In India, they
                  are also known by the terms 'Sangathan,' 'Sangh,' and
                  'Sangam.' All non-profit NGOs in India enjoy income tax
                  exemption. It is important to differentiate them from
                  non-profitable businesses, which are conventional companies
                  not making a profit. In common understanding, NGOs engage in a
                  broad range of activities solely for the benefit of society.
                  These activities encompass environmental, social, advocacy,
                  and human rights work, among others. NGOA non-governmental
                  organization (NGO) is a philanthropic entity aimed at
                  enhancing society's well-being. In India, Online NGO
                  Registrations are basically of three types, which are Trusts,
                  Societies, and Section 8 Companies. Collectively, these
                  non-profit organizations, including Trusts, Societies, and
                  Section 8 Companies, are referred to as NGOs. In India, they
                  are also known by the terms 'Sangathan,' 'Sangh,' and
                  'Sangam.' All non-profit NGOs in India enjoy income tax
                  exemption. It is important to differentiate them from
                  non-profitable businesses, which are conventional companies
                  not making a profit. In common understanding, NGOs engage in a
                  broad ran
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {false && (
        <>
          {" "}
          <div className={styles.blog_content}>
            <div className={classNames("container", styles.container)}>
              <div className="row">
                <div className="col-12 col-md-2">
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
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className={styles.contentsec_blog}>
                    <h3>Overview of Online NGO Registration</h3>
                    <p>
                      A non-governmental organization (NGO) is a philanthropic
                      entity aimed at enhancing society's well-being. In India,
                      Online NGO Registrations are basically of three types,
                      which are Trusts, Societies, and Section 8 Companies.
                      Collectively, these non-profit organizations, including
                      Trusts, Societies, and Section 8 Companies, are referred
                      to as NGOs. In India, they are also known by the terms
                      'Sangathan,' 'Sangh,' and 'Sangam.' All non-profit NGOs in
                      India enjoy income tax exemption. It is important to
                      differentiate them from non-profitable businesses, which
                      are conventional companies not making a profit. In common
                      understanding, NGOs engage in a broad range of activities
                      solely for the benefit of society. These activities
                      encompass environmental, social, advocacy, and human
                      rights work, among others. NGOs actively strive to foster
                      social or political change on a larger scale and play a
                      vital role in societal development, community improvement,
                      and citizen engagement.A non-governmental organization
                      (NGO) is a philanthropic entity aimed at enhancing
                      society's well-being. In India, Online NGO Registrations
                      are basically of three types, which are Trusts, Societies,
                      and Section 8 Companies. Collectively, these non-profit
                      organizations, including Trusts, Societies, and Section 8
                      Companies, are referred to as NGOs. In India, they are
                      also known by the terms 'Sangathan,' 'Sangh,' and
                      'Sangam.' All non-profit NGOs in India enjoy income tax
                      exemption. It is important to differentiate them from
                      non-profitable businesses, which are conventional
                      companies not making a profit. In common understanding,
                      NGOs engage in a broad range of activities solely for the
                      benefit of society. These activities encompass
                      environmental, social, advocacy, and human rights work,
                      among others. NGOs actively strive to foster social or
                      political change on a larger scale and play a vital role
                      in societal development, community improvement, and
                      citizen engagement.A non-governmental organization (NGO)
                      is a philanthropic entity aimed at enhancing society's
                      well-being. In India, Online NGO Registrations are
                      basically of three types, which are Trusts, Societies, and
                      Section 8 Companies. Collectively, these non-profit
                      organizations, including Trusts, Societies, and Section 8
                      Companies, are referred to as NGOs. In India, they are
                      also known by the terms 'Sangathan,' 'Sangh,' and
                      'Sangam.' All non-profit NGOs in India enjoy income tax
                      exemption. It is important to differentiate them from
                      non-profitable businesses, which are conventional
                      companies not making a profit. In common understanding,
                      NGOs engage in a broad range of activities solely for the
                      benefit of society. These activities encompass
                      environmental, social, advocacy, and human rights work,
                      among others. NGOs actively strive to foster social or
                      political change on a larger scale and play a vital role
                      in societal development, community improvement, and
                      citizen engagement.A non-governmental organization (NGO)
                      is a philanthropic entity aimed at enhancing society's
                      well-being. In India, Online NGO Registrations are
                      basically of three types, which are Trusts, Societies, and
                      Section 8 Companies. Collectively, these non-profit
                      organizations, including Trusts, Societies, and Section 8
                      Companies, are referred to as NGOs. In India, they are
                      also known by the terms 'Sangathan,' 'Sangh,' and
                      'Sangam.' All non-profit NGOs in India enjoy income tax
                      exemption. It is important to differentiate them from
                      non-profitable businesses, which are conventional
                      companies not making a profit. In common understanding,
                      NGOs engage in a broad range of activities solely for the
                      benefit of society. These activities encompass
                      environmental, social, advocacy, and human rights work,
                      among others. NGOs actively strive to foster social or
                      political change on a larger scale and play a vital role
                      in societal development, community improvement, and
                      citizen engagement.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  {/* <MemoizedForm /> */}
                  <Form />
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum sint iusto sapiente perferendis porro quae corrupti
                      dicta! Dolorem expedita iste et tenetur modi saepe amet
                      eligendi, odio error laborum sapiente?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

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
                {/* <h3>{params.slug}</h3> */}

                {/* {params.slug === "faq" ? (
                  <Faq item={cardData} />
                ) : (
                  <>
                    <p>
                      {" "}
                      A non-governmental organization (NGO) is a philanthropic
                      entity aimed at enhancing society's well-being. In India,
                      Online NGO Registrations are basically of three types,
                      which are Trusts, Societies, and Section 8 Companies.
                      Collectively, these non-profit organizations, including
                      Trusts, Societies, and Section 8 Companies, are referred
                      to as NGOs. In India, they are also known by the terms
                      'Sangathan,' 'Sangh,' and 'Sangam.' All non-profit NGOs in
                      India enjoy income tax exemption. It is important to
                      differentiate them from non-profitable businesses, which
                      are conventional companies not making a profit. In common
                      understanding, NGOs engage in a broad range of activities
                      solely for the benefit of society. These activities
                      encompass environmental, social, advocacy, and human
                      rights work, among others. NGOs actively strive to foster
                      social or political change on a larger scale and play a
                      vital role in societal development, community improvement,
                      and citizen engagement.A non-governmental organization
                      (NGO) is a philanthropic entity aimed at enhancing
                      society's well-being. In India, Online NGO Registrations
                      are basically of three types, which are Trusts, Societies,
                      and Section 8 Companies. Collectively, these non-profit
                      organizations, including Trusts, Societies, and Section 8
                      Companies, are referred to as NGOs. In India, they are
                      also known by the terms 'Sangathan,' 'Sangh,' and
                      'Sangam.' All non-profit NGOs in India enjoy income tax
                      exemption. It is important to differentiate them from
                      non-profitable businesses, which are conventional
                      companies not making a profit. In common understanding,
                      NGOs engage in a broad range of activities solely for the
                      benefit of society. These activities encompass
                      environmental, social, advocacy, and human rights work,
                      among others. NGOs actively strive to foster social or
                      political change on a larger scale and play a vital role
                      in societal development, community improvement, and
                      citizen engagement.A non-governmental organization (NGO)
                      is a philanthropic entity aimed at enhancing society's
                      well-being. In India, Online NGO Registrations are
                      basically of three types, which are Trusts, Societies, and
                      Section 8 Companies. Collectively, these non-profit
                      organizations, including Trusts, Societies, and Section 8
                      Companies, are referred to as NGOs. In India, they are
                      also known by the terms 'Sangathan,' 'Sangh,' and
                      'Sangam.' All non-profit NGOs in India enjoy income tax
                      exemption. It is important to differentiate them from
                      non-profitable businesses, which are conventional
                      companies not making a profit. In common understanding,
                      NGOs engage in a broad range of activities solely for the
                      benefit of society. These activities encompass
                      environmental, social, advocacy, and human rights work,
                      among others. NGOs actively strive to foster social or
                      political change on a larger scale and play a vital role
                      in societal development, community improvement, and
                      citizen engagement.A non-governmental organization (NGO)
                      is a philanthropic entity aimed at enhancing society's
                      well-being. In India, Online NGO Registrations are
                      basically of three types, which are Trusts, Societies, and
                      Section 8 Companies. Collectively, these non-profit
                      organizations, including Trusts, Societies, and Section 8
                      Companies, are referred to as NGOs. In India, they are
                      also known by the terms 'Sangathan,' 'Sangh,' and
                      'Sangam.' All non-profit NGOs in India enjoy income tax
                      exemption. It is important to differentiate them from
                      non-profitable businesses, which are conventional
                      companies not making a profit. In common understanding,
                      NGOs engage in a broad range of activities solely for the
                      benefit of society. These activities encompass
                      environmental, social, advocacy, and human rights work,
                      among others. NGOs actively strive to foster social or
                      political change on a larger scale and play a vital role
                      in societal development, community improvement, and
                      citizen engagement.
                    </p>
                  </>
                )} */}
              </div>
            </div>
            <div className="col-12 col-md-4">
              {/* <MemoizedForm /> */}
              {/* {memoizedForm} */}
              <Form />
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
                        src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
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
      <Footer />
    </>
  );
};

export default Service;

export async function generateStaticParams() {
  const response = await axios.get("https://api.apkatax.com/api/screens");
  // console.log("check", response.data.data);
  return response.data.data.map((res) => ({
    services: res.url.toString(), // daynamic page name
  }));



  // if (response && response.data) {
  //   const paths = response.data.map((res) => ({
  //     params: {
  //       services: res.url.toString(), // Use 'slug' instead of 'services' for the parameter name
  //     },
  //   }));

  //   return paths;
  // }

  // return [];
}

// export async function generateStaticParams() {
//   const response = await axios.get('https://api.apkatax.com/api/screens'); // Replace 'your_users_api_endpoint' with the actual API endpoint
//     console.log(response);
//     // return response?.data?.map((res) => ({
//   //   params: {
//   //     services: res.url.toString(), // Dynamic page name
//   //   },
//   // }));
// }

// export async function generateStaticParams() {
//   const getU =  fetchUser() // make all users API call
//   const response = await getU
//   return response.map((res)=>({
//     user:res.id.toString() // daynamic page name
//   }))
// }

//  const _contentDataApi = async () => {
//     await axiosInstance.get(`/screens`).then((res) => {
//       setContentData(res.data.data);
//     });
//   };


