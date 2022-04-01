import { Row, Col, Card, Space } from "antd";
import { GithubOutlined, EyeOutlined } from "@ant-design/icons";
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
      <Row
        gutter={[24, 16]}
        style={{ padding: "0px 100px", marginLeft: "0px", marginRight: "0px" }}
      >
        <Col span={8}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <GithubOutlined key="github" />,
              <EyeOutlined key="demo" />,
            ]}
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <GithubOutlined key="github" />,
              <EyeOutlined key="demo" />,
            ]}
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <GithubOutlined key="github" />,
              <EyeOutlined key="demo" />,
            ]}
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <GithubOutlined key="github" />,
              <EyeOutlined key="demo" />,
            ]}
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <GithubOutlined key="github" />,
              <EyeOutlined key="demo" />,
            ]}
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Projects;
