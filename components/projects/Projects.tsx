import { Layout, Space, Typography } from "antd";
import Container from "components/container/Container";
import styled from "styled-components";
import ProjectsList from "./ProjectsList";

const Section = styled.section`
  padding: 48px 0px;
  scroll-margin-top: 64px;
`;
const { Content } = Layout;
const { Title } = Typography;
const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <Space
          direction="horizontal"
          style={{
            width: "100%",
            justifyContent: "center",
            marginBottom: "14px"
          }}
        >
          <Title level={2}>My Projects</Title>
        </Space>
        <ProjectsList />
      </Container>
    </Section>
  );
};

export default Projects;
