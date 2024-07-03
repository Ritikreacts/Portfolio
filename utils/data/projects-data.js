import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Social media app",
    description:
      "A social media app that let's you post pictures and blogs with real-time update, searching and filtering and comes with infinite scroll along with virtual scroll.",
    tools: [
      "Express",
      "MongoDB",
      "mongoose",
      "React",
      "Node Mailer",
      "Joi",
      "JWT",
      "bcrypt",
      "socket.io",
      "MUI",
    ],
    role: "MERN Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Real Time Chat App",
    description:
      "I Developed a chat application, where you can join random room to chat with people in the same room. ",
    tools: ["React JS", "Socket.io", "Express JS", "TypeScript"],
    role: "MERN Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Company Management",
    description:
      "I developed the backend of a company management system. Where you can add multiple companies and their associate employees with their reporting directory.",
    tools: ["Express JS", "JWT", "Node Mailer", "bcrypt"],
    code: "",
    demo: "",
    image: ayla,
    role: "Backend Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
