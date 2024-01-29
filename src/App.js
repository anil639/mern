import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";
//components
import Navigationbar from "./Components/NavigationBar/Navigationbar";
import ReactQuesNdAns from "./Components/ReactJs/ReactQuesNdAns";

function App() {
  return (
    <div className="bg-dark text-white">
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reactJs" element={<ReactQuesNdAns />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
