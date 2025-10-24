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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "IT Support & Systems Technician",
    icon: web,
  },
  {
    title: "Frontend Developer (Freelance & Remote)",
    icon: mobile,
  },
  {
    title: "Digital Marketing Associate",
    icon: backend,
  },
  {
    title: "Business Manager",
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
    title: "IT Support & Systems Technician ",
    company_name: "Safaricom",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Skills: Networking, troubleshooting, customer support, system deployment.",
      "Provided first-level tech support for over 200 clients.",
      "Installed and configured computer systems and software updates.",
      "Worked with LAN/WAN setups, routers, and firewalls.",
      "Documented tech issues and optimized response procedures.",
      "Tools used: Windows Server, Linux CLI, Cisco Packet Tracer.",
    ],
  },
  {
    title: "Frontend Developer (Freelance & Remote)",
    company_name: "Upwork / Fiverr",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Skills: React.js, JavaScript (ES6+), TailwindCSS, Git, Responsive UI/UX Design",
      "Built and maintained websites and landing pages for small businesses.",
      "Collaborated with designers to implement modern, responsive designs.",
      "Integrated APIs and designed dynamic user interfaces.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Worked directly with clients across different time zones, managing revisions and project deliveries.",
    ],
  },
  {
    title: "Digital Marketing Associate",
    company_name: "Orbit Media Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2022 - Aug 2023",
    points: [
      "Skills: SEO, Google Analytics, Content Writing, Social Media Strategy",
      "Managed company’s online campaigns and increased engagement by 60%.",
      "Designed and implemented automated email marketing systems.",
      "Monitored analytics and reported monthly KPIs.",
      "Created blog content optimized for search engines.",
    ],
  },
  {
    title: "Business Manager",
    company_name: "FairPrice Enterprises Ltd",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - May 2024",
    points: [
      "Managed a diverse team across sales, logistics, and customer relations",
      "Deployed data-driven decision-making tools using Excel, CRM software, and Power BI to track sales performance and consumer trends.",
      "Oversaw financial reporting, budgeting, and quarterly forecasts.",
      "Spearheaded strategic planning and daily operations for a multi-sector business unit, driving a 35% revenue growth",
      "Key Skills: Business Strategy · Operations Management Negotiation · CRM Systems · Team Management · Market Expansion",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Joseph proved me wrong.",
    name: "Sara Lee",
    designation: "Operations Director",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Joseph helped us bring our small business online from scratch. His ability to simplify tech and make it work for real business goals is incredible. Highly professional and future-focused.",
    name: "Chris Joshua",
    designation: "Sales Representative",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Joseph is a results-driven leader with an exceptional grasp of both people and numbers. His strategies consistently turned goals into tangible growth!",
    name: "Mary Wanjiru",
    designation: "CFO",
    company: "FairPrice Enterprises Ltd",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sales Insight Dashboard",
    description:
      "An interactive analytics platform that visualizes sales trends and performance metrics, helping businesses make informed decisions with real-time data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://onedrive.live.com/:w:/g/personal/3D5D06C9DDF5FDBC/ERqnHgpFspZPkCrwKZuNIHMBfjsFi-wDQg0iykCViCZuXQ?resid=3D5D06C9DDF5FDBC!s0a1ea71ab2454f96902af0299b8d2073&ithint=file%2Cdocx&e=4%3Arl3G3I&sharingv2=true&fromShare=true&at=9&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3cvYy8zZDVkMDZjOWRkZjVmZGJjL0VScW5IZ3BGc3BaUGtDcndLWnVOSUhNQmZqc0ZpLXdEUWcwaXlrQ1ZpQ1p1WFE_ZT00OnJsM0czSSZzaGFyaW5ndjI9dHJ1ZSZmcm9tU2hhcmU9dHJ1ZSZhdD05",
  },
  {
    name: "3D Portfolio Experience",
    description:
      "A fully interactive personal portfolio built with 3D models and smooth animations to showcase skills, projects, and achievements in an engaging way.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://onedrive.live.com/:w:/g/personal/3D5D06C9DDF5FDBC/ERqnHgpFspZPkCrwKZuNIHMBfjsFi-wDQg0iykCViCZuXQ?resid=3D5D06C9DDF5FDBC!s0a1ea71ab2454f96902af0299b8d2073&ithint=file%2Cdocx&e=4%3Arl3G3I&sharingv2=true&fromShare=true&at=9&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3cvYy8zZDVkMDZjOWRkZjVmZGJjL0VScW5IZ3BGc3BaUGtDcndLWnVOSUhNQmZqc0ZpLXdEUWcwaXlrQ1ZpQ1p1WFE_ZT00OnJsM0czSSZzaGFyaW5ndjI9dHJ1ZSZmcm9tU2hhcmU9dHJ1ZSZhdD05",
  },
  {
    name: "Market Vision",
    description:
      "A market analytics web app that monitors business trends and forecasts performance through data visualization and AI insights.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "chartjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://onedrive.live.com/:w:/g/personal/3D5D06C9DDF5FDBC/ERqnHgpFspZPkCrwKZuNIHMBfjsFi-wDQg0iykCViCZuXQ?resid=3D5D06C9DDF5FDBC!s0a1ea71ab2454f96902af0299b8d2073&ithint=file%2Cdocx&e=4%3Arl3G3I&sharingv2=true&fromShare=true&at=9&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3cvYy8zZDVkMDZjOWRkZjVmZGJjL0VScW5IZ3BGc3BaUGtDcndLWnVOSUhNQmZqc0ZpLXdEUWcwaXlrQ1ZpQ1p1WFE_ZT00OnJsM0czSSZzaGFyaW5ndjI9dHJ1ZSZmcm9tU2hhcmU9dHJ1ZSZhdD05",
  },
];

export { services, technologies, experiences, testimonials, projects };
