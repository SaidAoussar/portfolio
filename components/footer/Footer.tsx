import { Layout, Space } from "antd";
import Link from "next/link";

const Footer = () => {
  return (
    <Layout.Footer>
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center", fontSize: "16px" }}
      >
        © 2023, made by ❤ by
        <Link href="https://twitter.com/SaidAoussar1" target="_blank">
          Said Aoussar
        </Link>
      </Space>
    </Layout.Footer>
  );
};

export default Footer;
