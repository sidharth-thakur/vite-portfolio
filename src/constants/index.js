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
  meta,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  react,
  java_logo,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    title: "Real-Time Chatting App",
    company_name: "MERN",
    icon: react,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "User registration and login with secure authentication mechanisms..",
      "Design and develop a user-friendly chat interface with components for conversations, messages, and user profiles.",
      "Consider using a UI framework or library for a consistent and responsive design.",
      "Integrate a real-time messaging library or WebSocket for instant message updates. Display incoming messages in real-time without page refresh.",
    ],
  },
  {
    title: "Food Ordering website",
    company_name: "Javascript",
    icon: java_logo,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Add search functionality to help users find specific items. Implement filters based on categories, dietary preferences, or price range.",
      "Use JavaScript event listeners to handle user interactions like button clicks and form submissions.",
      "Design visually appealing and responsive layouts using CSS. Ensure your website is mobile-friendly with responsive design techniques.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Face recognition web app",
    company_name: "Python",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Implement user registration and login features for secure access to the face recognition functionality.",
      "Utilize the browser's webcam access through technologies like WebRTC to capture user images.",
      "Select a suitable JavaScript library or API for face recognition (e.g., face-api.js, OpenCV.js, Microsoft Azure Face API).",
      "Integrate face recognition algorithms to identify individuals based on their facial features. Compare detected faces with a database of known faces.",
    ],
  },
  {
    title: "Quiz web app",
    company_name: "HTML,CSS,Javascript",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Design an intuitive and visually appealing user interface for the app. Create layouts for quiz questions, options, and score tracking.",
      "Design a scoring mechanism that awards points based on correct answers and deducts for incorrect ones.",
      "Calculate and display the user's score in real-time.",
      "Create a database or API to store and retrieve quiz questions and answers. Organize questions by category and difficulty level.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Real-Time Chatting App",
    description:
      "A real-time React chat app is a web application built using the React.js library that enables users to engage in instant text-based conversations with one another.",
    tags: [
      {
        name: "MondoDb",
        color: "blue-text-gradient",
      },
      {
        name: "Expressjs",
        color: "green-text-gradient",
      },
      {
        name: "Reactjs",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Food Ordering website",
    description:
      "A food ordering website is an online platform that allows users to browse, select, and order a variety of dishes and cuisines from local restaurants and eateries.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Face recognition web app",
    description:
      "A face recognition web app is a digital application that utilizes advanced facial recognition technology to identify and authenticate individuals based on their facial.",
    tags: [
      {
        name: "react",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
