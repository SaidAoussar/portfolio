import { Col, Row, Typography } from "antd";
import "./Contact.css";

const { Title, Link } = Typography;

function Contact() {
  return (
    <div>
      <Row justify="center">
        <Col span={10}>
          <Title level={5} style={{ fontWeight: "700" }}>
            Feel free to email me via{" "}
            <Link href="mailto:saidaoussar1998@gmail.com" target="_top">
              saidaoussar1998@gmail.com
            </Link>
            <form
              name="contact"
              method="post"
              netlify="true"
              onSubmit="submit"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out if you’re human:
                  <input name="bot-field" />
                </label>
              </div>
              <div>
                <label>
                  Full name:
                  <input type="text" name="full-name" />
                </label>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" />
              </div>
              <div>
                <label>
                  Message:
                  <textarea name="message"></textarea>
                </label>
              </div>
              <button type="submit">Send</button>
            </form>
          </Title>
          <Title></Title>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
