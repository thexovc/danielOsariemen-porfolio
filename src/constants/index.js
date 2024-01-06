import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  solidity,
  nest,
  express,
  patosehi,
  swift,
  nft,
  linkbud,
  tinapay,
} from "../assets";

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
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Smart Contract Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Nest",
    icon: nest,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "FullStack Developer",
    company_name: "Swiftreseller ",
    icon: swift,
    iconBg: "#E6DEDD",
    // date: "Mar 2021 - Jun 2021",
    points: [
      "Developed RESTful APIs for seamless user engagement and social media account management.",
      "Ensured secure authentication using JWT and integrated real-time analytics features.",
      "Optimized database architecture for efficient data retrieval and storage.",
      "Implemented caching strategies and load balancing to enhance performance.",
      "Collaborated with UI/UX designers and frontend developers for a cohesive user experience.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Gsubz.com",
    icon: "https://gsubz.com/uploads/2021/9/1/1331878181.png",
    iconBg: "#E6DEDD",
    // date: "Sep 2021 - Dec 2021",
    points: [
      "Improved the backend structure for smooth data, airtime, and service transactions.",
      "Collaborated with different teams to make processes like data delivery and transactions automated.",
      "Ensured transactions were secure and reliable, allowing quick and safe airtime and data transfers.",
      "Assisted in connecting APIs to websites and apps to make user interactions seamless.",
      "Provided user support and solutions, contributing to platform dependability both on the frontend and backend.",
    ],
  },
  {
    title: "Software engineer ",
    company_name: "Patosehi Box",
    icon: patosehi,
    iconBg: "#E6DEDD",
    // date: "Feb 2022 - May 2022",
    points: [
      "Led backend development for Patosehi Box's logistics platform.",
      "Collaborated with cross-functional teams to streamline package delivery.",
      "Designed robust APIs for frontend-backend communication.",
      "Contributed to the frontend, creating engaging user interfaces and delivering seamless experiences with React JS",
      "Prioritized data security for sensitive logistics transactions.",
      "Prioritized data security for sensitive logistics transactions.",
      "Integrated secure payment gateways for smooth transactions.",
    ],
  },
  {
    title: "Backend and Smart contract developer",
    company_name: "Japaul",
    icon: "https://japaulgroup.com/wp-content/uploads/2022/07/jgroup-logo-2048x685.png",
    iconBg: "#E6DEDD",
    // date: "Nov 2022 - Mar 2023",
    points: [
      "Built backend for NFT marketplace, enabling smooth user interactions.",
      "Implemented blockchain smart contracts for minting, trading NFTs.",
      "Collaborated on frontend integration and UX enhancement.",
      "Developed secure APIs and optimized platform performance.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Wisper",
    icon: "https://app.wisper.ng/static/media/wisper.6b00d97d.png",
    iconBg: "#E6DEDD",
    // date: "May 2023 - Present",
    points: [
      "Contributed to the enhancement of Wisper's internet service platform, ensuring seamless user experiences.",
      "Collaborated with the team to optimize backend architecture for reliable and efficient data delivery.",
      "Developed APIs for services and reliability.",
      "Supported network stability and uptime.",
    ],
  },
  {
    title: "FullStack Mobile Engineer",
    company_name: "Tinapay",
    icon: tinapay,
    iconBg: "#E6DEDD",
    // date: "May 2023 - Present",
    points: [
      "Contributed to the development and improvement of Tinapay's mobile app backend, ensuring a robust and scalable architecture.",
      "Designed, developed, and maintained APIs that supported seamless interactions between the Tinapay mobile app and backend services..",
      "Worked on both mobile and web backend systems, ensuring a consistent and integrated experience for users across different platforms.",
      "Collaborated with quality assurance teams to conduct thorough testing, identifying and resolving potential issues to ensure the stability and security of the Tinapay mobile app.",
      "Participated in regular code reviews and team discussions to foster a culture of continuous improvement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Invaluable contribution! Your dedication to network reliability has been a game-changer for us.",
    name: "Great",
    designation: "CEO",
    company: "Gsubz Ng",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  // {
  //   testimonial:
  //     "Smart contracts under your guidance have redefined how we approach security and transparency. Truly remarkable work.",
  //   name: "Kola wole",
  //   designation: "IT Personal",
  //   company: "Japaul Nft",
  //   image: "https://randomuser.me/api/portraits/men/6.jpg",
  // },
  {
    testimonial:
      "Remarkable work! Your APIs have elevated our user experience to new heights.",
    name: "Ebuka",
    designation: "PM",
    company: "Wisper Ng",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Smart School Transport API: Efficient Routes & Safety Enhancement",
    description:
      "Engineered a transformative API for a school transport system, optimizing routes, schedules, and real-time tracking. This innovation ensures student safety and punctuality, while providing intuitive interfaces for seamless communication and monitoring.",
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/thexovc/uniben-bus-fare-mobile-server",
  },
  {
    name: "URL Shortener - LinkBud",
    description:
      "Created LinkBud, a user-friendly URL shortener for simplified link management. With an intuitive interface, it streamlines the process of shortening URLs, making sharing and monitoring links convenient and efficient.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: linkbud,
    source_code_link: "https://github.com/thexovc/linkbud-url-shortener-client",
  },
  {
    name: "Node.js-Powered ChatGPT Server: Quantum GPT",
    description:
      "Developed a powerful Node.js-based ChatGPT server, enabling seamless integration of OpenAI's language capabilities into applications. This server solution empowers real-time, interactive communication with the ChatGPT model, offering natural and engaging conversations for a wide range of use cases",
    tags: [
      {
        name: "openai",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://www.searchenginejournal.com/wp-content/uploads/2022/12/what-is-chatgpt-6393027101b3c-sej-760x400.webp",
    source_code_link: "https://github.com/thexovc/quantum-gpt-server",
  },
  {
    name: "NFT Marketplace",
    description:
      "An NFT marketplace rooted in the spirit of Africa. This platform offers a space for creators to share their digital assets, fostering a vibrant community that celebrates culture and innovation. Join us in exploring the intersection of technology and creativity.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "openzeppelin",
        color: "green-text-gradient",
      },
      {
        name: "hardhat",
        color: "pink-text-gradient",
      },
    ],
    image: nft,
    source_code_link: "https://github.com/thexovc/Nft-Market-Place",
  },
];

export { services, technologies, experiences, testimonials, projects };
