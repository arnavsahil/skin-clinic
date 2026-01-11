import React from "react";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Experts from "./components/Experts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Home></Home>
      <Services></Services>
      <About></About>
      <Experts></Experts>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
