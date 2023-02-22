import Image from "next/image";
import { Col, Layout, Row, Space, theme, Typography } from "antd";
import skillsData from "./skills-data";
import Container from "components/container/Container";
import Skill from "./Skill";
import skillsIcon from "public/img/skills-icon.svg";
import styled from "styled-components";

const Section = styled.section<{ $bgColor: string }>`
  background-color: ${(props) => props.$bgColor};
`;

const { Title } = Typography;
const Skills = () => {
  const { token } = theme.useToken();
  return (
    <Section $bgColor={token.colorBgContainer}>
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
              {skillsData.map((skill) => (
                <Skill key={skill.id} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Skills;
