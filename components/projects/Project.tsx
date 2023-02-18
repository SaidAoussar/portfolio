import { Button, Carousel, Col, Row, Space, Typography } from "antd";
import { IProject } from "./projects-data";
import { Fragment } from "react";

const { Title, Paragraph } = Typography;
const Project = ({ project }: { project: IProject }) => {
  return (
    <Row justify="space-between" align="middle">
      <Col span={10}>
        <Title level={2}>{project.title}</Title>
        <Paragraph>{project.description}</Paragraph>
        <Space style={{ marginBottom: "16px" }}>
          {project.links.map((link) => (
            <Button key={link.id} size="small" icon={link.icon}>
              {link.text}
            </Button>
          ))}
        </Space>
        <Space style={{ display: "flex" }}>
          {project.tools.map((tool) => (
            <Fragment key={tool.id}>{tool.icon}</Fragment>
          ))}
        </Space>
      </Col>
      <Col span={12}>
        <Carousel autoplay>
          {project.pictures.map((picture, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={index}
              loading="lazy"
              src={picture}
              style={{ width: "100%", objectFit: "cover" }}
              alt={`image carousel ${index}`}
            />
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default Project;
