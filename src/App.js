import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Region from "./components/Region";
import Hargeisa from "./components/cities/Hargeisa";
import Burco from "./components/cities/Burco";
import Berbera from "./components/cities/Berbera";
import Mogadishu from "./components/cities/Mogadishu";
import Kismaayo from "./components/cities/Kismaayo";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/burco" element={<Burco />} />
          <Route path="/kismaayo" element={<Kismaayo />} />
          <Route path="/mogadishu" element={<Mogadishu />} />
          <Route path="/berbera" element={<Berbera />} />
          <Route path="/burco" element={<Burco />} />
          <Route path="/hargeisa" element={<Hargeisa />} />
          <Route path="/" element={<Region />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
