import React, { useState } from "react";
import tabsData from "./SideBarData";

const Tabs = () => {
  const [isHovering, setIsHovering] = useState(null);

  function handleMouseEnter(element) {
    setIsHovering(element);
  }

  function handleMouseLeave() {
    setIsHovering(null);
  }
  return (
    <div>
      {tabsData.map((tabData) => (
        <li
          key={tabData.id}
          className="nav-item"
          style={{
            fontSize: isHovering == tabData.value ? "30px" : "20px",
            transition: "0.5s",
            padding: "15px",
          }}
        >
          <a
            className="nav-link"
            aria-current="page"
            href={tabData.href}
            onMouseEnter={() => handleMouseEnter(tabData.value)}
            onMouseLeave={handleMouseLeave}
          >
            <i className={tabData.icon}></i> {tabData.name}
          </a>
        </li>
      ))}
    </div>
  );
};

export default Tabs;
