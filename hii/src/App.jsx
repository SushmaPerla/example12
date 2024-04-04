import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <div>sushma</div> */}
    </>
  );
}

export default App;
