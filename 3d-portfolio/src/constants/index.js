import {
  //   mobile,
  //   web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  csharp,
  kotlin,
  python,
  sql,
  firebase,
  reactnative,
  nextjs,
  flask,
  swagger,
  zeplin,
  npm,
  yarn,
  androidStudio,
  aws,
  gcp,
  car,
  mysql,
} from "../assets/icons";

import { classum } from "../assets/images/";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: reactjs,
  },
  {
    title: "React Native Developer",
    icon: reactnative,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "c#",
    icon: csharp,
  },
  {
    name: "kotlin",
    icon: kotlin,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactnative,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "swagger",
    icon: swagger,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "zeplin",
    icon: zeplin,
  },
  {
    name: "npm",
    icon: npm,
  },
  {
    name: "yarn",
    icon: yarn,
  },
  {
    name: "android Studio",
    icon: androidStudio,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "GCP",
    icon: gcp,
  },
];

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Classum",
    date: "Janurary 2023 - July 2023",
    points: [
      "Contributed to the UI/UX frontend development of an app, which served as a private open communication-based community tool for organizations like companies and schools, serving over 11,000 clients in more than 32 countries.",
      "Utilized Metro as the bundler for app development due to its faster bundling times, efficient optimization, and seamless integration with React Native, offering distinct advantages over Webpack.",
      "Implemented a frontend-backend communication framework by integrating Axios REST API calls, harnessing its capabilities to simplify asynchronous operations and optimize data transfer using DTOs.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const education = [
  {
    school: "Boston University",
    date: "Janurary 2020 - present",
    extra: "Major: Computer Science / Minor: Visual Arts",
  },
  {
    school: "University of Massachusetts Lowell",
    date: "July 2022 - August 2022",
    extra: "Summer courses",
  },
];

const projects = [
  {
    title: "React Native Developer [project]",
    name: "Task Terriers",
    date: "September 2023 - December 2023",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    points: [
      "Contributed to developing and designing the UI/UX for a React Native (Expo) app, using TypeScript to create a specialized platform for Boston University students to exchange assistance in diverse fields.",
      "Utilized Firebase as a GCP cloud-hosted solution to leverage its NoSQL database capabilities, providing real-time synchronization, secure authentication, and efficient JSON-type document data storage and retrieval.",
      "Implemented AsyncStorage in the app to enable asynchronous storage to store and retrieve user preferences across app launches, ensuring maintaining state consistency and quick data access without relying on server calls.",
    ],
    source_code_link: "https://github.com/Task-Terriers",
    article_link: "",
    image: car,
  },
  {
    title: "React Native/ React Developer [project]",
    name: "TikiTaka",
    date: "September 2022 - October 2022",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    points: [
      "Developed both a website using React and a mobile app using React Native, specifically enabling user interaction through Instagram stories, while focusing on UI/UX development and deployment.",
      "Deployed the React Native application on cost-efficient Amazon Lightsail servers for server management and utilized S3 Buckets for robust image storage, boosting performance and scalability.",
      "Employed Docker to containerize the application, guaranteeing compatibility and reducing environment setup time, thus ensuring rapid onboarding and development across diverse computing platforms.",
      "Integrated backend and frontend services via REST APIs, utilizing Axios for its promise-based architecture that facilitated efficient data retrieval and improved error management, with Swagger enhancing API documentation.",
    ],
    source_code_link: "https://github.com/SV22-TikiTaka",
    article_link:
      "https://medium.com/@yjshin229/2022-summer-bootcamp-d1d2a0c13828",
    image: car,
  },
  {
    title: "Web Developer [project]",
    name: "Blossom",
    date: "July 2022 - August 2022",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    points: [
      "Contributed to a React-based website for colorizing greyscale photos, focusing on frontend development and aiding in the AI learning process for enhanced image colorization.",
      "Integrated Amazon RDS (MySQL) for robust data management, leveraged EC2 instances for scalable front-end hosting and utilized S3 buckets for secure asset storage to enhance user experience in a React-based application.",
      "Developed a responsive website with React and implemented styled-components for styling in a React application, enabling dynamic CSS-in-JS rendering that facilitated theme customization and design consistency.",
      "Contributed to the project's visual identity by creating website designs and crafting the project logo with Figma.",
      "Trained an AI model for picture colorization using Pytorch on Google Collaboratory.",
    ],
    source_code_link: "https://github.com/SiliconValley22-Blossom",
    article_link:
      "https://medium.com/@yjshin229/silicon-valley-summer22-bootcamp-colorize-your-photos-with-ai-blossom-9a46898d429b",
    image: car,
  },
];

export { services, technologies, experiences, education, projects };
