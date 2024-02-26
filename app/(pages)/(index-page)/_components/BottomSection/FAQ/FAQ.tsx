'use client';
import React from 'react';
import { useState } from 'react';
import styles from './FAQ.module.scss';
// import Link from 'next/link';

const FAQ = () => {
  const faqs = [
    {
      question: 'Who can attend?',
      answer: 'THINGIJKUGVBHJKBEHJBF',
    },
    {
      question: 'Do I need to know how to code?',
      answer: 'THINGIJKUGVBHJKBEHJBF',
    },
    {
      question: 'How do teams work?',
      answer: '..',
    },
    {
      question: 'How can I help?',
      answer: '..',
    },
    {
      question: 'Why social good?',
      answer: '..',
    },
    {
      question: 'What can I create?',
      answer: 'THINGIJKUGVBHJKBEHJBF',
    },
    {
      question: 'What if I don’t have a team or idea?',
      answer: '..',
    },
    {
      question: 'How much does it cost?',
      answer: 'THINGIJKUGVBHJKBEHJBF',
    },
  ];

  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  function toggleFAQExpand(index: number) {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.FAQText}>FAQ</h1>
      </div>

      <p className={styles.hackathon}>What is a Hackathon?</p>
      <p className={styles.hackathonText}>
        A hackathon is where you transform your crazy ideas into real projects.
        Hundreds of students from across California form teams around an idea
        and collaboratively create technical solutions to problems we face in
        our local communities. These ideas turn into websites, mobile apps,
        hardware, and more! <br /> <br /> Join HackDavis to make some of the
        most imaginative projects alongside fellow creators! You take care of
        building and we'll take care of you. <br /> <br /> We will be following
        the HackDavis Rules & Policies, and MLH's Code Of Conduct.
      </p>

      <hr />
      {faqs.map((faq, index) => (
        <React.Fragment key={index}>
          <h2
            className={styles.questions}
            onClick={() => toggleFAQExpand(index)}
          >
            {faq.question}
          </h2>
          {expandedIndices.includes(index) && (
            <div className="answer">{faq.answer}</div>
          )}
          {index < faqs.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FAQ;
