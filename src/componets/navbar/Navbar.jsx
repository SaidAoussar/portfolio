import { Menu, Row, Col } from "antd";
import "./navbar.css";

const LeftMenu = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <a href="">Home</a>
      </Menu.Item>
      <Menu.Item key="contact">
        <a href="">Contact Us</a>
      </Menu.Item>
      <Menu.Item key="about">
        <a href="">about us</a>
      </Menu.Item>
    </Menu>
  );
};

function Navbar() {
  return (
    <div>
      <nav className="menuBar container">
        <Row>
          <Col span={10}>
            <div className="logo">
              <a href="">aoussar</a>
            </div>
          </Col>
          <Col span={10} offset={4}>
            <div className="rightMenu">
              <LeftMenu />
            </div>
          </Col>
        </Row>
      </nav>
    </div>
  );
}

export default Navbar;
