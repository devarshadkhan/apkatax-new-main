// "use client"
// import React, { useEffect } from "react";
// import styles from "@/_styles/Footer/Footer.module.css";
// import Image from "next/image";
// import BlackLogo from "@/_assets/Footer/logoBlack.svg";
// import mail from "@/_assets/Footer/mail.svg";
// import Phone from "@/_assets/Footer/Phone.svg";
// import axios from "axios";
// const Footer = (props) => {
//   useEffect(() => {
//     console.log("FOOOTER COMPONENT MOUNT");
//     }, [])
//   // console.log(props);
//   // const [data,setData] = useState([])
//   //     useEffect(() => {
//   //         const pis = async ()=>{
//   //             await  axios.get("https://dummyjson.com/products")
//   //             .then((res) => {
//   //                 setData(res.data.products)
//   //             })
//   //         }
//   //         pis()
//   //     }, []);
//   // useEffect(() => {
//   //     const fetchData = async () => {
//   //       try {
//   //         const response = await axios.get("https://dummyjson.com/products");
//   //         console.log(response);
//   //       } catch (error) {
//   //         console.error("Error fetching data:", error);
//   //       }
//   //     };

//   //     fetchData();
//   //   }, []);
//   return (
//     <>
//       <div className={styles.footer}>
//         <div className="container">
//           <div className="row">
//             <div className="col-12 col-md-3">
//               <h4>Compliance</h4>
//               <ul>
//                 <li>
//                   <a href="">Home</a>
//                 </li>
//                 <li>
//                   <a href="">Home</a>
//                 </li>
//                 <li>
//                   <a href="">Home</a>
//                 </li>
//                 <li>
//                   <a href="">Home</a>
//                 </li>
//                 <li>
//                   <a href="">Home</a>
//                 </li>
//                 <li>
//                   <a href="">Home</a>
//                 </li>
//                 <li>
//                   <a href="">Home</a>
//                 </li>
//                 <li>
//                   <a href="">Home</a>
//                 </li>
//                 <li>
//                   <a href="">Home</a>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-12 col-md-3">
//               <h4>Compliance</h4>
//               <ul>
//                 <li>
//                   <a href="">Home</a>
//                 </li>
//                 <li>
//                   <a href="">Home</a>
//                 </li>
//                 <li>
//                   <a href="">Home</a>
//                 </li>
//                 <li>
//                   <a href="">Home</a>
//                 </li>
//                 <li>
//                   <a href="">Home</a>
//                 </li>
//                 <li>
//                   <a href="">Home</a>
//                 </li>
//                 <li>
//                   <a href="">Home</a>
//                 </li>
//                 <li>
//                   <a href="">Home</a>
//                 </li>
//                 <li>
//                   <a href="">Home</a>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-12 col-md-3">
//               <h4>Compliance</h4>
//               <ul>
//               <li>
//                   <a href="">Home</a>
//                 </li>
//               <li>
//                   <a href="">Home</a>
//                 </li>
//               <li>
//                   <a href="">Home</a>
//                 </li>
//               <li>
//                   <a href="">Home</a>
//                 </li>
//               <li>
//                   <a href="">Home</a>
//                 </li>
//               <li>
//                   <a href="">Home</a>
//                 </li>
//               <li>
//                   <a href="">Home</a>
//                 </li>
//               <li>
//                   <a href="">Home</a>
//                 </li>
//               <li>
//                   <a href="">Home</a>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-12 col-md-3">

//                   <a href="">
//                     <Image src={BlackLogo} />
//                   </a>

//                   <div className={styles.mailer}>
//             <Image src={mail} />   <a href="">Example@gmail.com</a>

//                   </div>
//                    <div className={styles.mailer}><Image src={Phone} /> <a href="">898989898885</a></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;

// export async function getServerSideProps() {
//     try {
//       const response = await axios.get("https://dummyjson.com/products");
//       const data = response.data.products || [];
//         console.log("DDDDDDDDDDDDDDDDDDDDD",data);
//       return {
//         props: {
//           data,
//         },
//       };
//     } catch (error) {
//       console.error("Error fetching data:", error);

//       return {
//         props: {
//           data: [],
//         },
//       };
//     }
//   }

