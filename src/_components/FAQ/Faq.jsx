
'use client';
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import styles from "@/_styles/client-component/HomePage.module.css";

const Faq = ({item}) => {
    const [activeKey, setActiveKey] = useState(null);
    const [show , setShow] = useState(false)
  const handleAccordionChange = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  const hand  = ()=>{
    setShow(true)
    setTimeout(() => {
        setShow(false)
    }, 5000);
  }
  return (
    <>
        <Accordion activeKey={activeKey} onSelect={handleAccordionChange}>
        {item?.map((item) => (
          <Accordion.Item key={item.id} eventKey={item.id}>
            <Accordion.Header>{item.heading}</Accordion.Header>
            <Accordion.Body>{item.para}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      { show && (<>
        {[
        'secondary',
      ].map((variant) => (
        <div className={styles.sadasdwe}>
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
        </div>
      ))}
      </>)}

      {/* <button onClick={hand}>send popup</button> */}
    {/* <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> */}
    </>
  )
}

Faq.propTypes = {
    item: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        heading: PropTypes.string.isRequired,
        para: PropTypes.string.isRequired,
      })
    ),
  };
export default Faq


