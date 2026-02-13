import { Category } from "./models/category";
import { Project } from "./models/project";
import jaddahImage from "@/public/images/jaddah-image.jpg";

const MAIN_NAVIGATION: string[] = [
  "Home",
  "About",
  "Services",
  "Projects",
  "Resume",
];

const CATEGORIES = [
  new Category("Mobile Apps", [
    new Project(
      jaddahImage,
      "Historic Jeddah",
      "Mobile App",
      "https://play.google.com/store/apps/details?id=sa.ay.jhd"
    ),
    new Project(
      null,
      "SimSim",
      "Mobile App",
      "https://play.google.com/store/apps/details?id=com.simsim.android"
    ),
    new Project(
      null,
      "Foz",
      "Mobile App",
      "https://play.google.com/store/search?q=foz&c=apps"
    ),
    new Project(
      null,
      "Jawhar",
      "Mobile App",
      "https://play.google.com/store/apps/details?id=com.hexa.jawharstores"
    ),
    new Project(
      null,
      "Zelter",
      "Mobile App",
      "https://play.google.com/store/apps/details?id=com.zelter.app"
    ),
    new Project(
      null,
      "World Mall",
      "Mobile App",
      "https://play.google.com/store/apps/details?id=com.app.world.ma"
    ),
    new Project(
      null,
      "Water",
      "Mobile App",
      "https://play.google.com/store/apps/details?id=com.waterq.app"
    ),
    new Project(null, "SkipperFly", "Mobile App/Flutter", "/"),
  ]),
  new Category("Web Apps", [
    new Project(
      jaddahImage,
      "Historic Jeddah",
      "React/Nextjs",
      "https://www.visitalbalad.com/"
    ),
    new Project(
      null,
      "Forever",
      "React/Nextjs",
      "https://foreverbuy.in"
    ),
  ]),
];

const SERVICES = [
  {
    title: "Front-End Development (React / Next.js)",
    description:
      "Building modern, high-performance web applications using React and Next.js with clean, maintainable code and scalable structure.",
  },
  {
    title: "Responsive UI & Tailwind CSS",
    description:
      "Implementing pixel-perfect, responsive user interfaces using Tailwind CSS that look great and work smoothly across all screen sizes.",
  },
  {
    title: "State Management & API Integration",
    description:
      "Managing complex state with Redux Toolkit and React Query, and integrating RESTful APIs using Axios or Fetch for reliable data flow.",
  },
  {
    title: "Dashboards & Web Apps",
    description:
      "Creating interactive dashboards and web apps tailored to business needs, with clear data visualization and intuitive user experience.",
  },
  {
    title: "Performance Optimization",
    description:
      "Improving loading speed, bundle size, and overall performance using best practices in React, Next.js optimization, and code splitting.",
  },
  {
    title: "Code Refactoring & Bug Fixing",
    description:
      "Refactoring legacy front-end code, fixing UI/logic bugs, and aligning the project with modern standards and best practices.",
  },
];

export { MAIN_NAVIGATION, CATEGORIES, SERVICES };
