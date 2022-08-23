import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import Announcement from "./components/layout/Announcement";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Announcement />
      <div className="container w-full">
        <Navbar />
        <main className="container w-full mx-auto px-3 py-5">
          <Home />
        </main>
      </div>
    </Router>
  );
}

export default App;
