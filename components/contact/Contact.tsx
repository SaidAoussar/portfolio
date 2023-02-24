import { Space, Typography, Row, Col, Form, Input, theme, Button } from "antd";
import Link from "next/link";
import Container from "components/container/Container";
import { Section } from "./styles";

const { Title, Text } = Typography;
const { Item } = Form;
const { TextArea } = Input;

const Contact = () => {
  const { token } = theme.useToken();
  return (
    <Section id="contact" $bgColor={token.colorBgContainer}>
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
            <Form
              name="contact"
              action="/success"
              method="POST"
              layout="vertical"
              autoComplete="off"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <Item label={<Text strong>Full Name :</Text>}>
                <Input
                  name="full-name"
                  type="text"
                  placeholder="full name"
                  size="large"
                  required
                />
              </Item>
              <Item label={<Text strong>Email :</Text>}>
                <Input
                  name="email"
                  type="email"
                  placeholder="email"
                  size="large"
                  required
                />
              </Item>
              <Item label={<Text strong>Message :</Text>}>
                <TextArea name="message" rows={5} size="large" required />
              </Item>
              <Item>
                <Button
                  type="primary"
                  size="large"
                  style={{ fontWeight: "500" }}
                  htmlType="submit"
                >
                  Send
                </Button>
              </Item>
            </Form>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Contact;
