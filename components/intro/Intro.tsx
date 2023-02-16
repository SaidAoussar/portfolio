import { Col, Layout, Row, Typography, theme, Space, Button } from "antd";
import { css } from "@emotion/css";
import introIcon from "public/img/intro-icon.svg";
import Image from "next/image";
import Container from "components/container/Container";

const { Content } = Layout;
const { Title, Text } = Typography;
const useStyles = () => {
  const { token } = theme.useToken();
  return {
    colorPrimary: css`
      color: ${token.colorPrimary};
    `
  };
};
export const Intro = () => {
  const styles = useStyles();
  return (
    <Content>
      <Container>
        <Row align="middle" justify="space-between">
          <Col span={10}>
            <Title level={4} style={{ margin: "0px 0px 8px" }}>
              Hi There,
            </Title>
            <Title level={1} style={{ margin: "0px 0px 8px" }}>
              My name is{" "}
              <span className={styles.colorPrimary}>Said Aoussar</span>
            </Title>
            <Title level={3} style={{ margin: "0px 0px 12px" }}>
              I am a Full-Stack Developer
            </Title>
            <Space>
              <Button
                type="primary"
                size="large"
                style={{
                  fontWeight: "500"
                }}
              >
                Get In Touch
              </Button>
              <Button
                type="default"
                size="large"
                style={{
                  fontWeight: "500"
                }}
              >
                Resume
              </Button>
            </Space>
          </Col>
          <Col span={11}>
            <Image
              src="/img/intro-icon.svg"
              alt="developer"
              height={500}
              width={500}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </Content>
  );
};
