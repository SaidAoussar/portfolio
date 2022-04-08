import { Row, Col, Card, Space, Tag, Divider, Image } from "antd";
import { GithubOutlined, EyeOutlined } from "@ant-design/icons";
import projectsData from "../../data/projects.json";
import "./Projects.css";

const { Meta } = Card;
function Projects() {
  console.log(JSON.stringify(projectsData));
  return (
    <div className="projects" id="projects">
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center" }}
      >
        <h1>Projects</h1>
      </Space>
      <Row
        gutter={[24, 16]}
        style={{ padding: "0px 100px", marginLeft: "0px", marginRight: "0px" }}
      >
        {projectsData.map((project) => {
          return (
            <Col lg={8} md={12} sm={24}>
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
                // actions={[
                //   <GithubOutlined key="github" />,
                //   <EyeOutlined key="demo" />,
                // ]}
              >
                <Meta title={project.title} description={project.description} />
                {project.with && (
                  <>
                    <Divider orientation="left">With:</Divider>
                    <Space wrap>
                      {project.with.map((name) => (
                        <Tag>{name}</Tag>
                      ))}
                    </Space>
                  </>
                )}
                <Divider orientation="left">technologies</Divider>
                <Space wrap>
                  {project.technologies.map((tech) => (
                    <Tag color="cyan">{tech}</Tag>
                  ))}
                </Space>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Projects;
