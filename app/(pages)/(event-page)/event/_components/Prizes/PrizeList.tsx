import { useState } from 'react';
import PrizeCard from './_components/PrizeCard';
import styles from './PrizeList.module.scss';
import { StaticImageData } from 'next/image';

// statically importing prize images

// general prizes
import camcorder from 'public/index/PrizeList/General/camcorder.png';
import tv from 'public/index/PrizeList/General/vizioTV.jpg';
import fitbit from 'public/index/PrizeList/General/fitbit.png';
import fujifilm from 'public/index/PrizeList/General/fujifilm.png';
import nordVPN from 'public/index/Sponsors/nordSecurity.png';

import ipad from 'public/index/PrizeList/General/ipad.png';
import keyboard from 'public/index/PrizeList/General/keyboard.png';
import legocamera from 'public/index/PrizeList/General/legocamera.png';
import ps5 from 'public/index/PrizeList/General/ps5.2.png';
// import moneybag from 'public/index/PrizeList/General/noto_money-bag.png';
import swagbag from 'public/index/PrizeList/General/swagbag.png';

// technical prizes
import beats from 'public/index/PrizeList/Technical/beatsSolo3.webp';
import chatgpt from 'public/index/PrizeList/Technical/chatgptplus.png';
import lenovolaptop from 'public/index/PrizeList/Technical/lenovolaptop.png';

// design prizes
import ticket from 'public/index/PrizeList/Design/ticket.webp';

import creativecloud from 'public/index/PrizeList/Design/creativecloud.png';
import instax from 'public/index/PrizeList/Design/instax.png';

// business prizes
import akasocamera from 'public/index/PrizeList/Business/akasocamera.png';
import embermug from 'public/index/PrizeList/Business/embermug.png';
import waterbottle from 'public/index/PrizeList/Business/larqwaterbottle.png';
// also beats but just using the import from technical

// mlh prizes which have been placed in the general and technical sections
import pen from 'public/index/PrizeList/MLH/3dprintingpen.png';
import microphone from 'public/index/PrizeList/MLH/bluesnowballmicrophone.png';
import breadboard from 'public/index/PrizeList/MLH/breadboardkit.png';
import saucelabs from 'public/index/PrizeList/MLH/saucelabs.png';
import tablet from 'public/index/PrizeList/MLH/wacometablet.png';
import wirelesscharger from 'public/index/PrizeList/MLH/wirelesscharger.png';

// non-profit prizes
import camping from 'public/index/PrizeList/NonProfit/owlcamping.png';
import stuffle from 'public/index/PrizeList/NonProfit/frogPlushie.png';


const filters = [
  'All',
  'General',
  'Technical',
  'Design',
  'Business',
  'Non-Profit',
];

type PrizeCategory = {
  name: string;
  prizeImages: StaticImageData[];
  prizeNames: string[];
  criteria: string;
};

type PrizeCategories = {
  [key: string]: PrizeCategory[];
};

