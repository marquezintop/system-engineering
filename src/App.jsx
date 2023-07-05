import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import IntroductionPage from "./pages/introductionPage/IntroductionPage"
import MapPage from "./pages/MapPage/MapPage";
import { useState } from "react";
import HangGamePage from "./pages/hangGame/HangGamePage";

function App() {

  const [page, setPage] = useState('Introduction');
  const [visible, setVisible] = useState(true)

  return (
      <>
      <BrowserRouter>
      <Header page={page} visible={visible}></Header>
      <Routes>
        <Route path="/" element={<IntroductionPage setPage={setPage}/>}/>
        <Route path="/mapa" element={<MapPage setPage={setPage}/>}/>
        <Route path="/jogo" element={<HangGamePage setVisible={setVisible}/>}/>
      </Routes>
      </BrowserRouter>
      </>
    )
}

export default App
