import Link from "next/link";
import Image from "next/image";
import { Menu, Layout, Row, Col, Switch, Drawer, theme } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import DarkIcon from "public/img/dark-icon.svg";
import LightIcon from "public/img/light-icon.svg";
import { useAtom } from "jotai";
import { themeAtom } from "@/atom/theme";
import styled from "@emotion/styled";
import { useState } from "react";
import Container from "components/container/Container";

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

const LinksMenu = styled(Menu)`
  display: none;
  border-bottom: none;
  background-color: transparent;
  margin-right: 10px;
  flex: auto;
  justify-content: end;
  @media (min-width: 768px) {
    display: flex;
  }
`;
const MobileMenu = styled(Menu)`
  && {
    border-inline-end: none;
    background-color: transparent;
    &.ant-menu-light.ant-menu-vertical {
      border-inline-end: none;
    }
  }
`;
const { useToken } = theme;
const { Header } = Layout;
const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
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
        borderBottom: `1px solid ${token.colorBorder}`
      }}
    >
      <Container>
        <Row align="middle">
          <Col>
            <h4>{`<AOUSSAR/>`}</h4>
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
              <LinksMenu theme={theme} items={items} mode="horizontal" />
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
                <MobileMenu items={items} mode="vertical" />
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