const prizeCategories: PrizeCategories = {
  General: [
    {
      name: 'Best Hack for Social Good',
      prizeImages: [ps5, ipad],
      prizeNames: ['PS5', 'IPad (9th gen)'],
      criteria:
        'Encapsulate your authentic idea of "social good" can look like. All entries are automatically considered for this prize category.	',
    },
    {
      name: 'Best Beginner Hack',
      prizeImages: [tv],
      prizeNames: ['VIZIO 40” smart tv'],
      criteria:
        'Every team member must be a beginner in order to qualify. Demonstrate a high level of growth through this project. Foster creativity and collaboration within the team and display a committment to building skills.	',
    },
    {
      name: 'Best Interdisciplinary Hack',
      prizeImages: [fujifilm, nordVPN],
      prizeNames: [
        'Fujifilm instax SQ40 camera & NordPass & Incogni & NordVPN',
      ],
      criteria:
        'Leverage multiple perspectives across different disciplines to create a more well-rounded project. At least one member of the team needs to be a non-CS/CSE/otherwise CS-related major in order to qualify.	',
    },
    {
      name: 'Best Hardware Hack',
      prizeImages: [keyboard],
      prizeNames: ['Mechanical Keyboard'],
      criteria:
        'Effectively integrate a hardware component to your final project. The final project should be functional, user-friendly, and interactive.	',
    },
    {
      name: "Hacker's Choice Award",
      prizeImages: [swagbag],
      prizeNames: ['HackDavis Swag Bag'],
      criteria:
        'Awarded to the project with the most votes from our 2024 hackers. Vote for any project but your own!	',
    },
    {
      name: 'Best Health Hack',
      prizeImages: [fitbit],
      prizeNames: ['Fitbit'],
      criteria:
        'Health takes many shapes and forms. The Best Health Hack should represent at least one of the following themes: mental health and well-being, nutrition, food, service accessibility, and animal & human health.	',
    },
    {
      name: 'Best Hack for Social Justice',
      prizeImages: [camcorder],
      prizeNames: ['Minolta camcorder'],
      criteria:
        'Law/Poli-Sci Majors Welcome! Hack must address a social justice issue such as racial inequality, economic injustice, environmental justice, etc. This project should develop tangible solutions and/or raise awareness on these topics.	',
    },
    {
      name: 'Most Creative Hack',
      prizeImages: [legocamera],
      prizeNames: ['Lego polaroid camera'],
      criteria:
        'The Most Creative Hack should demonstrate originality, showcase out-of-the-box thinking, and captivate its audience.	',
    },
    {
      name: 'Best DEI Hack Sponsored by Fidelity',
      prizeImages: [wirelesscharger],
      prizeNames: ['Fidelity branded wireless charger'],
      criteria:
        'At Fidelity, Diversity, Equity, and Inclusion are viewed as major keys to the success of their business, which is why they are challenging you to come up with innovative ways to create forward-thinking financial tech that promotes equality for all people! We want you to use your hacking skills to find and build solutions that put financial opportunities and resources within reach for all communities, creating accessible, sustainable, and/or inclusive solutions. The team with the best hack will win a Fidelity branded wireless charger for each team member!	',
    },
    // {
    //   name: 'Best CyberSecurity Hack powered by Cloaked	',
    //   prizeImages: [moneybag],
    //   prizeNames: ['$100'],
    //   criteria: 'TBD',
    // },
  ],
  Technical: [
    {
      name: 'Best AI/ML Hack',
      prizeImages: [chatgpt],
      prizeNames: ['ChatGPT subscription'],
      criteria:
        'Project must have unique/creative AI functionality, clean data, accuracy in metrics, presence of high-quality data, utilizing relevant algorithms + ML libraries and or cloud platforms for development. Participants should show how they collected their data and explain how their AI imitates the human mind. We encourage that models work accurately on unseen circumstances (displays versatility).	',
    },
    {
      name: 'Most Technically Challenging Hack',
      prizeImages: [beats],
      prizeNames: ['Beats Solo3'],
      criteria:
        'Projects must showcase breadth and application of technical knowledge. Focuses on use of advanced techical tools + algorithms/data structures, integration of multiple technologies, quality of implementation, displays technical depth, graded on performance/scalability.',
    },
    {
      name: 'Best use of Intel Developer Cloud',
      prizeImages: [lenovolaptop],
      prizeNames: ['Lenovo Laptops', 'IDC Credit'],
      criteria: 'Projects must use Intel® Developer Cloud.',
    },
    {
      name: 'Best Use of .Tech Domain Name',
      prizeImages: [microphone],
      prizeNames: ['FREE domain name for life & blue snowball microphone '],
      criteria:
        "Make your Team's Achievements timeless: Win a .Tech Domain Name for Life to Showcase and Expand Your Project, Plus 4 Blue Snowball Mics for Effortless Collaboration on Zoom, empowering you to build even more cool things together!	",
    },
    {
      name: 'Best Use of Kintone',
      prizeImages: [breadboard],
      prizeNames: ['Breadboard IoT kit'],
      criteria:
        "Still not sure what backend to use in your hack? Kintone is a low-code web database that lets you set up your backend in minutes. It's beginner friendly, allowing you to customize your Kintone app using nothing but JavaScript and HTML. If you're interested in IoT, your team can snag a FREE microcontroller by signing up for Kintone and visiting the MLH table. If you use Kintone in your hackathon project, you'll have a chance to win a breadboard IoT kit to power up the hardware hacking for each member of your team!	",
    },
    {
      name: 'Best Use of TinyMCE',
      prizeImages: [pen],
      prizeNames: ['3d Printing Pen'],
      criteria:
        'TinyMCE is a rich-text editor that allows you to create formatted content within a hacker-friendly interface. Adding a Rich Text Editor component has never been easier! Alongside functionality like bold, italics, underlines, hyperlinks, or titles (to name a few), the editor also allows users to enable HTML tags, MarkDown or CSS. TinyMCE even gives you the ability to edit your text elements directly with no code, similar to the way you would edit a word document but with even more practical hackathon use cases. . TinyMCE also has dozens of plugins that allow developers to customize their user’s experience. From implementing accessibility checkers, autocorrect, and enhanced image editing to utilizing emoticons, adding responsive design with auto resize and even a ChatGPT AI Assistant. If your hackathon project accepts ANY type of text input, you can use TinyMCE to take it to the next level. . Signup for TinyMCE for a free trial and get started today, no credit card required! To qualify for the Best Use of TinyMCE prize category, be sure to render the editor with a Tiny Cloud account for a chance to win a 3D Printing Pen for you and each of your team members!	',
    },
    {
      name: 'Best Use of PropelAuth',
      prizeImages: [tablet],
      prizeNames: ['Wacom Tablets'],
      criteria:
        'PropelAuth makes it easy for hackers to add authentication and user management to their projects. If you’re looking to save time and effort on building a signup and login feature for your hack, PropelAuth is a great option for you and your team. Customize your login’s User Interface, from the color scheme and logo, to the login options you present to your users! PropelAuth provides a ton of options for configuration. PropelAuth is also supported across more than a dozen popular frameworks and languages including React, Node.js, Python, Django, Go, Rust, and Flask among others. Get started today and integrate PropelAuth to your hackathon project for a chance to win some awesome prizes for you and your teammates!	',
    },
    {
      name: 'Sauce Labs Raffle',
      prizeImages: [saucelabs],
      prizeNames: ['Swag Bag'],
      criteria:
        'Sauce Labs empowers you to develop, test, and deliver top-tier web and mobile apps quickly and efficiently. Their unified platform makes automated testing and error monitoring easy to do, enabling you to save time building your hackathon project! Let Sauce Labs help resolve any issues with your code so you can get back to building an award winning hack. Make sure your project is hackathon-tested by signing up for a Sauce Labs account and running at least one test on the platform. Include a screenshot of your test results in your project submission to get entered into the Sauce Labs raffle for a chance to win a backpack, beanie, and Apple air tag for you and each of your team members!	',
    },
  ],
  Design: [
    {
      name: 'Best UI/UX Prototyping',
      prizeImages: [creativecloud],
      prizeNames: ['Adobe Creative Cloud of 1 year'],
      criteria:
        'Project includes beautiful design and intuitive web experiences that bring joy to users. Shows that the project is not only functional but also delightful, demonstrates wireframing, responsive design and promots intuitive user experiences.',
    },
    {
      name: 'Best User Research',
      prizeImages: [instax],
      prizeNames: ['Instax mini'],
      criteria:
        'Awarded to a well-researched project that keeps its userbase in mind with an inclusive design aimed to maximize accessibility.	',
    },
    {
      name: 'Best Overall Design',
      prizeImages: [ticket],
      prizeNames: ['Config Tickets'],
      criteria: 'Tickets to Figma’s conference happening June 26 - 27!',
    },
  ],
  Business: [
    {
      name: 'Best Interactive Media Hack',
      prizeImages: [beats],
      prizeNames: ['Beats Solo3'],
      criteria:
        'No Code Required. Get creative with relevant media to push the boundaries of interactive technologies today. Project focus should be on the user experience being as interactive as possible, potentially a gamified platform, an AI education platform, or an interactive concert viewing. A perfect opportunity to tap into non-tech skills, perhaps by incorporating music, visuals, and any other creative methods that come to mind.	',
    },
    {
      name: 'Best Finance & Tech',
      prizeImages: [embermug],
      prizeNames: ['Ember Smart Mug'],
      criteria:
        'Simpler and more mainstream code like Python are encouraged but not required. Teams should aim to develop innovative fintech solutions with practical functionalities, oriented towards addressing a social issue that would benefit from a more effective user framework.	',
    },
    {
      name: 'Best Entrepreneurship Hack',
      prizeImages: [waterbottle],
      prizeNames: ['Larq self cleaning water bottle'],
      criteria:
        "No Code Required. A project that focuses on viability and persuasive power through presentation on the product/service you're trying to sell, relevant customer segments, distribution channels, and associated revenue/profit models.",
    },
    {
      name: 'Best Statistical Model',
      prizeImages: [akasocamera],
      prizeNames: ['AKASO brave'],
      criteria:
        'Projects must seamlessly incorporate significance tests that evaluate a hypothesis based on their primary question or project goal, with an emphasis on accuracy metrics such as MSE, R^2, adjusted R^2, precision and recall.',
    },
  ],
  'Non-Profit': [
    {
      name: 'Best Hack for Life of Kai',
      prizeImages: [stuffle, camping],
      prizeNames: ['1 Plushie & 1 Camping Hammock'],
      criteria:
        'The Life of Kai is a non-profit organization devoted to finding forever homes for homeless animals. This prize will be awarded to an application that innovates search methods for lost pets while promoting and encouraging community engagement.',
    },
    {
      name: 'Best Hack for DCMH',
      prizeImages: [stuffle, camping],
      prizeNames: ['1 Plushie & 1 Camping Hammock'],
      criteria:
        'DCMH provides low income/homeless individuals with housing/human services. \n Tech Prompt: Build an application to track inventory for admins that has a public facing donation page. Design prompt: redesign brand identity and improve user experience.	',
    },
    {
      name: 'Best Hack for AggieHouse',
      prizeImages: [stuffle, camping],
      prizeNames: ['1 Plushie & 1 Camping Hammock'],
      criteria:
        'AggieHouse provides shelter, food, financial education, case management services, and community. Build a new website for their organization.	',
    },
  ],
};

const allPrizes = Object.values(prizeCategories).reduce((acc, category) => {
  return acc.concat(
    Array.isArray(category)
      ? category.map((prize) => ({ ...prize, category })) // Add category to each prize object
      : category
  );
}, []);

prizeCategories.All = allPrizes;

export default function PrizeList() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Prizes</h3>
      <div className={styles.filters}>
        {filters.map((filter) => (
          <div
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={
              filter == activeFilter ? styles.filterActive : styles.filter
            }
          >
            {filter}
          </div>
        ))}
      </div>
      <div className={styles.prizes}>
        {prizeCategories[activeFilter].map((category) => (
          <PrizeCard
            key={category.name}
            name={category.name}
            prizeImages={category.prizeImages}
            prizeNames={category.prizeNames}
            criteria={category.criteria}
          />
        ))}
      </div>
    </div>
  );
}
