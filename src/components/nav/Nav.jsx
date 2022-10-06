import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import classnames from "classnames";
import { Link } from "react-scroll";

import "./Nav.css";

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinksClassname = classnames("nav-links", {
    "nav-active": toggleMenu
  });

  const menuItems = [
    {
      title: "Home",
      href: "#home"
    },
    {
      title: "Skills",
      href: "#skills"
    },
    {
      title: "Projects",
      href: "#projects"
    },
    {
      title: "Contact",
      href: "#contact"
    }
  ];
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <h4>{`<AOUSSAR/>`}</h4>
        </div>
        <ul className={navLinksClassname}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.title.toLowerCase()}
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={500}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="menu-icon" onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu ? (
            <CloseOutlined style={{ fontSize: "20px", color: "white" }} />
          ) : (
            <MenuOutlined style={{ fontSize: "20px", color: "white" }} />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
