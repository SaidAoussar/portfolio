import { ReactNode } from "react";
import Image from "next/image";
import { Col, Layout, Row, Space, theme, Typography } from "antd";
import { css } from "@emotion/css";
import skillsIcon from "public/img/skills-icon.svg";
import Container from "components/container/Container";

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

const skills = [
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

const useStyles = () => {
  const { token } = theme.useToken();
  return {
    content: css`
      background-color: ${token.colorBgContainer};
    `,
    skill: css`
      display: flex;
      align-items: center;
      padding: 8px;
      border-radius: 8px;
      border: 1px solid ${token.colorBorderSecondary};
    `,
    skillIcon: css`
      margin-right: 12px;
      border-radius: 6px;
    `
  };
};

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const Skills = () => {
  const { token } = theme.useToken();
  const styles = useStyles();
  return (
    <Content className={styles.content}>
      <Container>
        <Row justify="space-between" align="middle">
          <Col span={11}>
            <Image
              src={skillsIcon}
              alt="skills vector"
              height="450"
              style={{
                width: "100%"
              }}
            />
          </Col>
          <Col span={11}>
            <Space
              direction="horizontal"
              style={{
                width: "100%",
                justifyContent: "center",
                marginBottom: "8px"
              }}
            >
              <Title level={2}>My Teck Stack</Title>
            </Space>
            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(10rem, 1fr))",
                gap: "12px"
              }}
            >
              {skills.map((skill) => (
                <Skill key={skill.id} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Content>
  );
};

const Skill = ({ name, icon }: { name: string; icon: ReactNode }) => {
  const styles = useStyles();
  return (
    <div className={styles.skill}>
      <div className={styles.skillIcon}>{icon}</div>
      <Paragraph
        style={{
          marginBottom: "0px",
          fontSize: "16px",
          fontWeight: "500"
        }}
      >
        {name}
      </Paragraph>
    </div>
  );
};

export default Skills;
