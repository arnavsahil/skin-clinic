import React from "react";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";

const App = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Home></Home>
      <Services></Services>
      <About></About>
    </div>
  );
};

export default App;
