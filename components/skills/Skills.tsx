import Image from "next/image";
import { Col, Layout, Row, Space, theme, Typography } from "antd";
import skillsData from "./skills-data";
import Container from "components/container/Container";
import Skill from "./Skill";
import skillsIcon from "public/img/skills-icon.svg";
import styled from "styled-components";
import { device } from "@/utils/device";

const Section = styled.section<{ $bgColor: string }>`
  background-color: ${(props) => props.$bgColor};
  padding: 64px 0px;
  scroll-margin-top: 64px;
  @media ${device.md} {
    padding: 0px;
  }
`;

const SkillsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  gap: 12px;
  @media ${device.md} {
    grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  }
  @media ${device.lg} {
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  }
`;

const { Title } = Typography;
const Skills = () => {
  const { token } = theme.useToken();
  return (
    <Section id="skills" $bgColor={token.colorBgContainer}>
      <Container>
        <Row justify="space-between" align="middle">
          <Col xs={0} md={11}>
            <Image
              src={skillsIcon}
              alt="skills vector"
              height="450"
              style={{
                width: "100%"
              }}
            />
          </Col>
          <Col xs={22} md={11}>
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
            <SkillsList>
              {skillsData.map((skill) => (
                <Skill key={skill.id} name={skill.name} icon={skill.icon} />
              ))}
            </SkillsList>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Skills;
