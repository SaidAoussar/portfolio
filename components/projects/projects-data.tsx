import Image from "next/image";
import { ReactElement } from "react";
import { GithubOutlined, YoutubeOutlined } from "@ant-design/icons";
import htmlIcon from "public/img/skills/html-icon.svg";
import cssIcon from "public/img/skills/css-icon.svg";
import javascriptIcon from "public/img/skills/javascript-icon.svg";
import reactIcon from "public/img/skills/react-icon.svg";
import antdIcon from "public/img/skills/antd-icon.svg";
import nestjsIcon from "public/img/skills/nestjs-icon.svg";
import prismaIcon from "public/img/skills/prisma-icon.svg";
import postgresIcon from "public/img/skills/postgres-icon.svg";

export interface IProject {
  id: number;
  title: string;
  description: string;
  links: ILink[];
  tools: ITool[];
  pictures: string[];
}

interface ILink {
  id: number;
  icon: ReactElement;
  text: string;
  link: string;
}

interface ITool {
  id: number;
  icon: ReactElement;
}
const projectsData: IProject[] = [
  {
    id: 1,
    title: "DevBlog Frontend",
    description:
      "DevBlog is a practice project blog that aims to clone some of the design and functionality of the popular developer community website dev.to. I built this project to improve my skills in web development by creating a single page application",
    links: [
      {
        id: 1,
        icon: <GithubOutlined />,
        text: "code source",
        link: "https://github.com/SaidAoussar/devBlog-frontend"
      },
      {
        id: 2,
        icon: <YoutubeOutlined />,
        text: "view demo",
        link: "https://youtu.be/0yXh7fpDznQ"
      }
    ],
    tools: [
      {
        id: 1,
        icon: <Image src={htmlIcon} width="40" alt="html icon" />
      },
      {
        id: 2,
        icon: <Image src={cssIcon} width="40" alt="css icon" />
      },
      {
        id: 3,
        icon: <Image src={javascriptIcon} width="40" alt="javascript icon" />
      },
      {
        id: 4,
        icon: <Image src={reactIcon} width="40" alt="reactjs icon" />
      },
      {
        id: 5,
        icon: <Image src={antdIcon} width="40" alt="ant design icon" />
      }
    ],
    pictures: [
      "/img/projects/devblog-frontend/home-page.webp",
      "/img/projects/devblog-frontend/home-page-dark.webp",
      "/img/projects/devblog-frontend/login-page.webp",
      "/img/projects/devblog-frontend/readinglist-page.webp",
      "/img/projects/devblog-frontend/tags-page.webp"
    ]
  },
  {
    id: 2,
    title: "DevBlog Backend",
    description:
      "The DevBlog backend serves as the RESTful API for the DevBlog frontend",
    links: [
      {
        id: 1,
        icon: <GithubOutlined />,
        text: "code source",
        link: "https://github.com/SaidAoussar/devBlog-backend.git"
      },
      {
        id: 2,
        icon: <YoutubeOutlined />,
        text: "view demo",
        link: "https://youtu.be/0yXh7fpDznQ"
      }
    ],
    tools: [
      {
        id: 1,
        icon: <Image src={nestjsIcon} width="40" alt="nestjs icon" />
      },
      {
        id: 2,
        icon: <Image src={prismaIcon} width="40" alt="prisma icon" />
      },
      {
        id: 3,
        icon: <Image src={postgresIcon} width="40" alt="postgressql icon" />
      }
    ],
    pictures: [
      "/img/projects/devblog-backend/routes.webp",
      "/img/projects/devblog-backend/posts-route.webp"
    ]
  }
];

export default projectsData;
