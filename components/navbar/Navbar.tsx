import Link from "next/link";
import Image from "next/image";
import { Menu, Layout, Row, Col, Switch, theme } from "antd";
import DarkIcon from "public/img/dark-icon.svg";
import LightIcon from "public/img/light-icon.svg";
import { useAtom } from "jotai";
import { themeAtom } from "@/atom/theme";

const { useToken } = theme;

const items = [
  {
    label: <Link href="#home">Home</Link>,
    key: "home"
  },
  {
    label: <Link href="#skills">Skills</Link>,
    key: "skills"
  },
  {
    label: <Link href="#projects">Projects</Link>,
    key: "projects"
  },
  {
    label: <Link href="#contact">Contact</Link>,
    key: "contact"
  }
];

const headerStyle = { height: 64, backgroundColor: "#FFFFFF" };

const { Header } = Layout;
const Navbar = () => {
  const { token } = useToken();
  const [theme, setTheme] = useAtom(themeAtom);
  console.log(token);
  return (
    <Header
      style={{
        height: "64px",
        backgroundColor: token.colorBgContainer,
        borderBottom: `1px solid ${token.colorBorder}`
      }}
    >
      <Row align="middle">
        <Col>
          <h4>{`<AOUSSAR/>`}</h4>
        </Col>
        <Col style={{ minWidth: "0px", flex: "auto", display: "flex" }}>
          <div
            style={{
              justifyContent: "end",
              flex: "auto",
              display: "flex",
              alignItems: "center"
            }}
          >
            <Menu
              theme={theme}
              items={items}
              mode="horizontal"
              style={{
                borderBottom: "none",
                backgroundColor: "transparent",
                marginRight: "10px"
              }}
            />
            <Switch
              checkedChildren={<Image src={DarkIcon} alt="dark icon" />}
              unCheckedChildren={<Image src={LightIcon} alt="light icon" />}
              onChange={(value) => {
                setTheme(value ? "dark" : "light");
              }}
            />
          </div>
        </Col>
      </Row>
    </Header>
  );
};

export default Navbar;
