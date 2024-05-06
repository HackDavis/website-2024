import React from 'react';
import styles from './DirectorFAQ.module.scss';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import { DropDownArrow } from './Assets/dropDown';

const technicalAnswer = (
  <>
    Are you interested in web development with a desire to learn and collaborate
    with a team of developers? If you have a foundation in HTML/CSS, JavaScript,
    and/or React.js and are eager to expand your skill set, join the Technical
    team! As a Technical Director, you will get the chance to collaborate with a
    team of developers to create and maintain the website and web applications,
    participate in code review sessions, and offer creative solutions.
    <br /> <br />
    <b> Qualifications: </b> Basic knowledge of HTML, CSS, and JavaScript.
    Familiarity with React.js is a plus. Strong desire to learn and grow in the
    field of web development. Excellent problem-solving skills and attention to
    detail. Ability to work well in a team and take constructive feedback
    positively. Passion for technology and a proactive approach to keeping up
    with industry trends.
    <br /> <br />
    <b> Why Join Us: </b> Opportunity to work on diverse and exciting web
    development projects. Gain hands-on experience and improve your technical
    skills. Collaborate with a team of motivated developers. Add impressive
    projects to your resume. Create valuable connections in the tech industry.
    Personal and professional growth in a student-run organization.
  </>
);

const operationsAnswer = (
  <>
    As an Operations Director, you will play a crucial role in ensuring the
    smooth execution of our initiatives. Your quick decision-making,
    organization, and responsibility will shine as you tackle challenges
    head-on. You'll be a key communicator and leader, working closely with the
    team and being ready to learn and develop organizational skills as you
    contribute to the success of one of the biggest hackathons in California.
    <br /> <br />
    <b> Qualifications: </b> Strong organizational skills with a passion for
    attention to detail. Quick decision-making abilities, particularly in
    high-pressure situations. A proactive and responsible approach to tackling
    challenges with enthusiasm and a willingness to learn and grow. Thrive in a
    team setting, fostering a spirit of collaboration and mutual support.
    Excellent communication skills. A passion for learning and developing
    organizational and leadership skills.
  </>
);

const marketingAnswer = (
  <>
    As a Marketing Director, you will be right at the heart of our marketing
    efforts, leveraging your creative thinking, organization, responsibility,
    and time management skills to help us engage our audience and promote our
    initiatives effectively. Collaboration with fellow team members and other
    departments is a key aspect of this role.
    <br /> <br />
    <b> Qualifications: </b> Enthusiasm for marketing and a strong desire to
    learn and grow in the field. Creative mindset with the ability to think
    strategically. Strong organizational skills and a high level of
    responsibility. Effective time management abilities. Basic understanding of
    social media platforms and their dynamics.
    <br /> <br />
    <b> Bonus Skills: </b> Prior experience in social media advertising is a
    plus. Photography skills are a bonus, to generate better quality content for
    all events including the Day of Event hackathon
  </>
);

const sponsorshipAnswer = (
  <>
    As a Sponsorship Director, you will take the lead in securing vital
    sponsorships, relying on your confidence and quick thinking to engage
    potential partners. Your knack for negotiation, proactive approach, and
    talent for relationship building will be instrumental in fueling our
    initiatives.
    <br /> <br />
    <b> Qualifications: </b> Confidence and an ability to think on your feet in
    negotiations. A natural talent for building and maintaining relationships.
    Proactive mindset, always on the lookout for new sponsorship opportunities.
    Strong organizational skills and the ability to manage multiple sponsorship
    commitments efficiently. A genuine desire to learn and adapt, exploring new
    outreach and networking strategies.
  </>
);

const financeAnswer = (
  <>
    As a Finance Director, you will play a vital role in managing our finances,
    ensuring the sustainability of our initiatives. Your passion and interest in
    budgeting, financial planning, and fundraising, combined with your
    outstanding communication skills, will drive our financial success. Your
    can-do attitude will be an invaluable asset as you contribute to HackDavis'
    growth.
    <br /> <br />
    <b> Qualifications: </b> Strong financial acumen with an interest in
    budgeting and financial planning. Good understanding of cash flow management
    and financial forecasting. Fundraising experience or a willingness to learn
    and engage with donors and sponsors effectively. Exceptional communication
    skills, both written and verbal. A can-do attitude, with the ability to
    adapt and excel in a fast-paced environment.
  </>
);

