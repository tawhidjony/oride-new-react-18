import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import WithLogin from "./Route/WithLogin";
const App = () => {
  return (
    <Router>
      <WithLogin />
    </Router>
  );
};

export default App;
