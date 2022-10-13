import { Col, Row, Typography, Input, Space, Button } from "antd";

import "./Contact.css";

const { Title, Link } = Typography;
const { TextArea } = Input;

function Contact() {
  return (
    <div className="contact" id="contact">
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center" }}
      >
        <h1>Contact</h1>
      </Space>
      <div className="container">
        <Row justify="center">
          <Col sm={24} md={20} lg={16} xl={10}>
            <Title level={5} style={{ fontWeight: "700" }}>
              Feel free to email me via{" "}
              <Link href="mailto:saidaoussar1998@gmail.com" target="_top">
                saidaoussar1998@gmail.com
              </Link>
            </Title>
            <form
              name="contact"
              method="post"
              netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out if you’re human:
                  <input name="bot-field" />
                </label>
              </div>
              <div className="input-wrapper">
                <label>
                  Full name:
                  <Input
                    type="text"
                    required
                    name="full-name"
                    size="large"
                    placeholder="full name"
                  />
                </label>
              </div>
              <div class="input-wrapper">
                <label>
                  Email:
                  <Input
                    type="email"
                    name="email"
                    required
                    size="large"
                    placeholder="email"
                  />
                </label>
              </div>
              <div class="input-wrapper">
                <label>
                  Message:
                  <TextArea name="message" rows={6} required></TextArea>
                </label>
              </div>
              <Button htmlType="submit" type="primary" size="large">
                Send
              </Button>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Contact;
