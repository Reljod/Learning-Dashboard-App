import React from "react";
import NavBar from "./components/NavBar";
import Dashboard from "./views/dashboard";
import Notes from "./views/notes";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { 
  BrowserRouter as Router, 
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
