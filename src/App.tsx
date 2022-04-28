import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Lesson1 from "./lessons/Lesson1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h2>Please select a lesson</h2>} />
        <Route path="lesson-1" element={<Lesson1 />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <Link to="/lesson-1">Lesson 1</Link>
        </nav>
        <hr />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
