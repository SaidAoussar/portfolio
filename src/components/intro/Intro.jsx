import React from "react";
import { Row, Col, Space, Button } from "antd";
import "./Intro.css";
import introvector from "../../assets/img/introvector.png";

function Intro() {
  return (
    <div className="intro" id="home">
      <Row align="middle" justify="center">
        <Col lg={10} offset={2} md={20} className="text-section">
          <h4>Hi there ,</h4>
          <h1>
            My name is <span>Said Aoussar</span>
          </h1>
          <h2>I am a Full-Stack Developer</h2>
          <Space size="middle">
            <Button href="#contact" type="primary" size="large">
              Get In Touch
            </Button>
            <Button type="default" size="large">
              Download Resume
            </Button>
          </Space>
        </Col>
        <Col lg={10} className="img-section">
          <img src={introvector} alt="Logo" />
        </Col>
      </Row>
    </div>
  );
}

export default Intro;
