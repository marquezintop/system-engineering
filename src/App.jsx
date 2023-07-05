import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import IntroductionPage from "./pages/introductionPage/IntroductionPage"
import MapPage from "./pages/MapPage/MapPage"

function App() {

  return (
      <>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<IntroductionPage />}/>
        <Route path="/mapa" element={<MapPage/>}/>
        <Route path="/jogo" element={<IntroductionPage/>}/>
      </Routes>
      </BrowserRouter>
      </>
    )
}

export default App
