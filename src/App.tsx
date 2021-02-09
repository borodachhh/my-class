import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import PupilOverview from "./pages/PupilOverview/PupilOverview";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" children={<Home />} />
            <Route path="/pupil/:id" children={<PupilOverview />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
