import { Row, Col, Card, Space, Tag, Divider, Image } from "antd";
import projectsData from "../../data/projects.json";
import "./Projects.css";

const { Meta } = Card;
function Projects() {
  return (
    <div className="projects" id="projects">
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center" }}
      >
        <h1>Projects</h1>
      </Space>
      <div className="container">
        <Row
          gutter={[24, 16]}
          style={{
            marginLeft: "0px",
            marginRight: "0px"
          }}
        >
          {projectsData.map((project) => {
            return (
              <Col key={project.id} lg={8} md={12} sm={24}>
                <Card
                  cover={
                    project.img ? (
                      <Image
                        height={300}
                        src={require(`../../assets/img/projects/${project.img}`)}
                      />
                    ) : (
                      <Image
                        height={300}
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    )
                  }
                >
                  <Meta
                    title={project.title}
                    description={project.description}
                  />
                  {project.with && (
                    <>
                      <Divider orientation="left">With:</Divider>
                      <Space wrap>
                        {project.with.map((name, index) => (
                          <Tag key={index}>{name}</Tag>
                        ))}
                      </Space>
                    </>
                  )}
                  <Divider orientation="left">technologies</Divider>
                  <Space wrap>
                    {project.technologies.map((tech, index) => (
                      <Tag key={index} color="cyan">
                        {tech}
                      </Tag>
                    ))}
                  </Space>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Projects;
