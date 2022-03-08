import React from "react";
import NavBar from "./components/NavBar";
import Dashboard from "./views/dashboard";
import Notes from "./views/notes"

import { 
  BrowserRouter as Router, 
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
	  	<NavBar></NavBar>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/notes" element={<Notes/>} />
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
