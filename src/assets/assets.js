import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from "../assets/profileImg.avif";
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["React.js", "Tailwind CSS", "Bootstrap", "JavaScript"],
  },
  {
    title: "Backend Development",
    icon: FaServer,

    description: "Creating robust server-side applications and RESTful APIs.",
    tags: ["Aspiring Backend Developer"],
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub", "VS Code", "WordPress CMS"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description: " ",
    tags: [""],
  },
  {
    title: "Mobile Development",
    icon: FaMobileAlt,
    description: "",
    tags: [""],
  },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    description: " ",
    tags: [""],
  },
];



export const projects = [
  {
    title: "University Registration Portal",
    description:
      "A modern and fully responsive registration portal developed using Tailwind CSS and JavaScript. This project streamlines the registration process and provides a seamless user experience with real-time feedback.",
    image: projectImg1,
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "To-Do List",
    description:
      "A sleek and functional task management application designed to help users organize their daily activities. This project focuses on DOM manipulation and provides a smooth, clutter-free user experience with a modern dark-themed interface.",
    image: projectImg2,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Quick App",
    description:
      "A dynamic web-based quiz application that provides an engaging user experience with real-time feedback. It features a sleek dark UI and handles question logic efficiently using JavaScript.",
    image: projectImg3,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Smart Expense Tracker",
    description:
      "A functional and user-friendly finance management tool designed to track daily spending and manage budgets effectively. This project focuses on handling numerical data and real-time UI synchronization using JavaScript.",
    image: projectImg5,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Employee Management System (CRUD)",
    description:
      "A comprehensive management tool designed to handle employee data efficiently. This project demonstrates the core principles of data management by allowing users to perform full CRUD operations through a clean and intuitive interface.",
    image: projectImg6,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
];


export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
