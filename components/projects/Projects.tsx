import { Layout, Space, Typography } from "antd";
import Container from "components/container/Container";
import ProjectsList from "./ProjectsList";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const Projects = () => {
  return (
    <Content id="projects" style={{ padding: "48px 0px" }}>
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
    </Content>
  );
};

export default Projects;
