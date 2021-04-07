import React from "react";
import Accordian from "../components/Accordian";
import faqsData from "../fixtures/faqs.json";

const faqs = () => {
  return (
    <Accordian>
      <Accordian.Title>Frequently Asked Questions</Accordian.Title>
      {faqsData.map((item) => (
        <Accordian.Item key={item.id}>
          <Accordian.Header>{item.header}</Accordian.Header>
          <Accordian.Body>{item.body}</Accordian.Body>
        </Accordian.Item>
      ))}
    </Accordian>
  );
};

export default faqs;
