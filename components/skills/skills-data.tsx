import Image from "next/image";

import htmlIcon from "public/img/skills/html-icon.svg";
import cssIcon from "public/img/skills/css-icon.svg";
import javascriptIcon from "public/img/skills/javascript-icon.svg";
import reactIcon from "public/img/skills/react-icon.svg";
import NextjsSvgIcon from "@/utils/NextjsSvgIcon";
import antdIcon from "public/img/skills/antd-icon.svg";
import nodejsIcon from "public/img/skills/nodejs-icon.svg";
import nestjsIcon from "public/img/skills/nestjs-icon.svg";
import prismaIcon from "public/img/skills/prisma-icon.svg";
import sqlIcon from "public/img/skills/sql-icon.svg";
import gitIcon from "public/img/skills/git-icon.svg";

const skillsData = [
  {
    id: 1,
    name: "HTML 5",
    icon: <Image src={htmlIcon} alt="html icon" height={30} width={30} />
  },
  {
    id: 2,
    name: "CSS 5",
    icon: <Image src={cssIcon} alt="css icon" height={30} width={30} />
  },
  {
    id: 3,
    name: "Javascript",
    icon: (
      <Image
        src={javascriptIcon}
        alt="javascript icon"
        height={30}
        width={30}
      />
    )
  },
  {
    id: 4,
    name: "ReactJS",
    icon: <Image src={reactIcon} alt="reactjs icon" height={30} width={30} />
  },
  {
    id: 5,
    name: "NextJS",
    icon: <NextjsSvgIcon />
  },
  {
    id: 6,
    name: "Ant Design",
    icon: <Image src={antdIcon} alt="ant design icon" height={30} width={30} />
  },
  {
    id: 7,
    name: "NodeJS",
    icon: <Image src={nodejsIcon} alt="nodejs icon" height={30} width={30} />
  },
  {
    id: 8,
    name: "NestJS",
    icon: <Image src={nestjsIcon} alt="nestjs icon" height={30} width={30} />
  },
  {
    id: 9,
    name: "Prisma",
    icon: <Image src={prismaIcon} alt="prisma icon" height={30} width={30} />
  },
  {
    id: 10,
    name: "SQL",
    icon: <Image src={sqlIcon} alt="sql icon" height={30} width={30} />
  },
  {
    id: 11,
    name: "GIT",
    icon: <Image src={gitIcon} alt="git icon" height={30} width={30} />
  }
];

export default skillsData;
