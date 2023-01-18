import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./components/home/Home";
import { Seats } from "./components/seats/Seats";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seats" element={<Seats />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
