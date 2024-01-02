import React from 'react'
import styles from "@/_styles/Header/Mainheader.module.css"
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import whatsappIcon from "@/_assets/Header/whatsappIcon.svg"
import callIcon from "@/_assets/Header/callIcon.svg"
const Mainheader = () => {
  return (
   <>
            <div className={styles.main_header}>
               <Container>
                <Row>
                    <Col md={12} sm={12}>
                        <div className={styles.bag1}>
                            <div className={styles.whatsapp}>
                            <Image src={whatsappIcon}  />
                        <span>+91-87-6622-6652</span>
                            </div>
                            <div className={styles.phone}>
                            <Image src={callIcon}  />
                        <span>+91-87-6622-6652</span>
                            </div>
                        </div>
                    </Col>
                </Row>
               </Container>
            </div>
   </>
  )
}

export default Mainheader