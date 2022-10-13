import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import classnames from "classnames";
import { Link } from "react-scroll";
import useBodyScrollLock from "../../hooks/useBodyScrollLock";

import "./Nav.css";
import { useEffect } from "react";

const mediaQuery = "(min-width: 769px)";
const mediaQueryMatch = window.matchMedia(mediaQuery);

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [, toggle] = useBodyScrollLock();

  useEffect(() => {
    const handleChange = () => {
      if (toggleMenu) {
        toggle();
      }
    };
    mediaQueryMatch.addEventListener("change", handleChange);
    return () => {
      // This is called the cleanup phase aka beforeUnmount
      mediaQueryMatch.removeEventListener("change", handleChange);
    };
  }, [toggleMenu, toggle]);

  const navLinksClassname = classnames("nav-links", "hide-for-mobile", {
    "nav-active": toggleMenu
  });

  const overlayClassname = classnames("overlay", "hide-for-desktop", {
    "overlay--d-block": toggleMenu
  });

  const navMenuClassName = classnames(
    "nav-menu",
    "has-fade",
    "hide-for-desktop",
    {
      "fade-in": toggleMenu
    }
  );

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
      <div className={overlayClassname}></div>
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

        <ul className={navMenuClassName}>
          <li>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.title.toLowerCase()}
                    spy={true}
                    offset={-50}
                    smooth={true}
                    duration={500}
                    onClick={() => {
                      setToggleMenu(!toggleMenu);
                      toggle();
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </li>
        </ul>
        <div
          className="menu-icon"
          onClick={() => {
            setToggleMenu(!toggleMenu);
            toggle();
          }}
        >
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
