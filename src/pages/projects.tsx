import { Divider, Tabs as TabsAnt, Typography, theme } from "antd";
import Container from "components/container/Container";
import projectsData from "components/projects/projects-data";
import Project from "components/projects/Project";
import { Fragment } from "react";
import styled from "styled-components";

const tags = [
  {
    id: "1",
    name: "All",
    items: ["DevBlog Frontend", "DevBlog Backend"]
  },
  {
    id: "2",
    name: "HTML/CSS",
    items: ["DevBlog Frontend"]
  },
  {
    id: "3",
    name: "ReactJS/NextJS",
    items: ["DevBlog Frontend"]
  },
  {
    id: "4",
    name: "NestJs",
    items: ["DevBlog Backend"]
  }
];

const Section = styled.section<{ $bgColor: string }>`
  background-color: ${(props) => props.$bgColor};
  padding: 64px 0px;
  margin-top: 64px;
  scroll-margin-top: 64px;
`;

const Tabs = styled(TabsAnt)`
  && {
    .ant-tabs-nav {
      margin-bottom: 32px;
    }
  }
`;

const { Text } = Typography;

export default function Projects() {
  const { token } = theme.useToken();
  return (
    <Section id="allprojects" $bgColor={token.colorBgContainer}>
      <Container>
        <Tabs
          defaultActiveKey="1"
          centered
          animated={{ inkBar: true, tabPane: true }}
          items={tags.map((tag) => {
            return {
              label: (
                <Text strong style={{ color: "inherit" }}>
                  {tag.name}
                </Text>
              ),
              key: tag.id,
              children: tag.items.map((item, index) => {
                const project = projectsData.find((p) => item === p.title);
                if (project) {
                  return (
                    <Fragment key={project.id}>
                      <Project project={project} />
                      {tag.items.length !== index + 1 && <Divider />}
                    </Fragment>
                  );
                }
              })
            };
          })}
        />
      </Container>
    </Section>
  );
}
