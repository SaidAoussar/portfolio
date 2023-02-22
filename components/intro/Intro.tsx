import { Col, Layout, Row, Typography, theme, Space, Button } from "antd";
import styled from "styled-components";
import Image from "next/image";
import Container from "components/container/Container";
import { device } from "@/utils/device";

type TextProps = {
  $textColor: string;
};
const Text = styled.span<TextProps>`
  color: ${(props) => props.$textColor};
`;

const Section = styled.section`
  margin-top: 64px;
  padding: 64px 0px;
  scroll-margin-top: 64px;
  @media ${device.md} {
    padding: 0px;
  } ;
`;

const TextCol = styled(Col)`
  text-align: center;
  @media ${device.md} {
    text-align: initial;
  }
`;

const H1 = styled(Typography.Title)`
  && {
    font-size: 30px;
    @media ${device.md} {
      font-size: 30px;
    }
    @media ${device.lg} {
      font-size: 34px;
    }
    @media ${device.xl} {
      font-size: 38px;
    }
  }
`;

const H3 = styled(Typography.Title)`
  && {
    font-size: 20px;
    @media ${device.lg} {
      font-size: 24px;
    }
  }
`;
const { Content } = Layout;
const { Title } = Typography;

export const Intro = () => {
  const { token } = theme.useToken();

  return (
    <Section id="intro">
      <Container>
        <Row
          align="middle"
          justify={{
            xs: "center",
            sm: "center",
            md: "space-between"
          }}
        >
          <TextCol xs={22} md={12}>
            <Title level={4} style={{ margin: "0px 0px 8px" }}>
              Hi There,
            </Title>
            <H1 level={1} style={{ margin: "0px 0px 8px" }}>
              My name is{" "}
              <Text $textColor={token.colorPrimary}>Said Aoussar</Text>
            </H1>
            <H3 level={3} style={{ margin: "0px 0px 12px" }}>
              I am a Full-Stack Developer
            </H3>
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
          </TextCol>
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
    </Section>
  );
};
