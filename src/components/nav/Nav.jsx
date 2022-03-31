import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";

import "./Nav.css";
import classnames from "classnames";

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinksClassname = classnames("nav-links", {
    "nav-active": toggleMenu,
  });

  const menuItems = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "About",
      href: "#",
    },
    {
      title: "Work",
      href: "#",
    },
    {
      title: "Projects",
      href: "#",
    },
  ];
  return (
    <nav>
      <div className="logo">
        <h4>The Logo</h4>
      </div>
      <ul className={navLinksClassname}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.title}</a>
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
    </nav>
  );
}

export default Nav;
