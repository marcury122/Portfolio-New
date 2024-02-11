import React from "react";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import Sidebar from "./Components/SideBar/Sidebar";
import Home from "./Components/Home";
import Me from ".//Components/Me";
import "./App.css";
import ContactUs from "./Components/ContactUs";

const App = () => {
  return (
    <div>
      <div className="container">
        {/* <Header /> */}
        <Sidebar />
        <Home />

        {/* <Footer /> */}
      </div>
      <Me />
      <h1
        style={{
          marginLeft: "40%",
          padding: "50px"
        }}
      >
        Contact Us
      </h1>
      <ContactUs />
    </div>
  );
};

export default App;
