import { Space } from "antd";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center" }}
      >
        <p>
          Made with <span>❤</span> by Said Aoussar
        </p>
      </Space>
    </div>
  );
}

export default Footer;
