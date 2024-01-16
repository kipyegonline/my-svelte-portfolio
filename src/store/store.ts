import { writable, type Writable } from "svelte/store";

type Project = {
  id: number;
  name: string;
  languages: string[];
  frameworks: string[];
  long_des: string;
  short_des: string;
  year: number;
  repo: string | null;
  link: string;
  openSource: boolean;
};
const projects: Array<Project> = [
  {
    id: 1,
    name: "Image Reader Artificial Intelligence app",
    languages: ["Typescript"],
    frameworks: ["React", "Tailwindcss", "AI"],
    short_des:
      "A generative AI image to text app that reads and interprets  images using Google Gemini AI",
    long_des: `An Artificial Intelligence web app powered by Google Gemini API to read and interpret images to text using multi modal models.

The app can also compare upto 2 images and return the comparison in text format.`,
    year: 2024,
    repo: "https://github.com/kipyegonline/gemini-ai-api",
    link: "https://image-reader-357a1--pr2-firebase-57ftk8o9.web.app/ ",
    openSource: false,
  },
  {
    id: 2,
    name: "Civisec web app ",
    languages: ["Typescript"],
    frameworks: ["React", "next js", "Tailwindcss"],
    short_des:
      "An interactive cyber security tool designed to help measure and surface vulnerabilities in cybersecurity approach.",

    long_des: `The web application is designed to help organisation gauge cybercurity vulnerabilities. The four part assesments will then provide a summary insights of the results and the recommendations on areas of identified improvement`,
    year: 2023,
    repo: null,
    link: "https://civisec.io ",
    openSource: false,
  },
  {
    id: 3,
    name: "Umzima app ",
    languages: ["Typescript"],
    frameworks: ["React", "next js", "headless ui"],
    short_des:
      "A landing page for Umzima mobile app, a health recording and hospital appointment app.",

    long_des: `The web application  basically has 2 functionalities, displaying information about Umzima mobile app and a fuctionality to allow user to sign up for early access of the mobile app.`,
    year: 2023,
    repo: null,
    link: "https://umzima.com ",
    openSource: false,
  },
  {
    id: 4,
    name: "Umzima Provider app ",
    languages: ["Typescript"],
    frameworks: [
      "Redwod js",
      "Ant design",
      "GraphQL",
      "AWS cognito & DynamoDB",
    ],
    short_des:
      "A web application for hospital providers to view patients appointments",

    long_des: `This web app uses AWS cognito to sign up and login users (hospital providers) to the backend portal to view patients who have booked appointments via Umzima app`,
    year: 2023,
    repo: null,
    link: "civisec.io ",
    openSource: false,
  },
  {
    id: 5,
    name: "Freeshow Worship",
    languages: ["Typescript"],
    frameworks: ["Svelte"],
    short_des:
      "An open source software for presenting show and sermons in church",

    long_des: `I forked and contributed to the application by improving the PWA part of it so that it can cache correctly. The website is built using svelte,Typescript and Electron`,
    year: 2023,
    repo: "https://github.com/kipyegonline/FreeShow-worship-tool",
    link: "",
    openSource: !false,
  },
  {
    id: 6,
    name: "Open MRS ",
    languages: ["Typescript"],
    frameworks: ["React", "Carbon UI"],
    short_des: "An  open Medical Records System for hospitals and clinics",

    long_des: `The open MRS is a monorepo with 6 modules for patient management; registering patients, booking appointments,patient search,active visits,outpatient and patients list. I contributed and customized the patient registration module. `,
    year: 2023,
    repo: null,
    link: "",
    openSource: false,
  },
  {
    id: 7,
    name: "Finwit App ",
    languages: ["Typescript"],
    frameworks: ["React", "Next js", "Tailwind css", "Material UI", "Laravel"],
    short_des:
      "A financial listing web application listing financial institutions in Kenya and their products and services",

    long_des: `The web app has 6 sevices including: loans,bank accounts,investments,forex and property financeand  a section listing financial institutions (Banks & Saccos) in Kenya. I also developed financial calculators for calculating interests across this services `,
    year: 2022,
    repo: null,
    link: "https://finwit.co ",
    openSource: false,
  },
  {
    id: 8.5,
    name: "Mentor Sacco web app",
    languages: ["javascript"],
    frameworks: ["create-react-app", "bootstrap", "redux"],
    short_des:
      "A web application for Mentor Sacco Society Limited based in Muranga Kenya",

    long_des: `It includes its website,oline membership application sections, a membership portal, products and service applications and listing section. Plugged in Google Analytics ,web performance and SEO. `,
    year: 2022,
    repo: null,
    link: "https://mentorsacco.co.ke ",
    openSource: false,
  },
  {
    id: 8,
    name: "Elections Tracking app",
    languages: ["Typescript"],
    frameworks: ["Next js", "Material UI", "Tailwind css"],
    short_des:
      "I created this app to visualize the 2022 General Elections in Kenya",

    long_des: `The app used REST API to fetch realtime election updates from Nation Media Group API`,
    year: 2022,
    repo: "https://github.com/kipyegonline/electionsKe",
    link: "https://electionske.netlify.app/ ",
    openSource: false,
  },
  {
    id: 9,
    name: "Farmer Record Keeping App",
    languages: ["javascript"],
    frameworks: ["Next js", "Typescript", "Material UI"],
    short_des:
      "I created this app to help farmers keep track of inputs and output their short term crops in the farm from planting to harvesting period",

    long_des: `The app  uses Laravel backend to store farmer records`,
    year: 2022,
    repo: "https://github.com/kipyegonline/farmer-records",
    link: "",
    openSource: false,
  },
  {
    id: 10,
    name: "Blood pressure tracking app",
    languages: ["javascript"],
    frameworks: ["React js", "react", "redux", "D3 js", "redux", "Laravel"],
    short_des: "A blood pressure record keeping app",

    long_des: `An interactive visualization web app where BP patients can add their daily BP readings , sent to database and the doctor can interpret the readings  on interactive charts.`,
    year: 2021,
    repo: "https://github.com/kipyegonline/bp-app ",
    link: "",
    openSource: false,
  },
  {
    id: 11,
    name: "Corona Virus tracking App ",
    languages: ["javascript"],
    frameworks: ["React js", "react", "redux", "D3 js", "redux", "Laravel"],
    short_des:
      "An interactive data visualization  react app for tracking the corona virus cases  in Kenya, Africa and globally. ",

    long_des: `It uses  REST API and AJAX  to fetch data via fetch API from John Hopkin University database`,
    year: 2020,
    repo: "https://bitbucket.org/kipyegonline/corona-virus-visualisation/src/react/",
    link: "https://corona-kenya.netlify.app/",
    openSource: false,
  },
  {
    id: 12,
    name: "Eastern College Website development  ",
    languages: ["javascript"],
    frameworks: ["React", "javascript", "Material UI", "Gatsby"],
    short_des:
      "A gatsby js website redesign and portal management for Eastern College, Somalia.  ",

    long_des: `Decoupling the front-end and the backe-end of an MVC website in order to manage scalability.`,
    year: 2021,
    repo: "https://github.com/kipyegonline/easterncollege",
    link: "https://easterncollege.netlify.app/",
    openSource: false,
  },
  {
    id: 13,
    name: "Church web app  ",
    languages: ["javascript"],
    frameworks: ["React", "javascript", "Material UI", "Gatsby"],
    short_des: "A   church website for lakeview AGC Nakuru  ",

    long_des: `The app has a backend for adding events, sermons and church based sessions such as prayer and fasting weeks. The backend is based on PHP and MySQL where these events and sessions are persisted`,
    year: 2020,
    repo: " https://github.com/kipyegonline/lakeview-gatsby",
    link: "www.lakeviewagc.net",
    openSource: false,
  },
  {
    id: 14,
    name: "Accidents visualization app  ",
    languages: ["javascript"],
    frameworks: ["React", "javascript", "Material UI", "Gatsby"],
    short_des:
      "A visualization app showing road accidents in Kenya, according accident statistics by the National Transport and Safety Authority.u  ",

    long_des: `The app uses D3 Js charting library to display interactive charts for accidents that occor across the road transpor system. The monthly data is downloaded from NTSA website `,
    year: 2020,
    repo: " https://github.com/kipyegonline/accidentsStatsy",
    link: "",
    openSource: false,
  },
  {
    id: 15,
    name: "A correspondence management  react app  ",
    languages: ["javascript"],
    frameworks: ["React", "javascript", "Material UI", "Next Js", "Laravel"],
    short_des:
      "This is a RESTFUL web  application for tracking communications (customer care, dispatch,documents ) within an organisation.  ",

    long_des: `The app receives dispatch or documents entering an organisation, assigns the department or person responsible  for the dispatch then ensures the receiver accepts receipt. `,
    year: 2019,
    repo: "https://commsapp.netlify.app/",
    link: "https://github.com/kipyegonline/commsApp",
    openSource: false,
  },
  {
    id: 16,
    name: "Membership database react  application ",
    languages: ["javascript"],
    frameworks: [
      "React js",
      "react redux",
      "Fetch api",
      "Jquery ajax",
      "PHP & MySQL",
    ],
    short_des:
      "An AJAX driven  utility web application for performing  CRUD of over 2000 members of professional body in Kenya  ",

    long_des: `The app allows the secretariat of the body to access a list of their members, create and update the member records. The app has  a birthday picker for checking membership birthdays  and interactive visuals. `,
    year: 2019,
    repo: "https://bitbucket.org/kipyegonline/prsk-portal",
    link: "",
    openSource: false,
  },
  {
    id: 17,
    name: "Deforestation app ",
    languages: ["javascript"],
    frameworks: [
      "React js",
      "react redux",
      "Fetch api",
      "Jquery ajax",
      "PHP & MySQL",
    ],
    short_des: "An interactive map app showing deforestation in Kenya ",

    long_des: `The app fetches data from a REST API then displays them on an interactive map of Kenya. `,
    year: 2019,
    repo: "https://github.com/kipyegonline/ke_deforestation",
    link: "",
    openSource: false,
  },
];

export const portfolio: Writable<Project[]> = writable(projects);
