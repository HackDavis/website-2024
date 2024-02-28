'use client';
import React from 'react';
import { useState } from 'react';
import styles from './FAQ.module.scss';
import Link from 'next/link';

const whatIsHackathonAnswer = (
  <>
    A hackathon is where you transform your crazy ideas into real projects.
    Hundreds of students from across California form teams around an idea and
    collaboratively create technical solutions to problems we face in our local
    communities. These ideas turn into websites, mobile apps, hardware, and
    more! <br />
    Join HackDavis to make some of the most imaginative projects alongside
    fellow creators! You take care of building and we'll take care of you.
    <br /> <br /> We will be following the{' '}
    <Link
      style={{
        textDecoration: 'underline',
        fontWeight: 'normal',
        fontFamily: 'Proxima Nova',
      }}
      href="https://drive.google.com/file/d/1KnWwN5sFYTe49Z5312OKnS5FA8OtL4iD/view"
      target="_blank"
    >
      HackDavis Rules & Policies,
    </Link>{' '}
    <span
      style={{
        fontFamily: 'Proxima Nova',
      }}
    >
      {' '}
      and{' '}
    </span>
    <Link
      style={{
        textDecoration: 'underline',
        fontWeight: 'normal',
        fontFamily: 'Proxima Nova',
      }}
      href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
      target="_blank"
    >
      MLH's Code Of Conduct.
    </Link>
  </>
);

const whatToHelpAnswer = (
  <>
    HackDavis is largely built upon the efforts of our mentors and volunteers,
    who ensure that our hackers have a great experience at our event! Our mentor
    and volunteer applications will open in late April, so keep an eye out! If
    you're interested in making a tax-deductible contribution to HackDavis,
    please get in touch at{' '}
    <a
      style={{
        textDecoration: 'underline',
        fontWeight: 'normal',
        fontFamily: 'Proxima Nova',
      }}
      href="mailto:team@hackdavis.io"
    >
      team@hackdavis.io
    </a>
  </>
);

const FAQ = () => {
  const faqs = [
    {
      question: 'What is a Hackathon?',
      answer: whatIsHackathonAnswer,
    },
    {
      question: 'Who can attend?',
      answer: `HackDavis is open to all undergraduate and graduate students from all majors and all schools, and graduates who have completed their degrees within the past year. We are also open to high school students above the age of 18. As long as you're prepared to learn, brainstorm, and bring life to projects, we welcome you to join us!`,
    },
    {
      question: 'Do I need to know how to code?',
      answer: `Nope! Coming in, you do not need to know how to code, but you have to be willing to learn! HackDavis is proud to be a beginner-focused hackathon, and we welcome hackers from all experience levels and backgrounds - over 40% of our hackers are beginners! HackDavis is the perfect time and place to learn new skills - we host beginner-friendly workshops and our mentors provide guidance to help you build something you can be proud of.`,
    },
    {
      question: 'How do teams work?',
      answer: `Teams can have up to four members, and submit a single project together! Want to go solo? Fine by us, but we'd highly recommend joining a team to make new friends, bounce ideas off one another,and bring your ideas to life!`,
    },
    {
      question: 'How can I help?',
      answer: whatToHelpAnswer,
    },
    {
      question: 'Why social good?',
      answer: `We want our attendees to create projects with a meaningful impact and hope to foster a community dedicated to social change. We find that most hackathons often don't result in projects as practical solutions to specific societal problems and we're looking to change that.`,
    },
    {
      question: 'What can I create?',
      answer: `You can build whatever your heart desires, whether it's a web app, mobile app, hardware hack, open source tool, or even a simple website! Any social good oriented project is recommended. Our main focus is to provide you a learning experience where you can have fun, ask questions, and experiment with technology.`,
    },
    {
      question: 'What if I don’t have a team or idea?',
      answer: `Worry not! We will host a series of mixers before HackDavis, so check out our social media for announcements about those as we get closer to the event. We'll also have a final mixer right after hacking starts during HackDavis, so we'll make sure you're equipped and ready to go!

      Our non-profit partners, sponsors, and mentors are always here at the event to help you brainstorm and ideate if you don't have an idea!`,
    },
    {
      question: 'How much does it cost?',
      answer: `Zero. Zip. Zilch. Nada. HackDavis is free for all admitted participants, so don't sweat it! We will provide your WiFi, meals, caffeine, swag, and workspace for the entire weekend.`,
    },
  ];

  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  function toggleFAQExpand(index: number) {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== index));
    } else {
      setExpandedIndices([index]);
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.FAQText}>FAQ</h1>
        <h1 className={styles.FAQTextMobile}>Frequently Asked Questions</h1>
      </div>
      {faqs.map((faq, index) => (
        <React.Fragment key={index}>
          <h2
            className={styles.questions}
            onClick={() => toggleFAQExpand(index)}
          >
            {faq.question}
          </h2>
          {expandedIndices.includes(index) && (
            <div className={styles.answer}>{faq.answer}</div>
          )}
          {index < faqs.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FAQ;
