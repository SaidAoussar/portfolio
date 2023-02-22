import { Col, Layout, Row, Typography, theme, Space, Button } from "antd";
import styled from "styled-components";
import Image from "next/image";
import Container from "components/container/Container";

type TextProps = {
  $textColor: string;
};
const Text = styled.span<TextProps>`
  color: ${(props) => props.$textColor};
`;
const { Content } = Layout;
const { Title } = Typography;

export const Intro = () => {
  const { token } = theme.useToken();
  return (
    <Content>
      <Container>
        <Row
          align="middle"
          justify={{
            xs: "center",
            sm: "center",
            md: "space-between"
          }}
        >
          <Col span={10} xs={22} md={10}>
            <Title level={4} style={{ margin: "0px 0px 8px" }}>
              Hi There,
            </Title>
            <Title level={1} style={{ margin: "0px 0px 8px" }}>
              My name is{" "}
              <Text $textColor={token.colorPrimary}>Said Aoussar</Text>
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
          <Col xs={0} md={11}>
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
