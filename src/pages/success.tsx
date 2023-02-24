import { Alert, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Container from "components/container/Container";
import Link from "next/link";

export default function Success() {
  return (
    <div
      style={{
        marginTop: "64px",
        padding: "64px 0px"
      }}
    >
      <Container>
        <Alert
          type="success"
          message="Form successfully submitted!"
          style={{ marginBottom: "8px" }}
        />
        <Link href="/#home">
          <Button icon={<ArrowLeftOutlined />} type="primary">
            Home
          </Button>
        </Link>
      </Container>
    </div>
  );
}
