import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Introduction from "./pages/introduction/Introduction"

function App() {

  return (
      <>
      <Header></Header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction/>}/>
      </Routes>
      </BrowserRouter>
      </>
    )
}

export default App
