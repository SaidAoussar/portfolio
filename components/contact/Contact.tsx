import {
  Space,
  Typography,
  Row,
  Col,
  Form,
  Input,
  theme,
  Button,
  message
} from "antd";
import Link from "next/link";
import Container from "components/container/Container";
import { Section } from "./styles";

const { Title, Text } = Typography;
const { Item } = Form;
const { TextArea } = Input;

function encode(data: any) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
    .join(`&`);
}

const Contact = () => {
  const formName = `contact`;
  const { token } = theme.useToken();
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    if (values[`bot-field`] === undefined) {
      delete values[`bot-field`];
    }

    fetch(`/`, {
      method: `POST`,
      headers: { "Content-Type": `application/x-www-form-urlencoded` },
      body: encode({
        "form-name": formName,
        ...values
      })
    })
      .then(() => showSuccess())
      .catch((error: any) => showError(error));
  };

  const showSuccess = () => {
    messageApi.open({
      type: "success",
      content: "form submitted successfully"
    });
  };
  const showError = (error: any) => {
    messageApi.open({
      type: "error",
      content: "there was an error submitting the form"
    });
  };
  return (
    <Section id="contact" $bgColor={token.colorBgContainer}>
      {contextHolder}
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

            {/*
              This defines how your form is setup for the Netlify bots.
              Users will not see or interact with this form.
            */}
            <form
              name={formName}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              hidden
            >
              <input type="text" name="full-name" />
              <input type="email" name="email" />
              <textarea name="message"></textarea>
            </form>

            <Form
              name="cf"
              form={form}
              method="POST"
              layout="vertical"
              autoComplete="off"
              onFinish={handleSubmit}
            >
              {/* This is the hidden field that the netlify-honeypot uses. */}
              <Form.Item
                label="Don't fill this out"
                className={`hidden`}
                style={{ display: `none` }}
                name="bot-field"
              >
                <Input type={`hidden`} />
              </Form.Item>

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
