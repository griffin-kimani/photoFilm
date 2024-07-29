import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const [visibleAnswers, setVisibleAnswers] = useState({});

  const toggleAnswerVisibility = (index) => {
    setVisibleAnswers((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const faqData = [
    {
      question: "How far in advance should we book our wedding photographer and videographer?",
      answer: "We recommend booking your photographer and videographer at least 6 to 12 months in advance, especially if your wedding is during peak season.",
    },
    {
      question: "Can we customize our wedding photography and videography packages?",
      answer: "Yes, we offer customizable packages to suit your specific needs and preferences. Get in touch with us to discuss your requirements.",
    },
    {
      question: "Do you offer engagement photo sessions?",
      answer: "Yes, we offer engagement photo sessions as part of our services. It's a great way to get comfortable in front of the camera before your big day.",
    },
    {
      question: "How long does it take to receive our wedding photos and videos?",
      answer: "The turnaround time for receiving your wedding photos and videos varies depending on the package you choose and the season. Generally, it takes around 4 to 8 weeks.",
    },
    {
      question: "Can we request specific shots or poses for our wedding photos?",
      answer: "Absolutely! We encourage you to share any specific ideas or preferences you have for your wedding photos. We want to capture your special day exactly how you envision it.",
    },
    {
      question: "Do you provide both photography and videography services?",
      answer: "Yes, we offer both photography and videography services. You can choose to hire us for one or both services, depending on your preferences.",
    },
    {
      question: "What is your approach to capturing candid moments?",
      answer: "We believe that candid moments are some of the most precious memories of your wedding day. Our photographers and videographers are skilled at capturing these genuine moments without intruding on the natural flow of your celebration.",
    },
    {
      question: "Do you have backup equipment in case of technical issues?",
      answer: "Yes, we always bring backup cameras, lenses, and other equipment to ensure that we can continue capturing your wedding day smoothly, even in the unlikely event of technical issues.",
    },
    {
      question: "Can we meet with you before booking to discuss our wedding plans?",
      answer: "Of course! We offer complimentary consultations where we can discuss your wedding plans, show you samples of our work, and answer any questions you may have. Contact us to schedule a meeting.",
    },
    {
      question: "What happens if the weather is bad on our wedding day?",
      answer: "We always have contingency plans in place for inclement weather. Whether it's providing alternative indoor photo locations or adjusting our shooting schedule, we'll work closely with you to ensure that your wedding memories are beautiful regardless of the weather.",
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <h3
              className="question faq-question"
              onClick={() => toggleAnswerVisibility(index)}
            >
              {index + 1}. {item.question}
            </h3>
            {visibleAnswers[index] && (
              <p className="answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
