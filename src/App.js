import React from "react";
import NavBar from "./components/NavBar";
import Dashboard from "./views/dashboard";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Dashboard></Dashboard> {/*TODO: It will be added in the router*/}
    </div>
  );
}

export default App;
