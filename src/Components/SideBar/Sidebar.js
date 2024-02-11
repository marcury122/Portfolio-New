import React from "react";
import "../../App.css";
import Tabs from "./Tabs";
import tabsData from "./SideBarData";
// import Hamburger from "./Hamburger";

const Sidebar = () => {
  // const [isHovering, setIsHovering] = useState(null);

  // function handleMouseEnter(element) {
  //   setIsHovering(element);
  // }

  // function handleMouseLeave() {
  //   setIsHovering(null);
  // }

  return (
    // <div>
    //   <Hamburger />
    //   <div class="sidebar sidebarGo">
    //       <nav>
    //         <ul>
    //           <li>
    //             <a href="/"><i class="fa-solid fa-house"></i>home</a>
    //           </li>
    //           <li>
    //             <a href="#me"><i class="fa-solid fa-user"></i> me</a>
    //           </li>
    //           <li>
    //             <a href="21045152_Mehul_Jain_SWE (1).pdf" target="_blank"><i class="fa-solid fa-file"></i>CV</a>
    //           </li>
    //           <li>
    //             <a href="/"
    //               ><i class="fa-solid fa-layer-group"></i>Projects</a>
    //           </li>
    //           <li>
    //             <a href="/ContactUs.html"><i class="fa-solid fa-circle-info"></i>contact us</a>
    //           </li>
    //         </ul>
    //       </nav>
    //   </div>
    // </div>

    <nav
      class="navbar navbar-dark bg-dark fixed-top"
      style={{ height: "86px" }}
    >
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#"
          style={{ fontSize: "40px", marginLeft: "30px" }}
        >
          Mehul Jain
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5
              class="offcanvas-title"
              id="offcanvasDarkNavbarLabel"
              style={{ fontSize: "35px" }}
            >
              Mehul Jain
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <Tabs tabsData={tabsData} />

              {/* 

              <li
                class="nav-item"
                style={{
                  fontSize: isHovering == "Element 1" ? "30px" : "20px",
                  transition: "0.5s",
                  padding: "15px",
                }}
              >
                <a
                  class="nav-link "
                  aria-current="page"
                  href="#"
                  onMouseEnter={() => handleMouseEnter("Element 1")}
                  onMouseLeave={handleMouseLeave}
                >
                  <i class="fa-solid fa-user"></i> Home
                </a>
              </li>
              <li
                class="nav-item"
                style={{
                  fontSize: isHovering == "Element 2" ? "30px" : "20px",
                  transition: "0.5s",
                  padding: "15px",
                }}
              >
                <a
                  class="nav-link"
                  href="#"
                  onMouseEnter={() => handleMouseEnter("Element 2")}
                  onMouseLeave={handleMouseLeave}
                >
                  <i class="fa-solid fa-file"></i> CV
                </a>
              </li>
              <li
                class="nav-item"
                style={{
                  fontSize: isHovering == "Element 3" ? "30px" : "20px",
                  transition: "0.5s",
                  padding: "15px",
                }}
              >
                <a
                  class="nav-link"
                  href="#"
                  onMouseEnter={() => handleMouseEnter("Element 3")}
                  onMouseLeave={handleMouseLeave}
                >
                  <i class="fa-solid fa-layer-group"></i>Projects
                </a>
              </li>
              <li
                class="nav-item"
                style={{
                  fontSize: isHovering == "Element 4" ? "30px" : "20px",
                  transition: "0.5s",
                  padding: "15px",
                }}
              >
                <a
                  class="nav-link"
                  href="#"
                  onMouseEnter={() => handleMouseEnter("Element 4")}
                  onMouseLeave={handleMouseLeave}
                >
                  <i class="fa-solid fa-circle-info"></i> ContactUs
                </a>
              </li>
             */}

              {/* <li class="nav-item dropdown"> 
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            <form class="d-flex mt-3" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
