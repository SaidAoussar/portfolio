import { Row, Col, Space, Divider } from "antd";
import reactjs from "../../assets/img/reactjs.png";
import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import js from "../../assets/img/js.png";
import nodejs from "../../assets/img/nodejs.png";
import expressjs from "../../assets/img/expressjs.png";
import mongodb from "../../assets/img/mongodb.png";
import php from "../../assets/img/php.png";
import laravel from "../../assets/img/laravel.png";
import mysql from "../../assets/img/mysql.png";

import github from "../../assets/img/github.png";
import git from "../../assets/img/git.png";
import "./Skills.css";

const Skill = ({ skill = "Skill", icon = html }) => {
  return (
    <div className="skill">
      <img src={icon} alt={skill} width="48px" height="48px" />
      <h4>{skill}</h4>
    </div>
  );
};

function Skills() {
  const frontEndSkills = [
    { skill: "Html", icon: html },
    { skill: "Css", icon: css },
    { skill: "Javascript", icon: js },
    { skill: "ReactJs", icon: reactjs }
  ];

  const backEndSkills = [
    { skill: "NodeJs", icon: nodejs },
    { skill: "ExpressJs", icon: expressjs },
    { skill: "MongoDB", icon: mongodb },
    { skill: "Php", icon: php },
    { skill: "Laravel", icon: laravel },
    { skill: "MySQL", icon: mysql }
  ];

  const tools = [
    { skill: "Github", icon: github },
    { skill: "Git", icon: git }
  ];

  return (
    <div className="skills" id="skills">
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center" }}
      >
        <h1>Skills</h1>
      </Space>
      <Row style={{ margin: "0px 50px" }}>
        <Col lg={8} style={{ padding: "0px 30px" }}>
          <Divider orientation="left">Front End</Divider>
          <Space wrap>
            {frontEndSkills.map(({ skill, icon }, index) => {
              return <Skill key={index} skill={skill} icon={icon} />;
            })}
          </Space>
        </Col>
        <Col lg={8} style={{ padding: "0px 30px" }}>
          <Divider orientation="left">Back End</Divider>
          <Space wrap>
            {backEndSkills.map(({ skill, icon }, index) => {
              return <Skill key={index} skill={skill} icon={icon} />;
            })}
          </Space>
        </Col>
        <Col lg={8} style={{ padding: "0px 30px" }}>
          <Divider orientation="left">Tools</Divider>
          <Space wrap>
            {tools.map(({ skill, icon }, index) => {
              return <Skill key={index} skill={skill} icon={icon} />;
            })}
          </Space>
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
