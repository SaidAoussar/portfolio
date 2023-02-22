import { Space, Typography, Row, Col, Form, Input, theme, Button } from "antd";
import Link from "next/link";
import Container from "components/container/Container";
import { Content } from "./styled";

const { Title, Text } = Typography;
const { Item } = Form;
const { TextArea } = Input;

const Contact = () => {
  const { token } = theme.useToken();
  return (
    <Content $bgColor={token.colorBgContainer}>
      <Container>
        <Space
          direction="horizontal"
          style={{
            width: "100%",
            justifyContent: "center",
            marginBottom: "6px"
          }}
        >
          <Title level={2}>Contact</Title>
        </Space>
        <Row justify="center">
          <Col sm={24} md={20} lg={16} xl={12}>
            <Title level={5} style={{ fontWeight: "700" }}>
              Feel free to email me via{" "}
              <Link href="mailto:saidaoussar1998@gmail.com" target="_top">
                saidaoussar1998@gmail.com
              </Link>
            </Title>
            <Form layout="vertical" autoComplete="off">
              <Item label={<Text strong>Full Name :</Text>}>
                <Input
                  name="full-name"
                  type="text"
                  placeholder="full name"
                  size="large"
                />
              </Item>
              <Item label={<Text strong>Email :</Text>}>
                <Input
                  name="email"
                  type="email"
                  placeholder="email"
                  size="large"
                />
              </Item>
              <Item label={<Text strong>Message :</Text>}>
                <TextArea name="message" rows={5} size="large" />
              </Item>
              <Item>
                <Button
                  type="primary"
                  size="large"
                  style={{ fontWeight: "500" }}
                >
                  Send
                </Button>
              </Item>
            </Form>
          </Col>
        </Row>
      </Container>
    </Content>
  );
};

export default Contact;
