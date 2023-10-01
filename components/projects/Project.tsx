import { Button, Carousel, Col, Row, Space, Typography } from "antd";
import { IProject } from "./projects-data";
import { Fragment } from "react";
import styled from "styled-components";
import { device } from "@/utils/device";

const StyledProject = styled(Row)`
  && {
    flex-flow: row wrap-reverse;
    @media ${device.md} {
      flex-flow: row wrap;
    }
  }
`;

const Title = styled(Typography.Title)`
  display: none;
  @media ${device.md} {
    display: block;
  }
`;

const TitleSM = styled(Typography.Title)`
  display: block;
  margin-bottom: 12px;
  @media ${device.md} {
    display: none;
  }
`;

const Paragraph = styled(Typography.Paragraph)`
  && {
    margin-top: 12px;
  }
`;

//const { Paragraph } = Typography;
const Project = ({ project }: { project: IProject }) => {
  return (
    <StyledProject justify="space-between" align="middle">
      <Col xs={24} md={10}>
        <Title level={2}>{project.title}</Title>
        <Paragraph>{project.description}</Paragraph>
        <Space style={{ marginBottom: "16px" }}>
          {project.links.map((link) => (
            <Button key={link.id} size="small" icon={link.icon} href={link.link} target="_blank">
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
      <Col xs={24} md={12} style={{ order: 1 }}>
        <TitleSM level={2}>{project.title}</TitleSM>
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
    </StyledProject>
  );
};

export default Project;
