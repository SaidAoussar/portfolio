import Link from "next/link";
import Image from "next/image";
import { Menu, Layout, Row, Col, Switch, Drawer, theme } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import DarkIcon from "public/img/dark-icon.svg";
import LightIcon from "public/img/light-icon.svg";
import { useAtom } from "jotai";
import { themeAtom } from "@/atom/theme";
import { useState } from "react";
import Container from "components/container/Container";
import * as S from "./styles";

const items = [
  {
    label: (
      <Link href="#intro" scroll={false}>
        Home
      </Link>
    ),
    key: "home"
  },
  {
    label: (
      <Link href="#skills" scroll={false}>
        Skills
      </Link>
    ),
    key: "skills"
  },
  {
    label: (
      <Link href="#projects" scroll={false}>
        Projects
      </Link>
    ),
    key: "projects"
  },
  {
    label: (
      <Link href="#contact" scroll={false}>
        Contact
      </Link>
    ),
    key: "contact"
  }
];

const { useToken } = theme;
const { Header } = Layout;
const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const { token } = useToken();
  const [theme, setTheme] = useAtom(themeAtom);

  const showDrawer = () => {
    setOpenDrawer(true);
  };
  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <Header
      className="navbar"
      style={{
        padding: "0px",
        height: "64px",
        backgroundColor: token.colorBgContainer,
        borderBottom: `1px solid ${token.colorBorder}`,
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "20"
      }}
    >
      <Container>
        <Row align="middle">
          <Col>
            <h4>{`<Said Aoussar/>`}</h4>
          </Col>
          <Col style={{ minWidth: "0px", flex: "auto", display: "flex" }}>
            <div
              style={{
                flex: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "end"
              }}
            >
              <S.LinksMenu
                theme={theme}
                items={items}
                mode="horizontal"
                defaultSelectedKeys={[activeLink]}
                onClick={({ key }) => {
                  setActiveLink(key);
                  onCloseDrawer();
                }}
              />
              <SwitchTheme
                className="switch-theme"
                checked={theme === "dark"}
                onChange={(value: boolean) => {
                  setTheme(value ? "dark" : "light");
                }}
              />

              <MenuOutlined className="menu-icon" onClick={showDrawer} />
              <Drawer
                placement="right"
                onClose={onCloseDrawer}
                open={openDrawer}
              >
                <S.MobileMenu
                  items={items}
                  mode="vertical"
                  defaultSelectedKeys={[activeLink]}
                  onClick={({ key }) => {
                    setActiveLink(key);
                    onCloseDrawer();
                  }}
                />
                <SwitchTheme
                  checked={theme === "dark"}
                  style={{
                    marginLeft: "20px"
                  }}
                  onChange={(value: boolean) => {
                    setTheme(value ? "dark" : "light");
                  }}
                />
              </Drawer>
            </div>
          </Col>
        </Row>
      </Container>
    </Header>
  );
};

const SwitchTheme = (props: any) => {
  return (
    <Switch
      checkedChildren={<Image src={DarkIcon} alt="dark icon" />}
      unCheckedChildren={<Image src={LightIcon} alt="light icon" />}
      {...props}
    />
  );
};

export default Navbar;
