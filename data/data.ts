import { TbBrowserCheck } from "react-icons/tb";
import { AiOutlineCode, AiOutlineCrown } from "react-icons/ai";
import { GrPlan } from "react-icons/gr";
import { IconType } from "react-icons";

type skillSet = {
  title: string;
  skills: string[];
};

class Role {
  title: string;
  Icon: IconType = AiOutlineCode;
  description: string;
  skills: skillSet[] = [];
  constructor(
    title: string,
    Icon: IconType,
    description: string,
    skills?: skillSet[]
  ) {
    this.title = title;
    this.Icon = Icon;
    this.description = description;
    if (skills) {
      this.skills = skills;
    }
  }
}

export const roles = [
  new Role(
    "Frontend Developer",
    TbBrowserCheck,
    "Building user interfaces for the web.",
    [
      {
        title: "Things I use:",
        skills: [
          "TypeScript",
          "JavaScript",
          "HTML",
          "React",
          "Next.js",
          "CSS, SASS",
          "Tailwind CSS",
          "CSS-in-JS",
          "Styled Components",
          "Material UI, Chakra UI",
          "Bootstrap",
          "Storybook, Jest, Cypress",
          "Redux",
          "GSAP/Motion Framer",
        ],
      },
    ]
  ),
  new Role("Backend Developer", AiOutlineCode, "Building APIs and services.", [
    {
      title: "Things I use:",
      skills: [
        "TypeScript",
        "Python",
        "PHP",
        "Node.js",
        "Express",
        "REST, GraphQL",
        "Apollo",
        "MySQL, PostgreSQL",
        "MongoDB",
        "AWS",
        "Linux",
        "Apache, Nginx",
      ],
    },
  ]),
  new Role(
    "Tech Leadership",
    AiOutlineCrown,
    "Getting the most out of teams with soft skills.",
    [
      {
        title: "The good stuff:",
        skills: [
          "Agile",
          "Solution Architecture",
          "System Design",
          "Project Management",
          "Teamwork",
        ],
      },
    ]
  ),
];

class Project {
  title: string;
  description: string;
  image: string;
  link: string;
  constructor(title: string, description: string, image: string, link: string) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.link = link;
  }
}

export const projects = [
  new Project(
    "PVI - Watchdog",
    "A microsite for PVI build with Next.js, ChakraUI and deployed on Vercel.",
    "/pvi-watchdog.jpg",
    "https://pvi-watchdog.vercel.app/"
  ),
  new Project(
    "VisAid",
    "A web application for Alfred Health built with Next.js, MaterialUI, Algolia, MySQL, AWS, and deployed on Digital Ocean.",
    "/visaid.jpg",
    "https://visaid.sail1261.com/"
  ),
  new Project(
    "Ascham School Blueprint",
    "A new website for Ascham School's fundraising initiative built with Next.js, Typescript, Tailwind CSS, and deployed on Vercel.",
    "/ascham-blueprint.jpg",
    "https://ascham-blueprint-static.vercel.app"
  ),
  new Project(
    "Shepparton Villages",
    "A new website for Shepparton Villages built with Next.js, MaterialUI, Typescript, Headless Wordpress and deployed on Vercel.",
    "/shepp-villages.jpg",
    "https://sheppvillages.com.au"
  ),
  new Project(
    "Rosebank",
    "A new website for Rosebank built with Next.js, MaterialUI, Algolia, Strapi CMS and deployed on Vercel.",
    "/rosebank.jpg",
    "https://www.rosebank.nsw.edu.au"
  ),
  new Project(
    "Big Outcomes",
    "A new website for the Big Outcomes project, a national screening program for type 1 diabetes built with Next.js, MaterialUI, Headless Wordpress and deployed on Oracle Cloud.",
    "/big-outcomes.jpg",
    "https://www.kidsdiabetesscreen.com.au/"
  ),
  new Project(
    "ReelozInd! Teaching Resource",
    "A teaching resource for ReelozInd! built with Next.js, MaterialUI, and deployed on Vercel.",
    "/reelozind.jpg",
    "https://library.reelozind.com/"
  ),
  new Project(
    "Australian Asthma Handbook",
    "A new website for the Australian Asthma Handbook built with Next.js, MaterialUI, Algolia, Headless Wordpress and deployed on Vercel.",
    "/asthma-handbook.jpg",
    "https://www.asthmahandbook.org.au/"
  ),
  new Project(
    "Alluvium",
    "A new website for Alluvium built with Next.js, MaterialUI, and deployed on AWS.",
    "/alluvium.jpg",
    "https://alluvium.com.au/"
  ),
];
