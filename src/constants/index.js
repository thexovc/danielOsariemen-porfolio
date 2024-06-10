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
  spike,
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
    company_name: "Social Spike Hub ",
    company_link: "https://socialspikehub.com/",
    icon: spike,
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
    company_link: "https://gsubz.com/",
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
    company_link: "https://patosehibox.com/",
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
    company_link: "https://jpgoldcoin.app/",
    icon: "https://www.jpgoldcoin.app/assets/logo-bf2a4dc1.png",
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
    company_link: "https://app.wisper.ng/",
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
    company_link: "https://tinapay.co/",
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
  {
    title: "Backend Engineer",
    company_name: "GACN",
    company_link: "https://www.gacn.com/",
    icon: "https://www.gacn.com/static/media/logo3.ea68878976beba677b68cf7c4c316514.svg",
    iconBg: "#E6DEDD",
    // date: "May 2023 - Present",
    points: [
      "Engineered a dynamic questionnaire system, automating and optimizing customer due diligence processes.",
      "Implemented robust role-based access controls, ensuring granular security measures for sensitive data handling.",
      "Integrated third-party APIs like Calendly and Cloudinary, enhancing functionality and scalability while maintaining data integrity and security.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "DataCoupon",
    company_link: "https://datacoupon.ng/",
    icon: "data:image/png;base64,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",
    iconBg: "#E6DEDD",
    // date: "May 2023 - Present",
    points: [
      "Developed and maintained backend systems for a coupon generation and redemption for the platform.",
      "Optimized database queries and storage strategies to handle large volumes of coupon data efficiently",
      "Collaborated with frontend developers to ensure seamless integration and user experience.",
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
