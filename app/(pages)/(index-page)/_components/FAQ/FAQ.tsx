import React from 'react';
import styles from './FAQ.module.scss';
import Link from 'next/link';

const FAQ = () => {
  const faqs = [
    {
      question: 'Who can attend?',
      answer: '..',
    },
    {
      question: 'Do I need to know how to code?',
      answer: '..',
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
      answer: '..',
    },
    {
      question: 'What if I don’t have a team or idea?',
      answer: '..',
    },
    {
      question: 'How much does it cost?',
      answer: '..',
    },
  ];
  return (
    <div className={styles['background-container']}>
      <h1 className={styles.FAQ}>FAQ</h1>
      <p className={styles.hackathon}>What is a hackathon?</p>
      <p className={styles.explanation}>
        A hackathon is where you transform your crazy ideas into real projects.
        Hundreds of students from across California form teams around an idea
        and collaboratively create technical solutions to problems we face in
        our local communities. These ideas turn into websites, mobile apps,
        hardware, and more! <br />
        Join HackDavis to make some of the most imaginative projects alongside
        fellow creators! You take care of building and we'll take care of you.
        <br /> We will be following the{' '}
        <span className={styles.h}>
          <Link
            href="https://drive.google.com/file/d/1KnWwN5sFYTe49Z5312OKnS5FA8OtL4iD/view"
            target="_blank"
          >
            HackDavis Rules & Policies
          </Link>{' '}
          <span className={styles.and}> and </span>
          <Link
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            target="_blank"
          >
            MLH's Code Of Conduct.
          </Link>
        </span>
      </p>
      <div className={styles.stroke}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1171"
          height="2"
          viewBox="0 0 1171 2"
          fill="none"
        >
          <path d="M1 1H1170" stroke="white" strokeLinecap="round" />
        </svg>
      </div>
      {faqs.map((faq, index) => (
        <React.Fragment key={index}>
          <h2 className={styles.questions}>{faq.question}</h2>
          <p className={styles.questions}>{faq.answer}</p>
          {index < faqs.length - 1 && (
            <div className={styles.stroke}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1171"
                height="2"
                viewBox="0 0 1171 2"
                fill="none"
              >
                <path d="M1 1H1170" stroke="white" strokeLinecap="round" />
              </svg>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FAQ;