const externalAnswer = (
  <>
    As our External Affairs Director, you'll be the representative of HackDavis
    to external organizations, showcasing your organizational skills and
    enthusiastic demeanor. Your attention to detail, communication skills, and
    talent for relationship building will play a vital role in coordinating the
    workshops and events.
    <br /> <br />
    <b> Qualifications: </b> Spearhead the planning and execution of external
    events, demonstrating your organizational skills and attention to detail. A
    proactive and personable demeanor, radiating energy and enthusiasm. Strong
    communication skills, both written and verbal. Confidence in connecting with
    diverse groups and individuals. Initiative to learn and develop
    organizational and communication skills. Outreach to clubs on-campus,
    students and alumni, and off-campus industry leaders; being able to network
    and foster meaningful connections Familiarity with HackDavis or hackathons
    is preferred but not mandatory.
  </>
);

const designAnswer = (
  <>
    {' '}
    Are you a creative, innovative, and proactive designer with a passion for
    human-centered design? Join the Design team and help us create
    brand-consistent, minimal, and aesthetically pleasing designs that captivate
    and excite our audience. Your creative talent will play a pivotal role in
    shaping the future of HackDavis. We are looking for talented individuals to
    join our design team in various roles:
    <br /> <br />
    <b> Brand Designer: </b> Craft the brand identity for the Hackathon season.
    Storytelling and experimental design. Proficiency in illustration using
    Figma and Adobe Illustrator.
    <br /> <br />
    <b> Product Designer: </b> Design products that aim to delight and leave an
    impression, including apparel, stickers, and branded items. Detail-oriented
    with a focus on product specs. Conduct market research to inform design
    decisions.
    <br /> <br />
    <b> Content Designer: </b> Create eye-catching, compelling content for
    social media and printed flyers. Deep understanding of the audience.
    Attention to detail to ensure engaging visuals.
    <br /> <br />
    <b> UI Designer: </b>Design beautiful and intuitive web experiences that
    bring joy to users. Focus on responsive design and intuitive user
    experiences. Proficiency in wireframing and creating delightful web
    interfaces.
  </>
);

const DirectorFAQ = () => {
  const faqs = [
    {
      question: 'Technical',
      answer: technicalAnswer,
    },
    {
      question: 'Operations',
      answer: operationsAnswer,
    },
    {
      question: 'Marketing',
      answer: marketingAnswer,
    },
    {
      question: 'Sponsorship',
      answer: sponsorshipAnswer,
    },
    {
      question: 'Finance',
      answer: financeAnswer,
    },
    {
      question: 'External',
      answer: externalAnswer,
    },
    {
      question: 'Design',
      answer: designAnswer,
    },
  ];

  {
    /*
      This interface and AccordionItem is used to define the structure of the accordion item, allowing us to apply our styling to it
    */
  }

  interface AccordionItemProps {
    header: React.ReactNode;
    [key: string]: any;
  }

  const AccordionItem: React.FC<AccordionItemProps> = ({
    header,
    ...rest
  }: AccordionItemProps) => {
    return (
      <Item
        {...rest}
        header={
          <>
            <div className={styles.questionRow}>
              {header}

              <div className={styles.dropDownArrow}></div>
              <DropDownArrow />
            </div>
          </>
        }
        buttonProps={{
          className: ({ isEnter }: { isEnter: boolean }) =>
            `${styles.itemBtn} ${isEnter ? styles.itemBtnExpanded : ''}`,
        }}
        contentProps={{ className: styles.itemContent }}
      />
    );
  };

  return (
    <div id="teams" className={styles.container}>
      <div>
        <h1 className={styles.FAQText}>Teams</h1>
      </div>
      <Accordion transition transitionTimeout={250}>
        {faqs.map(({ question, answer }, i) => (
          <React.Fragment key={i}>
            <AccordionItem
              header={<p className={styles.questions}>{question}</p>}
              key={i}
            >
              <p className={styles.answer}>{answer}</p>
            </AccordionItem>
            {i < faqs.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </Accordion>
    </div>
  );
};

export default DirectorFAQ;
