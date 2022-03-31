import { Layout } from "antd";
import "./App.css";
import Nav from "./components/nav/Nav";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

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
