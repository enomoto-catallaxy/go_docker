import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { NewStudent } from "./components/new/student";
import { Seats } from "./components/seats/Seats";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seats" element={<Seats />} />
        <Route path="/new/student" element={<NewStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
