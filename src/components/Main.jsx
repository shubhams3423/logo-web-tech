import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Page1";
import Contact from "./Page3";
import About from "./Page2";
import "../componentsCss/Main.css";
import Sidebar from "./Sidebar";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
const Main = () => {
  return (
    <div className="mainContainer">
      <div>
        <Sidebar />
      </div>
      <div className="webPageContainer">
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