import styles from "@/_styles/Footer/Footer.module.css";
import Image from "next/image";
import React from "react";
import logo from "@/_assets/Footer/logoBlack.svg";
import facebook from "@/_assets/Footer/FtrIcons/facebook.svg";
import instagram from "@/_assets/Footer/FtrIcons/instagram.svg";
import linkedin from "@/_assets/Footer/FtrIcons/linkedin.svg";
import telegram from "@/_assets/Footer/FtrIcons/telegram.svg";
import twitter from "@/_assets/Footer/FtrIcons/twitter.svg";
const Footer = () => {
  // var id = "id" + Math.random().toString(16).slice(2)
  // console.log(id)
  return (
    <>
      <div className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <div className={styles.logoPanel}>
                <Image src={logo} className={styles.logoImg} />

                <div className={styles.footrIcons}>
                  <h5>Follow us on</h5>
                  <ul>
                    <li>
                      <a href="">
                        <Image src={facebook} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Image src={instagram} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Image src={linkedin} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Image src={telegram} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Image src={twitter} />
                      </a>
                    </li>
                    {/* <li>
                      <a href="">
                        <Image src={facebook} />
                      </a>
                    </li> */}
                  </ul>
                </div>

                <div className={styles.query}>
                  <h6>Have a query?</h6>
                  <a href="">Support</a>
                </div>

                <div className={styles.footrCompany}>
                  <h5>COMPANY</h5>
                  <ul>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">About</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-9">
              <div className={styles.headingFirst}>
                <h3>PRODUCTS</h3>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <div className={styles.Individuals}>
                    <h5>Individuals</h5>

                    <ul>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={styles.Individuals}>
                    <h5>Individuals</h5>

                    <ul>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={styles.Individuals}>
                    <h5>Individuals</h5>

                    <ul>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={styles.Individuals}>
                    <h5>Individuals</h5>

                    <ul>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={styles.Individuals}>
                    <h5>Individuals</h5>

                    <ul>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={styles.Individuals}>
                    <h5>Individuals</h5>

                    <ul>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={styles.Individuals}>
                    <h5>Individuals</h5>

                    <ul>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={styles.Individuals}>
                    <h5>Individuals</h5>

                    <ul>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.headingFirst}>
                <h3>RESOURCES & GUIDES</h3>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <div className={styles.Individuals}>
                    <h5>Individuals</h5>

                    <ul>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={styles.Individuals}>
                    <h5>Individuals</h5>

                    <ul>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={styles.Individuals}>
                    <h5>Individuals</h5>

                    <ul>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={styles.Individuals}>
                    <h5>Individuals</h5>

                    <ul>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                    </ul>
                  </div>
                </div>
              
              </div>
              <div className={styles.headingFirst}>
                <h3>TOOLS</h3>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <div className={styles.Individuals}>
                    <h5>Individuals</h5>

                    <ul>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={styles.Individuals}>
                    <h5>Individuals</h5>

                    <ul>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={styles.Individuals}>
                    <h5>Individuals</h5>

                    <ul>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={styles.Individuals}>
                    <h5>Individuals</h5>

                    <ul>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                      <li>
                        <a href="">Income</a>
                      </li>
                    </ul>
                  </div>
                </div>
              
              </div>
            </div>

            <div className="col-12">
                <div className={styles.mutualFund}>
                  <h4>TRENDING MUTUAL FUNDS</h4>

                 <div className={styles.linkingcoldata}>
                 <div className={styles.colData}>
                    <a href="">ICICI Prudential Technology Fund Direct Plan Growth</a>
                  </div>
                  <div className={styles.colData}>
                    <a href="">ICICI Prudential Technology Fund Direct Plan Growth</a>
                  </div>
                  <div className={styles.colData}>
                    <a href="">ICICI Prudential</a>
                  </div>
                  <div className={styles.colData}>
                    <a href="">ICICI Prudential Technology Fund Direct Plan Growth</a>
                  </div>
                  <div className={styles.colData}>
                    <a href="">ICICI Prudential Technology Fund Direct Plan Growth</a>
                  </div>
                 </div>
                </div>


            </div>
            <div className="col-12">
                <div className={styles.mutualFund}>
                  <h4>TRENDING MUTUAL FUNDS</h4>

                 <div className={styles.linkingcoldata}>
                 <div className={styles.colData}>
                    <a href="">ICICI Prudential Technology Fund Direct Plan Growth</a>
                  </div>
                  <div className={styles.colData}>
                    <a href="">ICICI Prudential Technology Fund Direct Plan Growth</a>
                  </div>
                  <div className={styles.colData}>
                    <a href="">ICICI Prudential</a>
                  </div>
                  <div className={styles.colData}>
                    <a href="">ICICI Prudential Technology </a>
                  </div>
                  <div className={styles.colData}>
                    <a href="">ICICI Prudential Technology Fund Direct Plan Growth</a>
                  </div>
                 </div>
                </div>


            </div>
            <div className="col-12">
                <div className={styles.mutualFund}>
                  <h4>TRENDING MUTUAL FUNDS</h4>

                 <div className={styles.linkingcoldata}>
                 <div className={styles.colData}>
                    <a href="">ICICI Prudential Technology Fund Direct Plan Growth</a>
                  </div>
                  <div className={styles.colData}>
                    <a href="">ICICI Prudential Technology Fund Direct Plan Growth</a>
                  </div>
                  <div className={styles.colData}>
                    <a href="">ICICI Prudential</a>
                  </div>
                  <div className={styles.colData}>
                    <a href="">ICICI Prudential Technology Fund Direct Plan Growth</a>
                  </div>
                  <div className={styles.colData}>
                    <a href="">ICICI Prudential Technology Fund Direct Plan Growth</a>
                  </div>
                 </div>
                </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
