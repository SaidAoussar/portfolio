import { Layout } from "antd";
import "./App.css";
import Navbar from "./componets/navbar/Navbar";
import Nav from "./componets/nav/Nav";

const { Header } = Layout;

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
      </Layout>
    </div>
  );
}

export default App;
