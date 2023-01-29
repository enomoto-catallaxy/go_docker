import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./components/home/Home";
import { NewStudent } from "./components/new/student";
import { Seats } from "./components/seats/Seats";
import { SideBar } from "./components/sidebar";
import { Welcome } from "./components/welcome";

function App() {
  return (
    <Wrapper>
      <SideBar />
      <Content>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seats" element={<Seats />} />
            <Route path="/new/student" element={<NewStudent />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </BrowserRouter>
      </Content>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Content = styled.div`
  width: 80%;
`;
