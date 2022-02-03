import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Region from "./components/Region";
import Hargeisa from "./components/cities/Hargeisa";
import Burco from "./components/cities/Burco";
import Berbera from "./components/cities/Berbera";
import Mogadishu from "./components/cities/Mogadishu";
import Kismaayo from "./components/cities/Kismaayo";
//
import MogResources from "./components/resources/MogResources";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          {/* resource pages below */}
          <Route path="/mogadishu/mog-res" element={<MogResources />} />
          {/* city pages below */}
          <Route path="/burco" element={<Burco />} />
          <Route path="/kismaayo" element={<Kismaayo />} />
          <Route path="/mogadishu" element={<Mogadishu />} />
          <Route path="/berbera" element={<Berbera />} />
          <Route path="/burco" element={<Burco />} />
          <Route path="/hargeisa" element={<Hargeisa />} />
          <Route path="/ambitious-somalia" element={<Region />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
