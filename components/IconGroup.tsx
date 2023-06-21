"use client";
import { IconType, IconContext } from "react-icons";
import {
  SiMui,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";

const icons = [
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
] as IconType[];

const contactIcons = [
  {
    Icon: SiGithub,
    link: "https://github.com/veryserious",
  },
  {
    Icon: SiLinkedin,
    link: "https://www.linkedin.com/in/james-breen-463a1963/",
  },
];

export default function IconGroup({ variant }: { variant: string }) {
  return (
    <IconContext.Provider
      value={{
        className: "text-3xl text-purple-800 dark:text-purple-400 ",
      }}
    >
      <div
        className={`flex flex-row items-center flex-wrap ${
          variant === "stack" ? "gap-12" : "gap-4"
        }`}
      >
        {variant === "stack" && icons.map((Icon, i) => <Icon key={i} />)}
        {variant === "contact" &&
          contactIcons.map((icon, i) => (
            <a key={i} href={icon.link} target="_blank" rel="noreferrer">
              <icon.Icon className="hover:text-purple-600" />
            </a>
          ))}
      </div>
    </IconContext.Provider>
  );
}
