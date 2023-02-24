import Link from "next/link";
import { Space, Typography, theme, Button } from "antd";
import Container from "components/container/Container";
import styled from "styled-components";
import ProjectsList from "./ProjectsList";

const Section = styled.section<{ $bgColor: string }>`
  padding: 48px 0px;
  scroll-margin-top: 64px;
  background-color: ${(props) => props.$bgColor};
`;
const { Title } = Typography;
const Projects = () => {
  const { token } = theme.useToken();
  return (
    <Section id="projects" $bgColor={token.colorBgLayout}>
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
        <Space
          direction="horizontal"
          style={{ width: "100%", justifyContent: "center", marginTop: "24px" }}
        >
          <Link href="/projects/#allprojects">
            <Button type="primary" size="large">
              See More
            </Button>
          </Link>
        </Space>
      </Container>
    </Section>
  );
};

export default Projects;
