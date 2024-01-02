"use client";

import React, { useEffect, useState } from "react";
import styles from "@/_styles/Header/SubHader.module.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import logo from "@/_assets/Header/logo.jpg";
import Image from "next/image";
import arrow from "@/_assets/Icons/arrow_right.svg";
import search_icon from "@/_assets/Icons/search_icon.svg";
import axios from "axios";
import axiosInstance from "@/_services-api/axios";
import Link from "next/link";
const MegaMenu = () => {
  const [selectedService, setSelectedService] = useState();
  console.log(selectedService);
  const [headerData, setHeaderData] = useState([]);
  // console.log(headerData);
  const toggleSubMenu = (serviceName) => {
    // console.log(serviceName);
    setSelectedService(serviceName);
    // setSelectedService((prevService) =>
    //   prevService === serviceName ? headerData.title : serviceName
    // );
  };

  const resetSubMenu = () => {
    setSelectedService(headerData && headerData[0].title);
  };

  const _headerApi = async () => {
    await axiosInstance.get(`/header`).then((res) => {
      setHeaderData(res.data.data);
    });
  };
  useEffect(() => {
    _headerApi();
  }, []);
  useEffect(() => {
    // Check if headerData exists and has at least one element
    if (headerData && headerData.length > 0) {
      setSelectedService(headerData[0].title);
    }
  }, [headerData]);
  // useEffect(() => {
  //   // Set the default service as active when headerData changes
  //   if (headerData.length > 0) {
  //     setSelectedService(headerData[0]?.title);
  //   }
  // }, [headerData]);
  return (
    <>
      <section className={styles.navbar}>
        <div className="container">
          <Row>
            <Col md={2}>
              <div className={styles.logo}>
                <Link href="/">
                  {" "}
                  <Image src={logo} />
                </Link>
              </div>
            </Col>
            <Col md={10}>
              <div className={styles.listAll}>
                <div className={styles.listAll}>
                  <ul className={styles.listItem}>
                    <li className={styles.dropdown}>
                      <a
                        href=""
                        className={styles.dropbtn}
                        onMouseOver={resetSubMenu}
                      >
                        Services
                      </a>
                      <div>
                        <Container className={styles.dropdownContent}>
                          <Row>
                            <Col md={3}>
                              {/* <div className={styles.subDropContent}>
                                <ul>
                                  <li>
                                    <a
                                      onClick={() => toggleSubMenu("Services")}
                                      className={
                                        selectedService === "Services"
                                          ? styles.active
                                          : styles.normals
                                      }
                                    >
                                      Services <Image src={arrow} />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      onClick={() => toggleSubMenu("Services2")}
                                      className={` ${
                                        selectedService === "Services2"
                                          ? styles.active
                                          : styles.normals
                                      }`}
                                    >
                                      Services2 <Image src={arrow} />
                                    </a>
                                  </li>
                               
                                </ul>
                              </div> */}

                              <div className={styles.subDropContent}>
                                <ul>
                                  {headerData.map((item) => {
                                    return (
                                      <>
                                        <li>
                                          <a
                                            onClick={() =>
                                              toggleSubMenu(item?.title)
                                            }
                                            className={
                                              selectedService === item?.title
                                                ? styles.active
                                                : styles.normals
                                            }
                                          >
                                            {item?.title} <Image src={arrow} />
                                          </a>
                                        </li>
                                      </>
                                    );
                                  })}
                                </ul>
                              </div>
                            </Col>

                            <div className="col-md-9">
                              {headerData.map((item) => {
                                {
                                  /* console.log("MERAD",item?.get_cat[0].get_connected_screens
)  */
                                }
                                {
                                  /* const {title} = item?.get_cat[0].get_connected_screens */
                                }
                                return (
                                  <>
                                    {selectedService === item.title && (
                                      <div className={styles.rightSecTab}>
                                        {/* Content for Services */}
                                        <div className="container">
                                          <div className="row">
                                            {item?.get_cat[0].get_connected_screens.map(
                                              (ele) => {
                                                return (
                                                  <>
                                                    <div className="col-md-4">
                                                      <div
                                                        className={
                                                          styles.subDropContent
                                                        }
                                                      >
                                                        <Card
                                                          className={
                                                            styles.cardStyle
                                                          }
                                                        >
                                                          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                                          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/2560px-Adobe_Corporate_logo.svg.png" /> */}
                                                          <Card.Body
                                                            className={
                                                              styles.CardBody
                                                            }
                                                          >
                                                            <Card.Title
                                                              className={
                                                                styles.CardTitle
                                                              }
                                                            >
                                                              {ele.title ||
                                                                "No Title"}
                                                            </Card.Title>
                                                            <Card.Text
                                                              className={
                                                                styles.CardText
                                                              }
                                                              dangerouslySetInnerHTML={{
                                                                __html:
                                                                  ele?.banner_description
                                                                    ? `${ele.banner_description
                                                                      .split(
                                                                        " "
                                                                      )
                                                                      .slice(
                                                                        0,
                                                                        6
                                                                      )
                                                                      .join(
                                                                        " "
                                                                      )}...`
                                                                    : "",
                                                              }}
                                                            // dangerouslySetInnerHTML={{ __html: `${ele?.banner_description}` }}
                                                            >
                                                              {/* {
                                                                ele?.banner_description
                                                              } */}
                                                            </Card.Text>
                                                            {/* <p>
                                                              12 month Online
                                                            </p> */}
                                                          </Card.Body>

                                                          <Link href="/services/[slug]" as={`/services/${ele?.url}`} >
                                                          {/* <Link href="/services/[slug]" as={`/services/${ele?.url}`} > */}
                                                            Read More
                                                          </Link>
                                                        </Card>
                                                      </div>
                                                    </div>
                                                  </>
                                                );
                                              }
                                            )}

                                            <div className="col-12">
                                              <div
                                                className={styles.viewAllbtn}
                                              >
                                                <a href="">View All</a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </>
                                );
                              })}

                              {false && selectedService === "Services" && (
                                <div className={styles.rightSecTab}>
                                  {/* Content for Services */}
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-md-4">
                                        <div className={styles.subDropContent}>
                                          <Card className={styles.cardStyle}>
                                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/2560px-Adobe_Corporate_logo.svg.png" />
                                            <Card.Body
                                              className={styles.CardBody}
                                            >
                                              {/* <Card.Title>Card Title</Card.Title> */}
                                              <Card.Text
                                                className={styles.CardText}
                                              >
                                                Build a successful career in
                                                Data Science and Business
                                                Analytics
                                              </Card.Text>
                                              <p>12 month Online</p>
                                            </Card.Body>
                                          </Card>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className={styles.subDropContent}>
                                          <Card className={styles.cardStyle}>
                                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/2560px-Adobe_Corporate_logo.svg.png" />
                                            <Card.Body
                                              className={styles.CardBody}
                                            >
                                              {/* <Card.Title>Card Title</Card.Title> */}
                                              <Card.Text
                                                className={styles.CardText}
                                              >
                                                Build a successful career in
                                                Data Science and Business
                                                Analytics
                                              </Card.Text>
                                              <p>12 month Online</p>
                                            </Card.Body>
                                          </Card>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <img
                                          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <div className={styles.subDropContent}>
                                          <Card className={styles.cardStyle}>
                                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/2560px-Adobe_Corporate_logo.svg.png" />
                                            <Card.Body
                                              className={styles.CardBody}
                                            >
                                              {/* <Card.Title>Card Title</Card.Title> */}
                                              <Card.Text
                                                className={styles.CardText}
                                              >
                                                Build a successful career in
                                                Data Science and Business
                                                Analytics
                                              </Card.Text>
                                              <p>12 month Online</p>
                                            </Card.Body>
                                          </Card>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className={styles.subDropContent}>
                                          <Card className={styles.cardStyle}>
                                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/2560px-Adobe_Corporate_logo.svg.png" />
                                            <Card.Body
                                              className={styles.CardBody}
                                            >
                                              {/* <Card.Title>Card Title</Card.Title> */}
                                              <Card.Text
                                                className={styles.CardText}
                                              >
                                                Build a successful career in
                                                Data Science and Business
                                                Analytics
                                              </Card.Text>
                                              <p>12 month Online</p>
                                            </Card.Body>
                                          </Card>
                                        </div>
                                      </div>

                                      <div className="col-12">
                                        <div className={styles.viewAllbtn}>
                                          <a href="">View All</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {false && (
                                <>
                                  {selectedService === "Services2" && (
                                    <div className={styles.rightSecTab}>
                                      {/* Content for Services */}
                                      <div className="container">
                                        <div className="row">
                                          <div className="col-md-4">
                                            <div
                                              className={styles.subDropContent}
                                            >
                                              <Card
                                                className={styles.cardStyle}
                                              >
                                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/2560px-Adobe_Corporate_logo.svg.png" />
                                                <Card.Body
                                                  className={styles.CardBody}
                                                >
                                                  {/* <Card.Title>Card Title</Card.Title> */}
                                                  <Card.Text
                                                    className={styles.CardText}
                                                  >
                                                    Build a successful career in
                                                    Data Science and Business
                                                    Analytics
                                                  </Card.Text>
                                                  <p>12 month Online</p>
                                                </Card.Body>
                                              </Card>
                                            </div>
                                          </div>
                                          <div className="col-md-4">
                                            <div
                                              className={styles.subDropContent}
                                            >
                                              <Card
                                                className={styles.cardStyle}
                                              >
                                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/2560px-Adobe_Corporate_logo.svg.png" />
                                                <Card.Body
                                                  className={styles.CardBody}
                                                >
                                                  {/* <Card.Title>Card Title</Card.Title> */}
                                                  <Card.Text
                                                    className={styles.CardText}
                                                  >
                                                    Build a successful career in
                                                    Data Science and Business
                                                    Analytics
                                                  </Card.Text>
                                                  <p>12 month Online</p>
                                                </Card.Body>
                                              </Card>
                                            </div>
                                          </div>
                                          <div className="col-md-4">
                                            <img
                                              src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                                              alt=""
                                            />
                                          </div>
                                          <div className="col-md-4">
                                            <div
                                              className={styles.subDropContent}
                                            >
                                              <Card
                                                className={styles.cardStyle}
                                              >
                                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/2560px-Adobe_Corporate_logo.svg.png" />
                                                <Card.Body
                                                  className={styles.CardBody}
                                                >
                                                  {/* <Card.Title>Card Title</Card.Title> */}
                                                  <Card.Text
                                                    className={styles.CardText}
                                                  >
                                                    Build a successful career in
                                                    Data Science and Business
                                                    Analytics
                                                  </Card.Text>
                                                  <p>12 month Online</p>
                                                </Card.Body>
                                              </Card>
                                            </div>
                                          </div>
                                          <div className="col-md-4">
                                            <img
                                              src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                                              alt=""
                                            />
                                          </div>

                                          <div className="col-12">
                                            <div className={styles.viewAllbtn}>
                                              <a href="">View All</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                          </Row>
                        </Container>
                      </div>
                    </li>
                    <li className={styles.dropdown}>
                      <a href="" className={styles.dropbtn}>
                        Insights
                      </a>
                    </li>
                    <li className={styles.dropdown}>
                      <a href="" className={styles.dropbtn}>
                        About us
                      </a>
                    </li>
                    <li className={styles.dropdown}>
                      <a href="" className={styles.dropbtn}>
                        Contact us
                      </a>
                    </li>
                    <li className={styles.dropdown}>
                      <a href="" className={styles.dropbtn}>
                        Contact us
                      </a>
                    </li>
                    <li className={styles.dropdown}>
                      <a href="" className={styles.dropbtn}>
                        Contact us
                      </a>
                    </li>
                    <li className={styles.dropdown}>
                      <a href="" className={styles.BtnQuote}>
                        Get A Quote Now
                      </a>
                    </li>
                    <li className={styles.dropdown}>
                      <a href="" className={styles.dropbtn}>
                        <Image src={search_icon} />
                      </a>
                    </li>
                    <li className={styles.dropdown}>
                      <a href="" className={styles.dropLoginBtn}>
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default MegaMenu;

// import React from "react";
// import styles from "@/_styles/Header/SubHader.module.css";
// import { Col, Container, Row } from "react-bootstrap";
// import Image from "next/image";
// import logo from "@/_assets/Header/logo.jpg";
// const SubHeader = () => {
//   return (
//     <>
//       <div className={styles.sub_header}>
//         <Container>
//           <Row>
//             <Col md={2} sm={2}>
//               <Image src={logo} />
//             </Col>
//             <Col md={10} sm={2}>
//               <div className={styles.listAll}>
//                 <ul className={styles.listItem}>
//                   <li className={styles.listItemOne}>
//                     <a href="" >
//                       Services
//                     </a>

//                     <ul className="sublisting">
//                         <li><a href="">Services105</a></li>
//                     </ul>
//                   </li>

//                   <li>
//                     <a href="">Services</a>
//                   </li>
//                   <li>
//                     <a href="">Services</a>
//                   </li>
//                   <li>
//                     <a href="">Services</a>
//                   </li>
//                   <li>
//                     <a href="">Services</a>
//                   </li>
//                   <li>
//                     <a href="">Services</a>
//                   </li>
//                   <li>
//                     <a href="">Services</a>
//                   </li>
//                   <li>
//                     <a href="">Services</a>
//                   </li>
//                   <li>
//                     <a href="">Services</a>
//                   </li>
//                 </ul>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default SubHeader;

// // MegaMenu.js
// "use client";
// import React, { useState } from "react";
// import styles from "@/_styles/Header/SubHader.module.css";
// import { Col, Container, Row } from "react-bootstrap";
// import logo from "@/_assets/Header/logo.jpg";
// import Image from "next/image";
// const MegaMenu = () => {
//   const [subMenuVisible, setSubMenuVisible] = useState(true);

//   const toggleSubMenu = () => {
//     setSubMenuVisible(!subMenuVisible);
//   };
//   return (
//     <>
//       <section className={styles.navbar}>
//         <Container>
//           <Row>
//             <Col md={2}>
//               <Image src={logo} />
//             </Col>
//             <Col md={10}>
//               <div className={styles.listAll}>
//                 <div className={styles.listAll}>
//                   <ul className={styles.listItem}>
//                     <li className={styles.dropdown}>
//                       <a href="" className={styles.dropbtn}>
//                         Services
//                       </a>
//                       <div className={styles.dropdownContent}>
//                         <Container>
//                           <Row>
//                             <Col md={3}>
//                               <div className={styles.subDropContent}>
//                                 <ul>
//                                   <li>
//                                     <a  onClick={toggleSubMenu}>
//                                       Services
//                                     </a>
//                                   </li>
//                                   <li>
//                                     <a href="">Services2</a>
//                                   </li>
//                                   <li>
//                                     <a href="">Services</a>
//                                   </li>
//                                   <li>
//                                     <a href="">Services</a>
//                                   </li>
//                                   <li>
//                                     <a href="">Services</a>
//                                   </li>
//                                   <li>
//                                     <a href="">Services</a>
//                                   </li>
//                                   <li>
//                                     <a href="">Services</a>
//                                   </li>
//                                   <li>
//                                     <a href="">Services</a>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </Col>

//                             <Col md={9}>
//                               {subMenuVisible && (
//                                 <div  style={{background:"red"}}>
//                                   <Container>
//                                     <Row>
//                                       <Col md={4}>
//                                         <div className={styles.subDropContent}>
//                                           <ul>
//                                             <li>
//                                               <a href="">Sub Service 1</a>
//                                             </li>
//                                             <li>
//                                               <a href="">Sub Service 2</a>
//                                             </li>
//                                             <li>
//                                               <a href="">Sub Service 3</a>
//                                             </li>
//                                             {/* Add more sub-services as needed */}
//                                           </ul>
//                                         </div>
//                                       </Col>
//                                     </Row>
//                                   </Container>
//                                 </div>
//                               )}
//                             </Col>
//                           </Row>

//                         </Container>
//                       </div>
//                     </li>
//                     <li>
//                       <a href="">Services</a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default MegaMenu;

// MegaMenu.js

// MegaMenu.js
