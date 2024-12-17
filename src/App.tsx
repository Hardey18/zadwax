import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recent from "./pages/Recent";
import Starred from "./pages/Starred";
import Projects from "./pages/Projects";
import Support from "./pages/Support";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/recent" element={<Recent />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/support" element={<Support />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
