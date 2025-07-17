import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="">
      {/* App container  */}
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
