import React, { useCallback, useEffect, useState } from "react";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import Sidebar from "./Components/SideBar/Sidebar";
import Home from "./Components/Home";
import Me from ".//Components/Me";
import "./App.css";
import ContactUs from "./Components/ContactUs";

const App = () => {
  // const [scrollPosition, setScrollPosition] = useState(0);
  const [showComponent, setShowComponent] = useState(0);
  const [showComponent1, setShowComponent1] = useState(0);
  // const [timing, setTiming] = useState(0);

  const handleScroll = useCallback(() => {
    const position = window.scrollY;
    if (position > 250) {
      setShowComponent(1);
    } else {
      setShowComponent(0);
    }

    if (position > 900) {
      setShowComponent1(2);
    } else {
      setShowComponent1(0);
    }
    // setTiming(Math.min((window.scrollY - position) / 50, 1));
    // }, [setShowCompone nt, setTiming]);
  }, [setShowComponent, setShowComponent1]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // window.addEventListener("scroll", handleScroll);

  return (
    <div style={{ fontFamily: "monospace" }}>
      <div className="container">
        {/* <Header /> */}
        <Sidebar />
        <Home />

        {/* <Footer /> */}
      </div>
      <div
        style={{
          opacity: showComponent > 0 || showComponent === 2 ? "1" : "0",
          transition: "opacity 0.8s ease-in-out, transform 1s ease-in-out",
          transform:
            showComponent > 0 ? "translateX(0px)" : "translateX(500px)",
        }}
        id="me"
      >
        <Me />
        {/* className={`contact-us ${showComponent ? "show" : "hide"}`} */}
      </div>
      <div
        style={{
          opacity: showComponent1 >= 2 ? "1" : "0",
          transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
          transform:
            showComponent1 >= 2 ? "translateX(0px)" : "translateX(-500px)",
        }}
        id="contact"
      >
        <h1
          style={{
            transform:
              showComponent1 >= 2 ? `translatey(0px)` : `translatey(30px)`,
            transition: "opacity 2s ease-in-out, transform 0.8s ease-in-out",
            marginLeft: "37%",
            padding: "50px",
            paddingBottom: "20px",
            fontFamily: "cursive",
            fontSize: "50px",
          }}
        >
          Contact Us
        </h1>
        <ContactUs />
      </div>
    </div>
  );
};

export default App;
