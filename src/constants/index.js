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
    title: "Senior Software Engineer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Mobile Engineer",
    icon: mobile,
  },
  {
    title: "Blockchain Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "NestJS",
    icon: nest,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    name: "RabbitMQ",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Senior Mobile Engineer",
    company_name: "Babelos (Muta App)",
    company_link: "https://babelos.com/",
    icon: "/work/babelos.webp",
    iconBg: "#E6DEDD",
    date: "June 2024 - Present",
    points: [
      "Lead engineer for Muta, a gamified language learning platform built with React Native (Expo).",
      "Designed scalable UI architecture and reusable components improving feature velocity.",
      "Implemented real-time lesson updates, streak systems, leaderboards, and progress tracking.",
      "Integrated backend APIs and optimized client-side caching for thousands of concurrent learners.",
    ],
  },
  {
    title: "Full-Stack Engineer",
    company_name: "Writagent",
    company_link: "https://writagent.com/",
    icon: "/work/writagent.jpeg",
    iconBg: "#E6DEDD",
    date: "December 2023 - August 2024",
    points: [
      "Built and maintained complex backend services using NestJS, microservices, Kubernetes, and RabbitMQ.",
      "Architected end-to-end AI-driven workflows using OpenAI & LangChain.",
      "Designed dashboards, interfaces, and admin tools with React.js and TypeScript.",
      "Implemented PostgreSQL data structures and optimized heavy and distributed workloads.",
      "Automated onboarding, verification, and reporting workflows—improving operational efficiency by 70%.",
      "Led testing strategy (unit, integration, E2E) ensuring code reliability.",
    ],
  },
  {
    title: "Backend Engineer",
    company_name: "MuvmentNG",
    company_link: "https://muvment.ng/",
    icon: "/work/muvment.webp",
    iconBg: "#E6DEDD",
    date: "September 2023 - June 2024",
    points: [
      "Built a scalable backend in NestJS and MongoDB for a vehicle rental system.",
      "Developed microservices handling bookings, verification, and payment workflows.",
      "Optimized API performance and automated host verification (40% faster onboarding).",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Thumb and Pin",
    company_link: "https://thumbandpin.com/",
    icon: "/work/thumbandpin.png",
    iconBg: "#E6DEDD",
    date: "April 2024 - January 2025",
    points: [
      "Developed and maintained a fintech app supporting payments and virtual cards.",
      "Integrated biometric authentication and improved API response times by 30%.",
      "Collaborated with backend teams on API schema improvements and testing.",
    ],
  },
  {
    title: "Blockchain Engineer",
    company_name: "Japaul",
    company_link: "https://jpgoldcoin.app/",
    icon: "/work/japaul.svg",
    iconBg: "#E6DEDD",
    date: "March 2023 - September 2024",
    points: [
      "Designed and deployed smart contracts and cross-chain token bridge (Solana ↔ Ethereum).",
      "Performed gas optimization, audits, and stability improvements to ensure secure transactions.",
      "Built backend for NFT marketplace, enabling smooth user interactions.",
      "Collaborated on frontend integration and UX enhancement.",
    ],
  },
  {
    title: "Lead Backend Developer",
    company_name: "Gas Aggregator Company Nigeria (GACN)",
    company_link: "https://www.gacn.com/",
    icon: "https://www.gacn.com/static/media/logo3.ea68878976beba677b68cf7c4c316514.svg",
    iconBg: "#E6DEDD",
    date: "December 2022 - April 2023",
    points: [
      "Built automated onboarding, due diligence, and gas request workflows with NestJS.",
      "Integrated payment systems and external scheduling tools like Calendly.",
      "Implemented CMS capabilities using Sanity for internal teams.",
      "Engineered a dynamic questionnaire system, automating and optimizing customer due diligence processes.",
      "Implemented robust role-based access controls, ensuring granular security measures for sensitive data handling.",
    ],
  },
  {
    title: "Senior Full Stack Engineer",
    company_name: "Tinapay",
    company_link: "https://tinapay.co/",
    icon: tinapay,
    iconBg: "#E6DEDD",
    date: "January 2022 - October 2022",
    points: [
      "Built and optimized React.js and React Native features, boosting performance by 35%.",
      "Developed APIs using NestJS and Express.js with PostgreSQL and MongoDB.",
      "Ensured synchronization between mobile and web platforms with 95% uptime.",
      "Contributed to the development and improvement of Tinapay's mobile app backend, ensuring a robust and scalable architecture.",
      "Designed, developed, and maintained APIs that supported seamless interactions between the Tinapay mobile app and backend services.",
    ],
  },
  {
    title: "Senior Full-Stack Developer",
    company_name: "Black Diamond",
    company_link: "https://blackdiamond.com/",
    icon: "/work/blackdiamond.png",
    iconBg: "#000000",
    date: "February 2021 - December 2021",
    points: [
      "Developed a responsive React.js interface with Tailwind CSS, raising user engagement by 30%.",
      "Designed backend payment architecture using NestJS and Stripe.",
      "Improved checkout and booking flows, reducing drop-off rates.",
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
    name: "Writagent - AI Writing SaaS",
    description:
      "Built a comprehensive AI writing SaaS platform using NestJS, Kubernetes, RabbitMQ, and OpenAI. Architected end-to-end AI-driven workflows with LangChain, designed intuitive dashboards and admin tools with React.js and TypeScript, and automated onboarding and reporting workflows improving operational efficiency by 70%.",
    tags: [
      {
        name: "nestjs",
        color: "blue-text-gradient",
      },
      {
        name: "kubernetes",
        color: "green-text-gradient",
      },
      {
        name: "rabbitmq",
        color: "pink-text-gradient",
      },
      {
        name: "openai",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    source_code_link: "https://github.com/thexovc",
  },
  {
    name: "Muta (Babelos) - Gamified Language Learning",
    description:
      "Lead engineer for Muta, a gamified language learning platform built with React Native (Expo). Designed scalable UI architecture with reusable components, implemented real-time lesson updates, streak systems, leaderboards, and progress tracking. Optimized client-side caching for thousands of concurrent learners.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    source_code_link: "https://github.com/thexovc",
  },
  {
    name: "Tinapay - Fintech Platform",
    description:
      "Senior Full Stack Engineer for Tinapay, a fintech platform with automated transactions, reporting, and mobile/web synchronization. Built and optimized React.js and React Native features boosting performance by 35%, developed APIs using NestJS and Express.js with PostgreSQL and MongoDB, ensuring 95% uptime.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "green-text-gradient",
      },
      {
        name: "nestjs",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: tinapay,
    source_code_link: "https://github.com/thexovc",
  },
  {
    name: "Thumb and Pin - Fintech App",
    description:
      "Developed and maintained a fintech app supporting payments and virtual cards. Integrated biometric authentication and improved API response times by 30%. Collaborated with backend teams on API schema improvements and comprehensive testing strategies.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "biometric",
        color: "green-text-gradient",
      },
      {
        name: "fintech",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    source_code_link: "https://github.com/thexovc",
  },
  {
    name: "Black Diamond - Booking Platform",
    description:
      "Senior Full-Stack Developer for Black Diamond, a booking platform with Stripe integration. Developed responsive React.js interface with Tailwind CSS raising user engagement by 30%, designed backend payment architecture using NestJS and Stripe, and improved checkout and booking flows reducing drop-off rates.",
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
        name: "stripe",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    source_code_link: "https://github.com/thexovc",
  },
  {
    name: "NFT Marketplace",
    description:
      "An NFT marketplace with blockchain integration. Designed and deployed smart contracts and cross-chain token bridge (Solana ↔ Ethereum), performed gas optimization and audits, and built backend for NFT marketplace enabling smooth user interactions.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "blockchain",
        color: "green-text-gradient",
      },
      {
        name: "ethereum",
        color: "pink-text-gradient",
      },
      {
        name: "solana",
        color: "blue-text-gradient",
      },
    ],
    image: nft,
    source_code_link: "https://github.com/thexovc/Nft-Market-Place",
  },
];

export { services, technologies, experiences, testimonials, projects };
