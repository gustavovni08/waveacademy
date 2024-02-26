import Vue from "./views/vue"
import Home from "./views/home";
import React from "./views/react";
import Angular from "./views/angular"
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/Vue" Component={Vue} />
          <Route exact path="/React" Component={React} />
          <Route exact path="/Angular" Component={Angular} />
        </Routes>
      </Router>
  );
}

export default App;
