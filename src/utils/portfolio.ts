// import gamehub from "../assets/game-final.webp";
import gamehub from "../assets/game-transparent.webp";
import trivia from "../assets/trivia-final.webp";
import bridge from "../assets/bridge.webp";
const myText = `
  This website is a minimal clone for <a target="_blank" style="color: #007bff; text-decoration: underline;" href="https://www.rawg.io">Rawg.io</a>. 
  Rawg.io is a community-powered video game discovery platform that offers a comprehensive database of over 350,000 games across multiple platforms. 
  <br><br> This project is made with React, TypeScript, CSS, and Chakra UI. It retrieves games and associated information via the <a href="https://www.rawg.io/api">RAWG API</a>.
`;
const portfolio = [
  {
    name: "Game Discovery Platform",
    image: gamehub,
    techs: ["React", "TypeScript", "Chakra UI", "CSS", "RAWG API"],
    description: myText,
    address: "https://game-discovery-platform.vercel.app/",
    github: "https://github.com/Robel-Alemu/game-discovery-platform",
  },
  {
    name: "Trivia Quiz App",
    image: trivia,
    techs: ["React", "TypeScript", "Chakra UI", "CSS", "Open Triva API"],
    description:
      "Trivia quiz app is a quiz game with many different categories to pick from. It calls upon the 'Open Trivia API' to retrieve questions and answers. The game is built in React with TypeScript, and it utilizes 'Chakra UI', a component library used to create React apps. CSS is also used to style elements.",
    address: "https://trivia-quiz-app-six.vercel.app/",
    github: "https://github.com/Robel-Alemu/Trivia-Quiz-App",
  },
  {
    name: "Bridge The Gap Ethiopia",
    image: bridge,
    techs: ["Wordpress", "Elementor"],
    description:
      "I have had the honor of volunteering my expertise to develop a website for 'Bridge the Gap Ethiopia,' a distinguished nongovernmental organization (NGO) devoted to uplifting the lives of women, children, and youth in Ethiopia.",
    address: "https://bridgethegapethiopia.com/",
    github: "",
  },
  // {
  //   name: "Medi Alert(Emergency Alert)",
  //   image: gamehub,
  //   techs: [
  //     "React Native",
  //     "Node.js",
  //     "Express.js",
  //     "BootStrap",
  //     "PostgreSQL",
  //     "Navigator API",
  //     "Twilo",
  //   ],
  //   description:
  //     "MediAlert is a life-saving mobile application designed to digitalize emergency health cases and connect individuals in need of urgent medical attention with the appropriate resources quickly. The app aims to streamline the emergency response process, reduce response times, and save lives by providing real-time access to medical assistance by sending alerts to health organizations and emergency contacts.",
  //   address: "#",
  // },
  // {
  //   name: "Medi Alert(Emergency Alert)",
  //   image: gamehub,
  //   techs: [
  //     "Next.js",
  //     "Node.js",
  //     "Express.js",
  //     "Chakra UI",
  //     "PostgreSQL",
  //     "Navigator API",
  //   ],
  //   description:
  //     "MediAlert is a life-saving web application designed to digitalize emergency health cases and connect individuals in need of urgent medical attention with the appropriate resources quickly. The app aims to streamline the emergency response process, reduce response times, and save lives by providing real-time access to medical assistance by recieving the alerts sent from individuals with emergency cases",
  //   address: "#",
  // },
  //   {
  //     name: "Student Monitoring System",
  //     image: gamehub,
  //     techs: ["React", "Node.js", "Express.js", "BootStrap", "Firebase", ""],
  //     description:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam accusamus autem itaque blanditiis enim debitis totam facilis reiciendis voluptate aspernatur!",
  //     address: "#",
  //   },
];
export default portfolio;
