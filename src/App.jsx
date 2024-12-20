import React from "react";
import "./App.css";
import Home from "./Components/AllComponents/Home";
import ThemeContext from "./Components/ContextWrapper/ThemeContext";

const App = () => {
  return (
    <div>
      <ThemeContext>
        <Home />
      </ThemeContext>
    </div>
  );
};

export default App;
