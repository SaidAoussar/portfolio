import { Layout } from "antd";
import "./App.css";
import Nav from "./componets/nav/Nav";
import Intro from "./componets/intro/Intro";
import Skills from "./componets/skills/Skills";
import Projects from "./componets/projects/Projects";
import Contact from "./componets/contact/Contact";

const { Header, Content } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Header
          style={{
            backgroundColor: "#ffffff",
            padding: "0px",
          }}
        >
          <Nav />
        </Header>
        <Content className="content-intro">
          <Intro />
        </Content>
        <Content className="content-skills">
          <Skills />
        </Content>
        <Content className="content-projects">
          <Projects />
        </Content>
        <Content className="content-contact">
          <Contact />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
